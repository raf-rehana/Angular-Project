// src/app/client/payments/payments.ts
// REPLACE your existing payments.ts with this file

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService, PaymentInitRequest } from '../../core/services/payment.service';
import { AuthService } from '../../core/services/auth.services';

declare const SSLCommerzCheckout: any; // SSLCommerz embedded JS global

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container-fluid py-4">

      <!-- ── Status Banner (after redirect back from SSLCommerz) ── -->
      <div *ngIf="paymentStatus" class="alert rounded-4 mb-4 d-flex align-items-center gap-3"
           [ngClass]="{
             'alert-success': paymentStatus === 'success',
             'alert-danger':  paymentStatus === 'failed',
             'alert-warning': paymentStatus === 'cancelled'
           }">
        <i class="fs-3 bi" [ngClass]="{
             'bi-check-circle-fill': paymentStatus === 'success',
             'bi-x-circle-fill':     paymentStatus === 'failed',
             'bi-slash-circle-fill': paymentStatus === 'cancelled'
           }"></i>
        <div>
          <strong *ngIf="paymentStatus === 'success'">Payment Successful!</strong>
          <strong *ngIf="paymentStatus === 'failed'">Payment Failed</strong>
          <strong *ngIf="paymentStatus === 'cancelled'">Payment Cancelled</strong>
          <div class="small" *ngIf="tranId">Transaction ID: {{ tranId }}</div>
          <div class="small" *ngIf="paidAmount && paymentStatus === 'success'">Amount: ৳{{ paidAmount }}</div>
        </div>
      </div>

      <div class="mb-4">
        <h2 class="fw-bold text-dark mb-0">Payments & Billing</h2>
        <p class="text-muted">Manage your subscriptions and pay for services.</p>
      </div>

      <div class="row g-4">

        <!-- ── Payment Options ── -->
        <div class="col-lg-8">
          <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5">
            <h4 class="fw-bold mb-4">Select Payment Method</h4>

            <div class="row g-3">
              <!-- Online -->
              <div class="col-md-6">
                <div class="payment-card border rounded-4 p-4 cursor-pointer"
                     [class.border-primary]="method === 'ONLINE'"
                     [class.bg-primary-soft]="method === 'ONLINE'"
                     (click)="method = 'ONLINE'">
                  <div class="d-flex justify-content-between align-items-start mb-3">
                    <div class="bg-primary text-white rounded-3 p-2">
                      <i class="bi bi-globe2 fs-4"></i>
                    </div>
                    <input class="form-check-input mt-1" type="radio" name="method" [checked]="method === 'ONLINE'" (click)="method = 'ONLINE'">
                  </div>
                  <h6 class="fw-bold mb-1">Online Payment</h6>
                  <p class="small text-muted mb-0">bKash · Nagad · Cards · Net Banking</p>
                </div>
              </div>

              <!-- Cash -->
              <div class="col-md-6">
                <div class="payment-card border rounded-4 p-4 cursor-pointer"
                     [class.border-primary]="method === 'CASH'"
                     [class.bg-primary-soft]="method === 'CASH'"
                     (click)="method = 'CASH'">
                  <div class="d-flex justify-content-between align-items-start mb-3">
                    <div class="bg-success text-white rounded-3 p-2">
                      <i class="bi bi-cash-stack fs-4"></i>
                    </div>
                    <input class="form-check-input mt-1" type="radio" name="method" [checked]="method === 'CASH'" (click)="method = 'CASH'">
                  </div>
                  <h6 class="fw-bold mb-1">Cash Payment</h6>
                  <p class="small text-muted mb-0">Direct cash or bank deposit</p>
                </div>
              </div>
            </div>

            <!-- Cash instructions -->
            <div class="mt-4 p-4 bg-light rounded-4" *ngIf="method === 'CASH'">
              <h6 class="fw-bold mb-2"><i class="bi bi-info-circle text-primary me-2"></i>Cash Payment Instructions</h6>
              <p class="small text-muted mb-0">
                Please deposit <strong>৳{{ selectedPlanPrice }}</strong> to our bKash merchant <strong>01700000000</strong>
                or visit our office. Your plan will be activated within 24 hours of confirmation.
              </p>
            </div>

            <!-- SSLCommerz Easy Checkout container (popup renders here) -->
            <div id="ssl-checkout-container" class="mt-4" *ngIf="method === 'ONLINE' && paymentUrl">
              <!-- SSLCommerz embeds its iframe here automatically -->
              <div class="text-center py-3 text-muted small">
                <div class="spinner-border spinner-border-sm me-2" *ngIf="loadingPayment"></div>
                <span *ngIf="loadingPayment">Loading secure payment...</span>
              </div>
            </div>

            <!-- Installment toggle (only for online) -->
            <div class="mt-4 p-4 bg-light rounded-4" *ngIf="method === 'ONLINE'">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h6 class="fw-bold mb-1">Installment Payment</h6>
                  <p class="small text-muted mb-0">Split your payment into monthly parts.</p>
                </div>
                <div class="form-check form-switch fs-4">
                  <input class="form-check-input" type="checkbox" [(ngModel)]="isInstallment">
                </div>
              </div>
              <div class="mt-3" *ngIf="isInstallment">
                <select class="form-select border-0 bg-white" [(ngModel)]="installmentMonths">
                  <option value="3">3 Months (0% Interest)</option>
                  <option value="6">6 Months (5% Interest)</option>
                  <option value="12">12 Months (10% Interest)</option>
                </select>
              </div>
            </div>

            <div class="mt-5 text-end">
              <button class="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow"
                      (click)="pay()"
                      [disabled]="loadingPayment">
                <span *ngIf="loadingPayment" class="spinner-border spinner-border-sm me-2"></span>
                <span *ngIf="!loadingPayment"><i class="bi bi-lock-fill me-2"></i>Proceed to Pay</span>
                <span *ngIf="loadingPayment">Connecting...</span>
              </button>
            </div>
          </div>
        </div>

        <!-- ── Order Summary ── -->
        <div class="col-lg-4">
          <div class="card border-0 shadow-sm rounded-4 p-4 sticky-top" style="top: 80px;">
            <h5 class="fw-bold mb-4">Order Summary</h5>

            <!-- Plan selector -->
            <div class="mb-3">
              <label class="form-label small fw-bold text-muted">Selected Plan</label>
              <select class="form-select rounded-3" [(ngModel)]="selectedPlanId" (ngModelChange)="onPlanChange($event)">
                <option *ngFor="let p of plans" [value]="p.id">{{ p.name }} — ৳{{ p.price }}</option>
              </select>
            </div>

            <hr class="my-3">

            <div class="d-flex justify-content-between mb-2">
              <span class="text-secondary">{{ selectedPlanName }}</span>
              <span class="fw-bold">৳{{ selectedPlanPrice }}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-secondary">VAT (5%)</span>
              <span class="fw-bold">৳{{ vat | number:'1.2-2' }}</span>
            </div>
            <hr class="my-3">
            <div class="d-flex justify-content-between mb-4">
              <span class="fw-bold fs-5">Total</span>
              <span class="fw-bold fs-5 text-primary">৳{{ total | number:'1.2-2' }}</span>
            </div>

            <div class="bg-primary-soft p-3 rounded-3 mb-3">
              <div class="d-flex align-items-center">
                <i class="bi bi-shield-check text-primary me-2 fs-5"></i>
                <span class="small text-primary fw-bold">Secured by SSLCommerz</span>
              </div>
            </div>

            <!-- Accepted channels -->
            <div class="text-center">
              <p class="small text-muted mb-2">We accept</p>
              <div class="d-flex flex-wrap gap-2 justify-content-center">
                <span class="badge bg-light text-dark border small">bKash</span>
                <span class="badge bg-light text-dark border small">Nagad</span>
                <span class="badge bg-light text-dark border small">Rocket</span>
                <span class="badge bg-light text-dark border small">Visa</span>
                <span class="badge bg-light text-dark border small">MasterCard</span>
                <span class="badge bg-light text-dark border small">Net Banking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cursor-pointer { cursor: pointer; }
    .bg-primary-soft { background-color: #eef2ff; }
    .payment-card { transition: all 0.2s ease; }
    .payment-card:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,.05); }
  `]
})
export class Payments implements OnInit, OnDestroy {
  method: 'ONLINE' | 'CASH' = 'ONLINE';
  isInstallment = false;
  installmentMonths = '3';
  loadingPayment = false;
  paymentUrl: string | null = null;

  // Status banner (set from query params after redirect)
  paymentStatus: 'success' | 'failed' | 'cancelled' | null = null;
  tranId: string | null = null;
  paidAmount: string | null = null;

  // Plans loaded from db.json subscriptions
  plans: { id: string; name: string; price: number }[] = [];
  selectedPlanId = '';
  selectedPlanName = '';
  selectedPlanPrice = 0;

  get vat() { return this.selectedPlanPrice * 0.05; }
  get total() { return this.selectedPlanPrice + this.vat; }

  private sslScript: HTMLScriptElement | null = null;

  constructor(
    private paymentService: PaymentService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Read status from query params (after SSLCommerz redirect)
    this.route.queryParams.subscribe(params => {
      if (params['status']) {
        this.paymentStatus = params['status'];
        this.tranId = params['tran_id'] || null;
        this.paidAmount = params['amount'] || null;
      }
    });

    // Load plans from db.json
    this.loadPlans();
  }

  loadPlans() {
    // Fetch subscriptions/plans from json-server
    this.paymentService['http']
      .get<any[]>('http://localhost:3000/subscriptions')
      .subscribe({
        next: data => {
          this.plans = data.map(p => ({ id: p.id, name: p.name, price: p.price }));
          if (this.plans.length > 0) this.selectPlan(this.plans[0]);
        },
        error: () => {
          // Fallback hardcoded plans if DB call fails
          this.plans = [
            { id: '1', name: 'Digital Foundation', price: 499 },
            { id: '2', name: 'Growth Accelerator', price: 1499 },
            { id: '3', name: 'A-to-Z Launchpad', price: 3499 },
          ];
          this.selectPlan(this.plans[0]);
        }
      });
  }

  onPlanChange(id: string) {
    const plan = this.plans.find(p => p.id === id);
    if (plan) this.selectPlan(plan);
  }

  selectPlan(plan: { id: string; name: string; price: number }) {
    this.selectedPlanId = plan.id;
    this.selectedPlanName = plan.name;
    this.selectedPlanPrice = plan.price;
  }

  pay() {
    if (this.method === 'CASH') {
      this.handleCashPayment();
      return;
    }
    this.handleOnlinePayment();
  }

  handleCashPayment() {
    const user = this.authService.currentUser;
    this.paymentService.addPayment({
      clientId: user?.id || 'guest',
      client: user?.name || 'Client',
      item: this.selectedPlanName,
      amount: this.total,
      method: 'CASH',
      status: 'PENDING',
      date: new Date().toISOString().split('T')[0],
    }).subscribe({
      next: () => {
        this.paymentStatus = 'success';
        this.tranId = 'CASH-' + Date.now();
      },
      error: () => alert('Failed to record cash payment. Please try again.')
    });
  }

  handleOnlinePayment() {
    const user = this.authService.currentUser;
    this.loadingPayment = true;

    const payload: PaymentInitRequest = {
      amount: this.total,
      currency: 'BDT',
      planId: this.selectedPlanId,
      planName: this.selectedPlanName,
      clientId: user?.id || 'guest',
      clientName: user?.name || 'LumiNex Client',
      clientEmail: user?.email || 'client@luminex.com',
      clientPhone: (user as any)?.phone || '01700000000',
    };

    this.paymentService.initiatePayment(payload).subscribe({
      next: (res) => {
        this.loadingPayment = false;
        if (res.status === 'SUCCESS' && res.payment_url) {
          this.paymentUrl = res.payment_url;
          this.loadEasyCheckout(res.payment_url);
        } else {
          alert('Could not initiate payment: ' + (res.message || 'Unknown error'));
        }
      },
      error: (err) => {
        this.loadingPayment = false;
        console.error(err);
        alert('Payment server error. Make sure the Node server is running on port 4000.');
      }
    });
  }

  loadEasyCheckout(gatewayUrl: string) {
    // Remove any previous SSLCommerz script
    if (this.sslScript) {
      this.sslScript.remove();
      this.sslScript = null;
    }

    // SSLCommerz Easy Checkout: inject their embed script, then open checkout
    this.sslScript = document.createElement('script');
    this.sslScript.src = 'https://sandbox.sslcommerz.com/embed.min.js?' + Math.random().toString(36).substring(7);
    this.sslScript.onload = () => {
      // Their script reads the sslczPayBtn data attribute for the gateway URL
      const btn = document.getElementById('sslcz-pay-trigger') as HTMLButtonElement;
      if (btn) btn.click();
    };
    document.body.appendChild(this.sslScript);

    // Create a hidden trigger button with the gateway URL as endpoint
    let btn = document.getElementById('sslcz-pay-trigger') as HTMLButtonElement;
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'sslcz-pay-trigger';
      btn.style.display = 'none';
      document.body.appendChild(btn);
    }
    btn.setAttribute('id', 'sslczPayBtn');
    btn.setAttribute('token', 'if_you_have_any');
    btn.setAttribute('postdata', '{}');
    btn.setAttribute('order', '');
    btn.setAttribute('endpoint', gatewayUrl);

    // Re-attach the script and trigger
    const script2 = document.createElement('script');
    script2.innerHTML = `
      (function(w,d){
        var loader = function(){
          var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
          s.src = "https://sandbox.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7);
          tag.parentNode.insertBefore(s, tag);
        };
        w.addEventListener ? w.addEventListener("load", loader, false) : w.attachEvent("onload", loader);
        loader();
      })(window, document);
    `;
    document.body.appendChild(script2);

    // Fallback: if embed script doesn't trigger a popup, redirect to the gateway URL directly
    setTimeout(() => {
      const overlayExists = document.querySelector('#SSLCZModal, .sslcz-overlay, iframe[src*="sslcommerz"]');
      if (!overlayExists) {
        window.location.href = gatewayUrl;
      }
    }, 3000);
  }

  ngOnDestroy() {
    if (this.sslScript) this.sslScript.remove();
    const btn = document.getElementById('sslczPayBtn');
    if (btn) btn.remove();
  }
}