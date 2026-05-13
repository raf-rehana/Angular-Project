import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../core/services/admin.service';
import { ServiceCatalogueService } from '../../core/services/service-catalogue';
import { Service } from '../../core/models/service';

@Component({
  selector: 'app-service-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container-fluid py-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="fw-bold text-dark mb-0">Service Config</h2>
          <p class="text-muted">Manage available services and their pricing.</p>
        </div>
        <div>
          <button class="btn btn-primary" (click)="showForm = !showForm">
            <i class="bi" [ngClass]="showForm ? 'bi-x-lg' : 'bi-plus-lg'"></i>
            {{ showForm ? 'Cancel' : 'New Service' }}
          </button>
        </div>
      </div>

      <!-- Add/Edit Service Modal -->
      <div class="modal-backdrop fade show" *ngIf="showForm" (click)="cancelEdit()"></div>
      <div class="modal fade show d-block" *ngIf="showForm" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg rounded-5 overflow-hidden">
            <div class="modal-header border-0 bg-primary text-white p-4 d-flex justify-content-between align-items-center">
              <h5 class="modal-title fw-bold">{{ isEditing ? 'Edit Service' : 'Add New Service' }}</h5>
              <button type="button" class="btn-close btn-close-white" (click)="cancelEdit()"></button>
            </div>
            <div class="modal-body p-4 p-md-5">
              <form (ngSubmit)="isEditing ? updateService() : addService()" #serviceForm="ngForm">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-muted">Service Name</label>
                    <input type="text" class="form-control bg-light border-0 py-2 rounded-3" name="name" [(ngModel)]="activeService.name" required>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-muted">Category</label>
                    <select class="form-select bg-light border-0 py-2 rounded-3" name="categoryId" [(ngModel)]="activeService.categoryId" required (change)="updateCategoryName()">
                      <option *ngFor="let cat of categories" [value]="cat.id">{{ cat.name }}</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label small fw-bold text-muted">Price (BDT)</label>
                    <input type="number" class="form-control bg-light border-0 py-2 rounded-3" name="price" [(ngModel)]="activeService.price" required>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label small fw-bold text-muted">Pricing Type</label>
                    <select class="form-select bg-light border-0 py-2 rounded-3" name="priceType" [(ngModel)]="activeService.priceType">
                      <option value="FIXED">FIXED</option>
                      <option value="MONTHLY">MONTHLY</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label small fw-bold text-muted">Delivery Days</label>
                    <input type="text" class="form-control bg-light border-0 py-2 rounded-3" name="deliveryDays" [(ngModel)]="activeService.deliveryDays" placeholder="e.g. 7">
                  </div>
                  <div class="col-12">
                    <label class="form-label small fw-bold text-muted">Description</label>
                    <textarea class="form-control bg-light border-0 py-2 rounded-3" name="description" [(ngModel)]="activeService.description" rows="2"></textarea>
                  </div>
                  <div class="col-12 d-flex align-items-center mt-3">
                    <div class="form-check form-switch fs-5">
                      <input class="form-check-input" type="checkbox" name="isActive" [(ngModel)]="activeService.isActive">
                      <label class="form-check-label ms-2 small fw-bold text-muted mt-1">Active Status</label>
                    </div>
                  </div>
                </div>
                <div class="mt-4 pt-4 border-top d-flex justify-content-end gap-2">
                  <button type="button" class="btn btn-light rounded-pill px-4 py-2 fw-bold" (click)="cancelEdit()">Cancel</button>
                  <button type="submit" class="btn btn-primary rounded-pill px-5 py-2 fw-bold shadow-sm" [disabled]="!serviceForm.form.valid">
                    {{ isEditing ? 'Update Service' : 'Create Service' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="card border-0 shadow-sm rounded-4">
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead class="table-light">
                <tr>
                  <th class="ps-4 py-3 border-0">Service Name</th>
                  <th class="py-3 border-0">Category</th>
                  <th class="py-3 border-0">Pricing</th>
                  <th class="py-3 border-0">Status</th>
                  <th class="pe-4 py-3 border-0 text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let s of services">
                  <td class="ps-4 py-3">
                    <div class="fw-bold text-dark">{{ s.name }}</div>
                    <div class="small text-muted">{{ s.deliveryDays }} delivery</div>
                  </td>
                  <td class="py-3 text-muted">{{ s.categoryName }}</td>
                  <td class="py-3 fw-bold text-dark">BDT {{ s.price }} <span class="fw-normal text-muted small" *ngIf="s.priceType === 'MONTHLY'">/mo</span></td>
                  <td class="py-3">
                    <span class="badge rounded-pill" [ngClass]="s.isActive ? 'bg-success-soft text-success' : 'bg-secondary-soft text-secondary'">
                      {{ s.isActive ? 'Active' : 'Inactive' }}
                    </span>
                  </td>
                  <td class="pe-4 py-3 text-end">
                    <button class="btn btn-sm btn-light text-primary me-2" (click)="editService(s)">
                      <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-light text-danger" (click)="deleteService(s.id)">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr *ngIf="services.length === 0">
                  <td colspan="5" class="text-center py-5 text-muted">No services found.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ServiceManagementComponent implements OnInit {
  services: Service[] = [];
  categories: any[] = [];
  
  showForm = false;
  isEditing = false;
  activeService: any = this.getEmptyService();

  constructor(
    private adminService: AdminService,
    private catalogueService: ServiceCatalogueService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.catalogueService.getCategories().subscribe(cats => this.categories = cats);
    this.catalogueService.getServices().subscribe(srvs => this.services = srvs);
  }

  getEmptyService() {
    return {
      name: '',
      categoryId: '',
      categoryName: '',
      price: 0,
      priceType: 'FIXED',
      deliveryDays: '',
      description: '',
      isActive: true,
      link: '/client/payments'
    };
  }

  openAdd() {
    this.activeService = this.getEmptyService();
    this.isEditing = false;
    this.showForm = true;
  }

  editService(service: Service) {
    this.activeService = { ...service };
    this.isEditing = true;
    this.showForm = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit() {
    this.showForm = false;
    this.isEditing = false;
    this.activeService = this.getEmptyService();
  }

  updateCategoryName() {
    const cat = this.categories.find(c => c.id === this.activeService.categoryId);
    if (cat) this.activeService.categoryName = cat.name;
  }

  addService() {
    this.adminService.addService(this.activeService).subscribe(() => {
      this.loadData();
      this.cancelEdit();
    });
  }

  updateService() {
    if (!this.activeService.id) return;
    this.adminService.updateService(this.activeService.id, this.activeService).subscribe(() => {
      this.loadData();
      this.cancelEdit();
    });
  }

  deleteService(id: string | number) {
    if (confirm('Are you sure you want to delete this service?')) {
      this.adminService.deleteService(id).subscribe(() => {
        this.loadData();
      });
    }
  }
}
