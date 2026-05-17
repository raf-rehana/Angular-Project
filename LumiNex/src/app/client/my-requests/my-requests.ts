import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RequestService } from '../../core/services/request.service';
import { AuthService } from '../../core/services/auth.service';
import { ServiceRequest } from '../../core/models/service-request';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { RequestTimelineComponent } from '../../shared/components/request-timeline/request-timeline';
import { interval, Subscription } from 'rxjs';
import { ModalService } from '../../core/services/modal.service';
import { ToastService } from '../../core/services/toast.service';
import { PaymentService, Payment } from '../../core/services/payment.service';

@Component({
  selector: 'app-my-requests',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent, RequestTimelineComponent],
  templateUrl: './my-requests.html',
  styleUrls: ['./my-requests.css']
})
export class MyRequestsComponent implements OnInit, OnDestroy {
  requests: ServiceRequest[] = [];
  selectedRequest: ServiceRequest | null = null;
  payments: Payment[] = [];
  private pollSubscription?: Subscription;

  constructor(
    private requestService: RequestService,
    private authService: AuthService,
    private router: Router,
    private modalService: ModalService,
    private toastService: ToastService,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    this.loadRequests();
    // Poll for updates every 10 seconds to reflect employee progress
    this.pollSubscription = interval(10000).subscribe(() => this.loadRequests());
  }

  ngOnDestroy() {
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }

  loadRequests() {
    const user = this.authService.currentUser;
    if (user) {
      this.requestService.getMyRequests(user.id).subscribe(data => {
        this.requests = data;
        // Keep selected request updated if it exists
        if (this.selectedRequest) {
          const updated = this.requests.find(r => r.id === this.selectedRequest?.id);
          if (updated) this.selectedRequest = updated;
        }
      });
      this.paymentService.getPayments().subscribe(payments => {
        this.payments = payments.filter(p => String(p.clientId) === String(user.id));
      });
    }
  }

  getPaymentForRequest(reqId: string | number): Payment | undefined {
    return this.payments.find(p => p.requestId && String(p.requestId) === String(reqId));
  }

  viewDetails(req: ServiceRequest) {
    this.selectedRequest = req;
  }

  async cancelRequest() {
    if (!this.selectedRequest) return;
    const confirmed = await this.modalService.confirm('Are you sure you want to cancel this request?');
    if (confirmed) {
      this.requestService.updateStatus(this.selectedRequest.id, 'REJECTED', 'Cancelled by client')
        .subscribe(() => {
          this.toastService.success('Request cancelled successfully');
          this.loadRequests();
          this.selectedRequest = null;
        });
    }
  }

  viewDeliverables() {
    if (!this.selectedRequest) return;
    this.router.navigate(['/client/request-detail', this.selectedRequest.id]);
  }

  pay(req: ServiceRequest) {
    this.router.navigate(['/client/payments'], {
      queryParams: {
        serviceId: req.serviceId,
        serviceName: req.serviceName,
        requestId: req.id,
        amount: 0 // Will be loaded dynamically by payments component
      }
    });
  }

  goBack() {
    this.router.navigate(['/client/dashboard']);
  }
}
