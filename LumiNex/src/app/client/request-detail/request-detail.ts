import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RequestService } from '../../core/services/request.service';
import { ServiceRequest } from '../../core/models/service-request';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { RequestTimelineComponent } from '../../shared/components/request-timeline/request-timeline';
import { ServiceCatalogueService } from '../../core/services/service-catalogue';
import { PaymentService, Payment } from '../../core/services/payment.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-request-detail',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent, RequestTimelineComponent, RouterModule],
  templateUrl: './request-detail.html',
  styleUrl: './request-detail.css',
})
export class RequestDetail implements OnInit {
  request: ServiceRequest | null = null;
  servicePrice: number = 0;
  payments: Payment[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestService: RequestService,
    private catalogueService: ServiceCatalogueService,
    private cdr: ChangeDetectorRef,
    private paymentService: PaymentService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.requestService.getById(id).subscribe(data => {
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

  loadServiceDetails(serviceId: string | number) {
    this.catalogueService.getServiceById(serviceId.toString()).subscribe(service => {
      this.servicePrice = service.price;
      this.cdr.detectChanges();
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

  goBack() {
    window.history.back();
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
