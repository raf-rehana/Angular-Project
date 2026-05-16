import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../../core/services/request.service';
import { AuthService } from '../../core/services/auth.service';
import { ServiceRequest } from '../../core/models/service-request';
import { PaymentService } from '../../core/services/payment.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { RouterModule } from '@angular/router';
import { interval, Subscription, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {
  requests: ServiceRequest[] = [];
  activeSubscription: any = null;
  activeProjects: number = 0;
  amountSpent: number = 0;
  upcomingDeliveries: number = 0;
  avgProgress: number = 0;
  private pollSubscription?: Subscription;
  
  constructor(
    private requestService: RequestService,
    public authService: AuthService,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    const user = this.authService.currentUser;
    if (user) {
      // Poll requests and payments every 10 seconds
      this.pollSubscription = interval(10000).pipe(
        startWith(0),
        switchMap(() => this.requestService.getMyRequests(user.id))
      ).subscribe(data => {
        this.requests = data;
        const active = this.requests.filter(r => r.status === 'IN_PROGRESS' || r.status === 'ASSIGNED');
        this.activeProjects = active.length;
        this.upcomingDeliveries = this.requests.filter(r => r.status === 'REVIEW' || r.status === 'IN_PROGRESS').length;
        
        if (active.length > 0) {
          const totalProgress = active.reduce((sum, r) => sum + (r.progress || 0), 0);
          this.avgProgress = Math.round(totalProgress / active.length);
        } else {
          this.avgProgress = 0;
        }
      });

      // Also refresh payments periodically
      this.paymentService.getPayments().subscribe(payments => {
        this.updatePaymentStats(payments, user.id);
      });
    }
  }

  private updatePaymentStats(payments: any[], userId: string | number) {
    const userPayments = payments
      .filter(p => String(p.clientId) === String(userId) && (p.status === 'PAID' || p.status === 'PENDING'))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
    if (userPayments.length > 0) {
      this.activeSubscription = userPayments[0];
    }
    
    this.amountSpent = userPayments
      .filter(p => p.status === 'PAID' || p.status === 'PENDING')
      .reduce((sum, p) => sum + (p.amount || 0), 0);
  }

  ngOnDestroy() {
    this.pollSubscription?.unsubscribe();
  }

  get recentRequests() {
    return this.requests.slice(0, 5);
  }
}
