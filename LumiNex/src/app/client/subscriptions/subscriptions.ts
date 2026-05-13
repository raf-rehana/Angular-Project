import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PaymentService } from '../../core/services/payment.service';
import { AuthService } from '../../core/services/auth.services';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-slate-50 py-16 lg:py-24">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-black uppercase tracking-widest mb-6">
            <i class="bi bi-star-fill"></i> Subscription Plans
          </div>
          <h2 class="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Choose the perfect plan for your business growth.</h2>
          <p class="text-slate-500 text-lg">Transparent pricing, no hidden fees, and premium support included in every tier.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div *ngFor="let plan of plans; let i = index" 
               class="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-premium transition-all duration-500 border border-slate-100 flex flex-col relative overflow-hidden group h-full">
            
            <div *ngIf="plan.recommended" class="absolute top-0 right-0 bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest z-10 shadow-sm">
              Recommended
            </div>

            <div class="mb-8 text-center flex flex-col items-center">
              <h4 class="text-2xl font-black text-slate-900 mb-2">{{ plan.name }}</h4>
              <div class="flex items-baseline justify-center gap-2">
                <span class="text-4xl font-black text-slate-900">BDT {{ plan.price | number }}</span>
                <span class="text-slate-500 font-medium">One-Time</span>
              </div>
            </div>

            <ul class="flex-grow space-y-4 mb-10">
              <li *ngFor="let feature of plan.features" class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <i class="bi bi-check-lg text-sm font-bold"></i>
                </div>
                <span class="text-slate-600 leading-relaxed text-left">{{ feature }}</span>
              </li>
            </ul>

            <button *ngIf="authService.hasRole('CLIENT')"
                    [disabled]="currentPlan === plan.name"
                    (click)="currentPlan !== plan.name && subscribe(plan)" 
                    class="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 mt-auto"
                    [ngClass]="{
                      'bg-emerald-100 text-emerald-700 cursor-default': currentPlan === plan.name,
                      'bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1': currentPlan !== plan.name && plan.recommended,
                      'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-md': currentPlan !== plan.name && !plan.recommended
                    }">
              <i class="bi bi-check-circle-fill mr-2" *ngIf="currentPlan === plan.name"></i>
              {{ currentPlan === plan.name ? 'Current Plan' : 'Subscribe Now' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hover-shadow-premium:hover {
      box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);
    }
  `]
})
export class SubscriptionsComponent implements OnInit {
  plans: any[] = [];
  currentPlan: string | null = null;

  constructor(
    private paymentService: PaymentService, 
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.loadUserSubscription();
    this.paymentService.getSubscriptions().subscribe({
      next: (data) => {
        // If API returns data, use it
        this.plans = data;
      },
      error: () => {
        // Fallback data with new market prices
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
      }
    });
  }

  loadUserSubscription() {
    const user = this.authService.currentUser;
    if (!user) return;
    
    this.paymentService.getPayments().subscribe(payments => {
      const userPayments = payments
        .filter(p => p.clientId === user.id && (p.status === 'PAID' || p.status === 'PENDING'))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
      if (userPayments.length > 0) {
        this.currentPlan = userPayments[0].item;
      }
    });
  }

  subscribe(plan: any) {
    this.router.navigate(['/client/payments'], { queryParams: { planId: plan.id } });
  }
}

