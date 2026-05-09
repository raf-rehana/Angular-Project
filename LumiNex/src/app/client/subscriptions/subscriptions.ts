import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PaymentService } from '../../core/services/payment.service';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-fluid py-4">
      <div class="text-center mb-5">
        <h2 class="fw-bold text-dark">Subscription Plans</h2>
        <p class="text-muted">Choose the perfect plan for your business growth.</p>
      </div>

      <div class="row g-4 justify-content-center">
        <div class="col-md-4" *ngFor="let plan of plans">
          <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" 
               [class.border-primary]="plan.recommended"
               [class.border]="plan.recommended"
               style="transition: transform 0.3s ease;">
            <div class="card-header bg-white border-0 pt-4 pb-0 text-center">
              <span class="badge bg-primary-soft text-primary rounded-pill mb-2" *ngIf="plan.recommended">RECOMMENDED</span>
              <h4 class="fw-bold mb-0">{{ plan.name }}</h4>
            </div>
            <div class="card-body p-4 text-center">
              <div class="display-5 fw-bold text-dark mb-4">BDT {{ plan.price }}<span class="fs-6 text-muted fw-normal">/month</span></div>
              <ul class="list-unstyled text-start mb-5">
                <li class="mb-3 d-flex align-items-center" *ngFor="let feature of plan.features">
                  <i class="bi bi-check-circle-fill text-success me-3"></i>
                  <span class="text-secondary">{{ feature }}</span>
                </li>
              </ul>
              <div class="d-grid mt-auto">
                <button class="btn btn-lg rounded-pill px-4" 
                        [class.btn-primary]="plan.recommended" 
                        [class.btn-outline-primary]="!plan.recommended"
                        (click)="subscribe(plan)">
                  {{ currentPlan === plan.name ? 'Current Plan' : 'Subscribe Now' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .bg-primary-soft { background-color: #eef2ff; }
    .card:hover { transform: translateY(-5px); }
  `]
})
export class SubscriptionsComponent implements OnInit {
  plans: any[] = [];
  currentPlan: string = 'Growth Accelerator'; // Set to a valid plan name from DB

  constructor(private paymentService: PaymentService, private router: Router) {}

  ngOnInit() {
    this.paymentService.getSubscriptions().subscribe({
      next: (data) => {
        this.plans = data;
      },
      error: () => {
        // Fallback data if server is down
        this.plans = [
          {
            id: '1',
            name: 'Digital Foundation',
            price: 499,
            features: ['Professional Website', 'Domain (1 Year)', 'Business Email', 'Basic SEO'],
            recommended: false
          },
          {
            id: '2',
            name: 'Growth Accelerator',
            price: 1499,
            features: ['E-Commerce Platform', 'Marketing (3 Months)', 'Social Media Mgmt', '24/7 Support'],
            recommended: true
          },
          {
            id: '3',
            name: 'A-to-Z Launchpad',
            price: 3499,
            features: ['Business Formation', 'Trade License', 'Web & Mobile App', 'Launch Manager'],
            recommended: false
          }
        ];
      }
    });
  }

  subscribe(plan: any) {
    this.router.navigate(['/client/payments'], { queryParams: { planId: plan.id } });
  }
}

