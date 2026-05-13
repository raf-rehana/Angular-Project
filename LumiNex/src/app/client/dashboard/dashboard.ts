import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../../core/services/request.service';
import { AuthService } from '../../core/services/auth.services';
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
      });
      
      this.paymentService.getPayments().subscribe(payments => {
        const userPayments = payments
          .filter(p => p.clientId === user.id && (p.status === 'PAID' || p.status === 'PENDING'))
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          
        if (userPayments.length > 0) {
          this.activeSubscription = userPayments[0];
        }
      });
    }
  }

  get recentRequests() {
    return this.requests.slice(0, 5);
  }
}
