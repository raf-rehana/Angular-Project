import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RequestService } from '../../core/services/request.service';
import { ServiceRequest } from '../../core/models/service-request';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { RequestTimelineComponent } from '../../shared/components/request-timeline/request-timeline';
import { ServiceCatalogueService } from '../../core/services/service-catalogue';
import { PaymentService, Payment } from '../../core/services/payment.service';
import { AuthService } from '../../core/services/auth.service';
import { ChatService } from '../../core/services/chat.service';
import { interval, Subscription, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-request-detail',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent, RequestTimelineComponent, RouterModule],
  templateUrl: './request-detail.html',
  styleUrl: './request-detail.css',
})
export class RequestDetail implements OnInit, OnDestroy {
  request: ServiceRequest | null = null;
  servicePrice: number = 0;
  payments: Payment[] = [];
  private pollSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestService: RequestService,
    private catalogueService: ServiceCatalogueService,
    private cdr: ChangeDetectorRef,
    private paymentService: PaymentService,
    private authService: AuthService,
    private chatService: ChatService
  ) {}

  openChat() {
    this.chatService.toggleChat(true);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        // Poll for request details every 5 seconds to keep progress updated in real-time
        this.pollSubscription = interval(5000).pipe(
          startWith(0),
          switchMap(() => this.requestService.getById(id))
        ).subscribe(data => {
          this.request = data;
          this.loadServiceDetails(data.serviceId);
          this.cdr.detectChanges();
        });

        const user = this.authService.currentUser;
        if (user) {
          this.paymentService.getPayments().subscribe(payments => {
            this.payments = payments.filter(p => String(p.clientId) === String(user.id));
            this.cdr.detectChanges();
          });
        }
      }
    });
  }

  ngOnDestroy() {
    this.pollSubscription?.unsubscribe();
  }

  loadServiceDetails(serviceId: string | number) {
    if (this.request && this.request.totalAmount !== undefined && this.request.totalAmount !== null) {
      this.servicePrice = this.request.totalAmount;
      this.cdr.detectChanges();
      return;
    }

    this.catalogueService.getServiceById(serviceId.toString()).subscribe({
      next: (service) => {
        this.servicePrice = service ? service.price : 0;
        this.cdr.detectChanges();
      },
      error: () => {
        this.servicePrice = 0;
        this.cdr.detectChanges();
      }
    });
  }

  getServicePrice(): string {
    return this.servicePrice.toLocaleString();
  }

  getPaymentForRequest(): Payment | undefined {
    if (!this.request) return undefined;
    return this.payments.find(p => p.requestId && String(p.requestId) === String(this.request?.id));
  }

  pay() {
    if (!this.request) return;
    this.router.navigate(['/client/payments'], {
      queryParams: {
        serviceId: this.request.serviceId,
        serviceName: this.request.serviceName,
        requestId: this.request.id,
        amount: this.servicePrice
      }
    });
  }

  payAdvance() {
    if (!this.request) return;
    const p = this.getPaymentForRequest();
    const customAdvance = this.request.advanceAmount || (this.servicePrice * 0.20);
    this.router.navigate(['/client/payments'], {
      queryParams: {
        serviceId: this.request.serviceId,
        serviceName: this.request.serviceName,
        requestId: this.request.id,
        amount: p ? p.amount : customAdvance
      }
    });
  }


  goBack() {
    window.history.back();
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
