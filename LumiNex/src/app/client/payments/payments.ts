import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container-fluid py-4">
      <div class="mb-4">
        <h2 class="fw-bold text-dark mb-0">Payments & Billing</h2>
        <p class="text-muted">Manage your subscriptions and pay for services.</p>
      </div>

      <div class="row g-4">
        <!-- Payment Options -->
        <div class="col-lg-8">
          <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5">
            <h4 class="fw-bold mb-4">Select Payment Method</h4>
            
            <div class="row g-3">
              <!-- Online Payment -->
              <div class="col-md-6">
                <div class="payment-card border rounded-4 p-4 cursor-pointer" 
                     [class.border-primary]="method === 'ONLINE'" 
                     [class.bg-primary-soft]="method === 'ONLINE'"
                     (click)="method = 'ONLINE'">
                  <div class="d-flex justify-content-between align-items-start mb-3">
                    <div class="bg-primary text-white rounded-3 p-2">
                      <i class="bi bi-globe2 fs-4"></i>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="method" [checked]="method === 'ONLINE'">
                    </div>
                  </div>
                  <h6 class="fw-bold mb-1">Online Payment</h6>
                  <p class="small text-muted mb-0">Mobile Wallets & Bank Cards</p>
                </div>
              </div>

              <!-- Cash Payment -->
              <div class="col-md-6">
                <div class="payment-card border rounded-4 p-4 cursor-pointer" 
                     [class.border-primary]="method === 'CASH'" 
                     [class.bg-primary-soft]="method === 'CASH'"
                     (click)="method = 'CASH'">
                  <div class="d-flex justify-content-between align-items-start mb-3">
                    <div class="bg-success text-white rounded-3 p-2">
                      <i class="bi bi-cash-stack fs-4"></i>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="method" [checked]="method === 'CASH'">
                    </div>
                  </div>
                  <h6 class="fw-bold mb-1">Cash Payment</h6>
                  <p class="small text-muted mb-0">Direct cash or bank deposit</p>
                </div>
              </div>
            </div>

            <!-- Details for Online -->
            <div class="mt-5" *ngIf="method === 'ONLINE'">
              <h5 class="fw-bold mb-3">Online Details</h5>
              <div class="d-flex flex-wrap gap-3 mb-4">
                <div class="wallet-btn border rounded-3 p-3 text-center cursor-pointer" 
                     [class.active]="wallet === 'BKASH'" (click)="wallet = 'BKASH'">
                  <img src="https://logodownload.org/wp-content/uploads/2021/02/bkash-logo.png" style="height: 30px; filter: grayscale(1);" [style.filter]="wallet === 'BKASH' ? 'none' : 'grayscale(1)'">
                </div>
                <div class="wallet-btn border rounded-3 p-3 text-center cursor-pointer" 
                     [class.active]="wallet === 'NAGAD'" (click)="wallet = 'NAGAD'">
                  <img src="https://logos-download.com/wp-content/uploads/2022/01/Nagad_Logo.png" style="height: 30px; filter: grayscale(1);" [style.filter]="wallet === 'NAGAD' ? 'none' : 'grayscale(1)'">
                </div>
                <div class="wallet-btn border rounded-3 p-3 text-center cursor-pointer" 
                     [class.active]="wallet === 'BANK'" (click)="wallet = 'BANK'">
                  <i class="bi bi-bank fs-4 text-muted"></i>
                  <div class="small fw-bold">All Banks</div>
                </div>
              </div>

              <div class="row g-3" *ngIf="wallet">
                <div class="col-md-12">
                  <label class="form-label small fw-bold text-muted">Account Number / Card Number</label>
                  <input type="text" class="form-control bg-light border-0 py-3 rounded-4" placeholder="01XXX XXXXXX">
                </div>
              </div>
            </div>

            <!-- Installment Toggle -->
            <div class="mt-5 p-4 bg-light rounded-4">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h6 class="fw-bold mb-1">Installment Payment</h6>
                  <p class="small text-muted mb-0">Split your payment into monthly parts.</p>
                </div>
                <div class="form-check form-switch fs-4">
                  <input class="form-check-input" type="checkbox" [(ngModel)]="isInstallment">
                </div>
              </div>
              <div class="mt-3 row g-2" *ngIf="isInstallment">
                <div class="col-md-6">
                  <select class="form-select border-0 bg-white">
                    <option>3 Months (0% Interest)</option>
                    <option>6 Months (5% Interest)</option>
                    <option>12 Months (10% Interest)</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="mt-5 text-end">
              <button class="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow" (click)="pay()">Proceed to Pay</button>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div class="col-lg-4">
          <div class="card border-0 shadow-sm rounded-4 p-4">
            <h5 class="fw-bold mb-4">Order Summary</h5>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-secondary">Starter Plan</span>
              <span class="fw-bold">$29.00</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-secondary">Tax (5%)</span>
              <span class="fw-bold">$1.45</span>
            </div>
            <hr class="my-3">
            <div class="d-flex justify-content-between mb-4">
              <span class="fw-bold fs-5">Total</span>
              <span class="fw-bold fs-5 text-primary">$30.45</span>
            </div>
            <div class="bg-primary-soft p-3 rounded-3 mb-4">
              <div class="d-flex align-items-center">
                <i class="bi bi-shield-check text-primary me-2 fs-4"></i>
                <span class="small text-primary fw-bold">Secure SSL Encryption</span>
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
    .payment-card:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
    .wallet-btn { width: 120px; transition: all 0.2s ease; }
    .wallet-btn.active { border-color: #4f46e5 !important; background: #eef2ff; }
  `]
})
export class Payments {
  method: 'ONLINE' | 'CASH' = 'ONLINE';
  wallet: string = '';
  isInstallment: boolean = false;

  pay() {
    alert('Processing payment via ' + (this.wallet || this.method) + '...');
  }
}
