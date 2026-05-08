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
          <button class="btn btn-primary" (click)="showAddForm = !showAddForm">
            <i class="bi" [ngClass]="showAddForm ? 'bi-x-lg' : 'bi-plus-lg'"></i>
            {{ showAddForm ? 'Cancel' : 'New Service' }}
          </button>
        </div>
      </div>

      <!-- Add Service Form -->
      <div class="card border-0 shadow-sm rounded-4 mb-4" *ngIf="showAddForm">
        <div class="card-body p-4">
          <h5 class="fw-bold mb-3">Add New Service</h5>
          <form (ngSubmit)="addService()" #serviceForm="ngForm">
            <div class="row g-3">
              <div class="col-md-4">
                <label class="form-label">Service Name</label>
                <input type="text" class="form-control" name="name" [(ngModel)]="newService.name" required>
              </div>
              <div class="col-md-4">
                <label class="form-label">Category</label>
                <select class="form-select" name="categoryId" [(ngModel)]="newService.categoryId" required (change)="updateCategoryName()">
                  <option *ngFor="let cat of categories" [value]="cat.id">{{ cat.name }}</option>
                </select>
              </div>
              <div class="col-md-4">
                <label class="form-label">Price ($)</label>
                <input type="number" class="form-control" name="price" [(ngModel)]="newService.price" required>
              </div>
              <div class="col-md-4">
                <label class="form-label">Pricing Type</label>
                <select class="form-select" name="priceType" [(ngModel)]="newService.priceType">
                  <option value="FIXED">FIXED</option>
                  <option value="MONTHLY">MONTHLY</option>
                </select>
              </div>
              <div class="col-md-4">
                <label class="form-label">Delivery Days</label>
                <input type="text" class="form-control" name="deliveryDays" [(ngModel)]="newService.deliveryDays" placeholder="e.g. 7">
              </div>
              <div class="col-12">
                <label class="form-label">Description</label>
                <textarea class="form-control" name="description" [(ngModel)]="newService.description" rows="2"></textarea>
              </div>
              <div class="col-12 text-end">
                <button type="submit" class="btn btn-primary px-4" [disabled]="!serviceForm.form.valid">Create Service</button>
              </div>
            </div>
          </form>
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
                  <td class="py-3 fw-bold text-dark">\${{ s.price }} <span class="fw-normal text-muted small" *ngIf="s.priceType === 'MONTHLY'">/mo</span></td>
                  <td class="py-3">
                    <span class="badge" [ngClass]="s.isActive ? 'bg-success' : 'bg-secondary'">{{ s.isActive ? 'Active' : 'Inactive' }}</span>
                  </td>
                  <td class="pe-4 py-3 text-end">
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
  showAddForm = false;
  newService: any = {
    name: '',
    categoryId: '1',
    categoryName: 'Web Development',
    price: 0,
    priceType: 'FIXED',
    deliveryDays: '',
    description: '',
    isActive: true
  };

  constructor(
    private adminService: AdminService,
    private catalogueService: ServiceCatalogueService
  ) {}

  ngOnInit() {
    this.loadServices();
    this.catalogueService.getCategories().subscribe((data: any[]) => {
      this.categories = data;
    });
  }

  loadServices() {
    this.catalogueService.getServices().subscribe((data: Service[]) => {
      this.services = data;
    });
  }

  updateCategoryName() {
    const cat = this.categories.find(c => c.id === this.newService.categoryId);
    if (cat) this.newService.categoryName = cat.name;
  }

  addService() {
    this.adminService.addService(this.newService).subscribe(() => {
      this.loadServices();
      this.showAddForm = false;
      this.newService = {
        name: '',
        categoryId: '1',
        categoryName: 'Web Development',
        price: 0,
        priceType: 'FIXED',
        deliveryDays: '',
        description: '',
        isActive: true
      };
    });
  }

  deleteService(id: string | number) {
    if (confirm('Are you sure?')) {
      this.adminService.deleteService(id).subscribe(() => {
        this.loadServices();
      });
    }
  }
}
