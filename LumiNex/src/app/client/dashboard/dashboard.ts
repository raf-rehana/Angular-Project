import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../../core/services/request.service';
import { AuthService } from '../../core/services/auth.service';
import { ServiceRequest } from '../../core/models/service-request';
import { PaymentService } from '../../core/services/payment.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { RouterModule } from '@angular/router';

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
  
  constructor(
    private requestService: RequestService,
    public authService: AuthService,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    const user = this.authService.currentUser;
    if (user) {
      this.requestService.getMyRequests(user.id).subscribe(data => {
        this.requests = data;
        this.activeProjects = this.requests.filter(r => r.status === 'IN_PROGRESS' || r.status === 'ASSIGNED').length;
        this.upcomingDeliveries = this.requests.filter(r => r.status === 'REVIEW' || r.status === 'IN_PROGRESS').length;
      });
      
      this.paymentService.getPayments().subscribe(payments => {
        const userPayments = payments
          .filter(p => p.clientId === user.id && (p.status === 'PAID' || p.status === 'PENDING'))
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          
        if (userPayments.length > 0) {
          this.activeSubscription = userPayments[0];
        }
        
        this.amountSpent = userPayments
          .filter(p => p.status === 'PAID' || p.status === 'PENDING')
          .reduce((sum, p) => sum + (p.amount || 0), 0);
      });
    }
  }

  get recentRequests() {
    return this.requests.slice(0, 5);
  }
}
