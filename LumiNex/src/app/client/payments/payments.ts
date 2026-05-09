import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService, PaymentInitRequest } from '../../core/services/payment.service';
import { AuthService } from '../../core/services/auth.services';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payments.html',
  styleUrl: './payments.css'
})
export class Payments implements OnInit, OnDestroy {

  // Payment method categories
  methodCategory: 'ONLINE' | 'MOBILE_WALLET' | 'BANK' | 'CASH' = 'ONLINE';

  // Sub-method within each category
  selectedWallet: string = 'bkash';
  selectedBank: string = 'visa';

  isInstallment = false;
  installmentMonths = '3';
  loadingPayment = false;
  paymentUrl: string | null = null;
  private sslScript: HTMLScriptElement | null = null;

  // Status banner (populated from query params after redirect)
  paymentStatus: 'success' | 'failed' | 'cancelled' | null = null;
  tranId: string | null = null;
  paidAmount: string | null = null;

  // Plans
  plans: { id: string; name: string; price: number }[] = [];
  selectedPlanId = '';
  selectedPlanName = '';
  selectedPlanPrice = 0;
  initialPlanId: string | null = null;

  // Payment history
  paymentHistory: any[] = [];
  showHistory = false;

  get vat()   { return this.selectedPlanPrice * 0.05; }
  get total() { return this.selectedPlanPrice + this.vat; }

  wallets = [
    { id: 'bkash',  label: 'bKash',  icon: 'bi-phone-fill',      color: '#E2136E', bg: '#fdf0f6' },
    { id: 'nagad',  label: 'Nagad',  icon: 'bi-phone-vibrate-fill', color: '#F05829', bg: '#fff4f0' },
    { id: 'rocket', label: 'Rocket', icon: 'bi-rocket-fill',      color: '#8B2FC9', bg: '#f5f0ff' },
    { id: 'upay',   label: 'Upay',   icon: 'bi-wallet2',          color: '#00A859', bg: '#f0fdf4' },
  ];

  banks = [
    { id: 'visa',       label: 'Visa Card',     icon: 'bi-credit-card-fill',   color: '#1A1F71', bg: '#f0f2ff' },
    { id: 'mastercard', label: 'Mastercard',    icon: 'bi-credit-card-2-front', color: '#EB001B', bg: '#fff0f0' },
    { id: 'amex',       label: 'Amex',          icon: 'bi-credit-card',         color: '#007BC1', bg: '#f0f8ff' },
    { id: 'netbank',    label: 'Net Banking',   icon: 'bi-bank2',               color: '#2E7D32', bg: '#f0fdf4' },
    { id: 'dutch',      label: 'Dutch-Bangla',  icon: 'bi-building-fill',       color: '#D32F2F', bg: '#fff5f5' },
    { id: 'brac',       label: 'BRAC Bank',     icon: 'bi-bank',                color: '#F57C00', bg: '#fff8f0' },
  ];

  constructor(
    private paymentService: PaymentService,
    public authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['status']) {
        this.paymentStatus = params['status'];
        this.tranId = params['tran_id'] || null;
        this.paidAmount = params['amount'] || null;
      }
      if (params['planId']) {
        this.initialPlanId = params['planId'];
      }
    });
    this.loadPlans();
    this.loadHistory();
  }

  loadPlans() {
    this.paymentService.getSubscriptions().subscribe({
      next: data => {
        this.plans = data.map(p => ({ id: p.id, name: p.name, price: p.price }));
        if (this.plans.length > 0) {
          const match = this.initialPlanId
            ? this.plans.find(p => p.id === this.initialPlanId) || this.plans[0]
            : this.plans[0];
          this.selectPlan(match);
        }
      },
      error: () => {
        this.plans = [
          { id: '1', name: 'Digital Foundation',  price: 499  },
          { id: '2', name: 'Growth Accelerator',  price: 1499 },
          { id: '3', name: 'A-to-Z Launchpad',    price: 3499 },
        ];
        const match = this.initialPlanId
          ? this.plans.find(p => p.id === this.initialPlanId) || this.plans[0]
          : this.plans[0];
        this.selectPlan(match);
      }
    });
  }

  loadHistory() {
    const user = this.authService.currentUser;
    if (!user) return;
    this.paymentService.getPayments().subscribe({
      next: (data: any[]) => {
        this.paymentHistory = data
          .filter(p => p.clientId === user.id)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 5);
      },
      error: () => {}
    });
  }

  onPlanChange(id: string) {
    const plan = this.plans.find(p => p.id === id);
    if (plan) this.selectPlan(plan);
  }

  selectPlan(plan: { id: string; name: string; price: number }) {
    this.selectedPlanId   = plan.id;
    this.selectedPlanName = plan.name;
    this.selectedPlanPrice = plan.price;
  }

  pay() {
    if (this.methodCategory === 'CASH') {
      this.handleCashPayment();
    } else {
      this.handleOnlinePayment();
    }
  }

  handleCashPayment() {
    const user = this.authService.currentUser;
    this.loadingPayment = true;
    this.paymentService.addPayment({
      clientId: user?.id || 'guest',
      client:   user?.name || 'Client',
      item:     this.selectedPlanName,
      amount:   this.total,
      method:   'CASH',
      status:   'PENDING',
      date:     new Date().toISOString().split('T')[0],
    }).subscribe({
      next: () => {
        this.loadingPayment = false;
        this.paymentStatus = 'success';
        this.tranId = 'CASH-' + Date.now();
        this.loadHistory();
      },
      error: () => {
        this.loadingPayment = false;
        alert('Failed to record cash payment. Please try again.');
      }
    });
  }

  handleOnlinePayment() {
    const user = this.authService.currentUser;
    this.loadingPayment = true;

    // Map sub-method → paymentMethod for backend
    let paymentMethodHint = 'ONLINE';
    if (this.methodCategory === 'MOBILE_WALLET') paymentMethodHint = 'MOBILE_WALLET';
    if (this.methodCategory === 'BANK')          paymentMethodHint = 'BANK';

    const payload: PaymentInitRequest = {
      amount:       this.total,
      currency:     'BDT',
      planId:       this.selectedPlanId,
      planName:     this.selectedPlanName,
      clientId:     user?.id || 'guest',
      clientName:   user?.name || 'LumiNex Client',
      clientEmail:  user?.email || 'client@luminex.com',
      clientPhone:  (user as any)?.phone || '01700000000',
      paymentMethod: paymentMethodHint,
    };

    this.paymentService.initiatePayment(payload).subscribe({
      next: (res: any) => {
        this.loadingPayment = false;
        if (res.status === 'SUCCESS' && res.payment_url) {
          // Redirect to SSLCommerz gateway
          window.location.href = res.payment_url;
        } else {
          alert('Could not initiate payment: ' + (res.message || 'Unknown error'));
        }
      },
      error: () => {
        this.loadingPayment = false;
        alert('Payment server error. Make sure the Node server is running on port 4000.\n\nRun: node server.js');
      }
    });
  }

  get methodLabel(): string {
    if (this.methodCategory === 'MOBILE_WALLET') return this.wallets.find(w => w.id === this.selectedWallet)?.label || 'Mobile Wallet';
    if (this.methodCategory === 'BANK') return this.banks.find(b => b.id === this.selectedBank)?.label || 'Card / Bank';
    if (this.methodCategory === 'CASH') return 'Cash Deposit';
    return 'SSLCommerz Gateway';
  }

  ngOnDestroy() {
    if (this.sslScript) this.sslScript.remove();
  }
}