import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PaymentService } from '../../core/services/payment.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 lg:py-16">
      <div class="container mx-auto px-4">
        
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl font-black text-slate-900 mb-2">My Subscriptions</h2>
          <p class="text-slate-500">Manage your active startup packages and billing cycles.</p>
        </div>

        <!-- ── VIEW: ACTIVE SUBSCRIPTION ── -->
        <div *ngIf="viewMode === 'ACTIVE'" class="max-w-4xl mx-auto animate-in">
          
          <!-- Case: Has Active Plan -->
          <div *ngIf="activePlan" class="bg-white rounded-[2rem] shadow-premium overflow-hidden border border-slate-100">
            <div class="p-8 lg:p-12">
              <div class="row g-4 align-items-center">
                <div class="col-md-7">
                  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase mb-4">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Active Plan
                  </div>
                  <h3 class="text-3xl font-black text-slate-900 mb-3">{{ activePlan.name }}</h3>
                  <p class="text-slate-600 mb-6 leading-relaxed">
                    You are currently on the <strong>{{ activePlan.name }}</strong> tier. This includes all core services for your startup's phase.
                  </p>
                  
                  <div class="space-y-3 mb-8">
                    <div *ngFor="let feat of activePlan.features" class="flex items-center gap-2 text-slate-600">
                      <i class="bi bi-check2-circle text-emerald-500"></i>
                      <span>{{ feat }}</span>
                    </div>
                  </div>

                  <div class="flex gap-3">
                    <button (click)="viewMode = 'UPGRADE'" class="btn btn-primary px-4 py-2.5 rounded-xl font-bold">
                      Upgrade or Change Plan
                    </button>
                    <button class="btn btn-outline-secondary px-4 py-2.5 rounded-xl font-bold">
                      Billing Details
                    </button>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="bg-slate-50 rounded-2xl p-6 text-center border border-dashed border-slate-200">
                    <div class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Next Billing Date</div>
                    <div class="text-2xl font-black text-slate-900 mb-1">June 16, 2026</div>
                    <div class="text-slate-500 text-sm">Monthly Auto-Renewal</div>
                    <hr class="my-4 opacity-10">
                    <div class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Current Price</div>
                    <div class="text-xl font-black text-primary-600">BDT {{ activePlan.price | number }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Case: No Active Plan -->
          <div *ngIf="!activePlan && !loading" class="bg-white rounded-[2rem] p-12 text-center shadow-sm border border-slate-100">
            <div class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="bi bi-calendar-x text-slate-300 text-3xl"></i>
            </div>
            <h3 class="text-2xl font-black text-slate-900 mb-3">No active subscription</h3>
            <p class="text-slate-500 mb-8 max-w-sm mx-auto">It looks like you haven't subscribed to a startup package yet. Choose a plan to unlock full potential.</p>
            <button (click)="viewMode = 'UPGRADE'" class="btn btn-primary px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm">
              Explore Plans
            </button>
          </div>
        </div>

        <!-- ── VIEW: CHOOSE PLAN (UPGRADE) ── -->
        <div *ngIf="viewMode === 'UPGRADE'" class="animate-in">
          <div class="flex justify-center mb-10">
            <button (click)="viewMode = 'ACTIVE'" class="btn btn-light rounded-pill px-4 py-2 small fw-bold">
              <i class="bi bi-arrow-left me-2"></i> Back to My Subscription
            </button>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div *ngFor="let plan of plans" 
                 class="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-premium transition-all border border-slate-100 flex flex-col h-full"
                 [class.border-primary-500]="activePlan?.id === plan.id">
              
              <div *ngIf="plan.recommended" class="text-center mb-4">
                <span class="bg-primary-50 text-primary-700 text-[10px] font-black uppercase px-3 py-1 rounded-full border border-primary-100">Most Popular</span>
              </div>

              <div class="text-center mb-6">
                <h4 class="text-xl font-black text-slate-900 mb-1">{{ plan.name }}</h4>
                <div class="text-2xl font-black text-primary-600">BDT {{ plan.price | number }}</div>
              </div>

              <ul class="space-y-3 mb-8 flex-grow">
                <li *ngFor="let feat of plan.features" class="flex items-start gap-2 text-sm text-slate-600">
                  <i class="bi bi-check-lg text-emerald-500 mt-1"></i>
                  <span>{{ feat }}</span>
                </li>
              </ul>

              <button [disabled]="activePlan?.id === plan.id"
                      (click)="subscribe(plan)"
                      class="w-full py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs transition-all"
                      [ngClass]="activePlan?.id === plan.id ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'btn-primary shadow-lg'">
                {{ activePlan?.id === plan.id ? 'Current Plan' : (activePlan ? 'Update Plan' : 'Subscribe Now') }}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .shadow-premium {
      box-shadow: 0 20px 50px -12px rgba(0,0,0,0.05);
    }
    .animate-in {
      animation: fadeIn 0.5s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class SubscriptionsComponent implements OnInit {
  plans: any[] = [];
  activePlan: any | null = null;
  viewMode: 'ACTIVE' | 'UPGRADE' = 'ACTIVE';
  loading = true;

  constructor(
    private paymentService: PaymentService, 
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.paymentService.getSubscriptions().subscribe({
      next: (data) => {
        this.plans = data;
        this.loadUserSubscription();
      },
      error: () => {
        this.plans = [
          {
            id: '1',
            name: 'Digital Foundation',
            price: 59000,
            features: ['Professional Website', 'Domain (1 Year)', 'Business Email', 'Basic SEO'],
            recommended: false
          },
          {
            id: '2',
            name: 'Growth Accelerator',
            price: 160000,
            features: ['E-Commerce Platform', 'Marketing (3 Months)', 'Social Media Mgmt', '24/7 Support'],
            recommended: true
          },
          {
            id: '3',
            name: 'A-to-Z Launchpad',
            price: 360000,
            features: ['Business Formation', 'Trade License', 'Web & Mobile App', 'Launch Manager'],
            recommended: false
          }
        ];
        this.loadUserSubscription();
      }
    });
  }

  loadUserSubscription() {
    const user = this.authService.currentUser;
    if (!user) {
      this.loading = false;
      return;
    }
    
    this.paymentService.getPayments().subscribe({
      next: (payments) => {
        const userPayments = payments
          .filter(p => String(p.clientId) === String(user.id) && (p.status === 'PAID' || p.status === 'PENDING'))
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          
        if (userPayments.length > 0) {
          const item = userPayments[0].item;
          this.activePlan = this.plans.find(p => p.name === item) || {
            name: item,
            price: userPayments[0].amount,
            features: ['Standard Support', 'Priority Queue']
          };
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  subscribe(plan: any) {
    this.router.navigate(['/client/payments'], { queryParams: { planId: plan.id } });
  }
}

