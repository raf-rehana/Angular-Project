import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceCatalogueService } from '../../core/services/service-catalogue';
import { RequestService } from '../../core/services/request.service';
import { AuthService } from '../../core/services/auth.services';
import { Service } from '../../core/models/service';

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './request-form.html',
  styleUrl: './request-form.css',
})
export class RequestForm implements OnInit {
  selectedService: Service | null = null;
  notes: string = '';
  priority: string = 'NORMAL';
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catalogueService: ServiceCatalogueService,
    private requestService: RequestService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const serviceId = params['serviceId'];
      if (serviceId) {
        this.catalogueService.getServiceById(serviceId).subscribe(data => {
          this.selectedService = data;
          this.cdr.detectChanges();
        });
      }
    });
  }

  goBack() {
    this.router.navigate(['/client/catalogue']);
  }

  submit() {
    if (!this.selectedService || !this.authService.currentUser) return;

    this.loading = true;
    const requestData = {
      userId: this.authService.currentUser.id,
      serviceId: this.selectedService.id,
      serviceName: this.selectedService.name,
      categoryName: this.selectedService.categoryName,
      status: 'PENDING' as 'PENDING',
      priority: this.priority as any,
      clientNotes: this.notes,
      progress: 0,
      createdAt: new Date().toISOString()
    };

    this.requestService.submitRequest(requestData).subscribe(() => {
      this.loading = false;
      this.router.navigate(['/client/my-requests']);
    });
  }
}
