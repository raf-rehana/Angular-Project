import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PaymentService, PaymentInitRequest } from '../../core/services/payment.service';
import { AuthService } from '../../core/services/auth.service';
import { PdfGeneratorService } from '../../core/services/pdf-generator.service';
import { ToastService } from '../../core/services/toast.service';
import { ServiceCatalogueService } from '../../core/services/service-catalogue';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
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
  private invoiceGenerated = false;

  // Plans
  plans: { id: string; name: string; price: number }[] = [];
  selectedPlanId = '';
  selectedPlanName = '';
  selectedPlanPrice = 0;
  initialPlanId: string | null = null;
  requestId: string | null = null; // Captured from query params

  // Payment history
  allPayments: any[] = [];
  pendingPayments: any[] = [];
  paidPayments: any[] = [];
  selectedPendingItem: any | null = null;
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
    private router: Router,
    private paymentService: PaymentService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private pdfGeneratorService: PdfGeneratorService,
    private toastService: ToastService,
    private catalogueService: ServiceCatalogueService
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
      if (params['serviceId']) {
        this.selectedPlanId = params['serviceId'];
        this.selectedPlanName = params['serviceName'];
        const amt = Number(params['amount']) || 0;
        if (amt > 0) {
          this.selectedPlanPrice = amt;
        } else {
          this.catalogueService.getServiceById(params['serviceId'].toString()).subscribe({
            next: (service) => {
              this.selectedPlanPrice = service.price || 0;
            },
            error: () => {
              this.selectedPlanPrice = 0;
            }
          });
        }
      }
      if (params['requestId']) {
        this.requestId = params['requestId'];
      }

      if (this.paymentStatus === 'success' && !this.invoiceGenerated) {
        this.triggerAutoInvoice();
        this.loadPayments(); // Instantly refresh payment history after success
      }
    });
    this.loadPlans();
    this.loadPayments();
  }

  loadPlans() {
    this.paymentService.getSubscriptions().subscribe({
      next: data => {
        this.plans = data.map(p => ({ id: p.id, name: p.name, price: p.price }));
        if (this.plans.length > 0) {
          if (this.selectedPlanId) return; // Already set via query params or user action
          if (this.initialPlanId) {
            const match = this.plans.find(p => p.id === this.initialPlanId);
            if (match) this.selectPlan(match);
          }
        }
      },
      error: () => {
        this.plans = [
          { id: '1', name: 'Digital Foundation',  price: 499  },
          { id: '2', name: 'Growth Accelerator',  price: 1499 },
          { id: '3', name: 'A-to-Z Launchpad',    price: 3499 },
        ];
        if (this.initialPlanId) {
          const match = this.plans.find(p => p.id === this.initialPlanId);
          if (match) this.selectPlan(match);
        }
      }
    });
  }

  loadPayments() {
    const user = this.authService.currentUser;
    if (!user) return;
    this.paymentService.getPayments().subscribe({
      next: (data: any[]) => {
        this.allPayments = data.filter(p => String(p.clientId) === String(user.id));
        this.pendingPayments = this.allPayments.filter(p => p.status === 'PENDING');
        this.paidPayments = this.allPayments
          .filter(p => p.status === 'PAID')
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        // If there are pending payments and none selected, maybe auto-select first one
        // but let's keep it manual for better UX.
      },
      error: () => {}
    });
  }

  selectPendingPayment(payment: any) {
    this.selectedPendingItem = payment;
    this.selectedPlanId = payment.id; // Use payment ID as plan ID for initiation
    this.selectedPlanName = payment.item;
    this.selectedPlanPrice = payment.amount;
    this.requestId = payment.requestId || null; // Link back to original request if possible
    
    // Scroll to payment methods
    setTimeout(() => {
      document.querySelector('.method-tabs')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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
      email:    user?.email || '',
      item:     this.selectedPlanName,
      amount:   this.total,
      method:   'CASH',
      status:   'PENDING',
      date:     new Date().toISOString().split('T')[0],
      requestId: this.requestId || undefined,
    }).subscribe({
      next: () => {
        this.loadingPayment = false;
        this.paymentStatus = 'success';
        this.tranId = 'CASH-' + Date.now();
        this.triggerAutoInvoice();
        this.loadPayments();
      },
      error: () => {
        this.loadingPayment = false;
        this.toastService.error('Failed to record cash payment. Please try again.');
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
      paymentId:    this.selectedPendingItem?.id, // Explicit payment ID for reconciliation
      requestId:    this.requestId || undefined,
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
          this.toastService.error('Could not initiate payment: ' + (res.message || 'Unknown error'));
        }
      },
      error: () => {
        this.loadingPayment = false;
        this.toastService.error('Payment server error. Make sure the Node server is running on port 4000.\n\nRun: node server.js');
      }
    });
  }

  generateInvoice(payment: any): void {
    console.log('[ClientPayments] Generating invoice for payment:', payment);
    const invoiceDetails = {
      id: payment.id,
      orderId: payment.id, // Explicitly labeled for clarify
      clientId: payment.clientId || this.authService.currentUser?.id || 'N/A',
      clientName: payment.client,
      clientEmail: payment.email || this.authService.currentUser?.email || '',
      service: payment.item,
      amount: payment.amount,
      date: payment.date
    };
    this.pdfGeneratorService.generateInvoicePdf(invoiceDetails);
  }

  private triggerAutoInvoice() {
    if (this.invoiceGenerated) return;
    this.invoiceGenerated = true;
    
    // Small delay to ensure UI reflects success before showing PDF
    setTimeout(() => {
      const mockPayment = {
        id: this.tranId || 'INV-' + Date.now(),
        clientId: this.authService.currentUser?.id || 'N/A',
        client: this.authService.currentUser?.name || 'Client',
        email: this.authService.currentUser?.email || '',
        item: this.selectedPlanName || 'Service Payment',
        amount: this.total || this.paidAmount,
        date: new Date().toISOString().split('T')[0]
      };
      this.generateInvoice(mockPayment);
    }, 1000);
  }

  get methodLabel(): string {
    if (this.methodCategory === 'MOBILE_WALLET') return this.wallets.find(w => w.id === this.selectedWallet)?.label || 'Mobile Wallet';
    if (this.methodCategory === 'BANK') return this.banks.find(b => b.id === this.selectedBank)?.label || 'Card / Bank';
    if (this.methodCategory === 'CASH') return 'Cash Deposit';
    return 'SSLCommerz Gateway';
  }

  goBack() {
    this.router.navigate(['/client/dashboard']);
  }

  ngOnDestroy() {
    if (this.sslScript) this.sslScript.remove();
  }
}
