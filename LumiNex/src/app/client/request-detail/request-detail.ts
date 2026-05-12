import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RequestService } from '../../core/services/request.service';
import { ServiceRequest } from '../../core/models/service-request';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { RequestTimelineComponent } from '../../shared/components/request-timeline/request-timeline';

import { ServiceCatalogueService } from '../../core/services/service-catalogue';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestService: RequestService,
    private catalogueService: ServiceCatalogueService,
    private cdr: ChangeDetectorRef
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
    this.router.navigate(['/client/my-requests']);
  }
}
