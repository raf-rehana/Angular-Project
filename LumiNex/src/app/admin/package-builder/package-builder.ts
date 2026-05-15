import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ModalService } from '../../core/services/modal.service';

interface SubscriptionPackage {
  id?: string | number;
  name: string;
  price: number;
  features: string[];
  recommended: boolean;
  badge: string;
  tagline: string;
  accent: string;
  accentLight: string;
  icon: string;
  currency: string;
  period: string;
}

@Component({
  selector: 'app-package-builder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container-fluid py-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="fw-bold text-dark mb-0">Startup Package Builder</h2>
          <p class="text-muted">Design and manage your high-value startup bundles.</p>
        </div>
        <button class="btn btn-primary px-4 py-2 rounded-pill fw-bold" (click)="openAddModal()">
          <i class="bi bi-plus-lg me-2"></i> Create New Package
        </button>
      </div>

      <!-- Display Cards (Read Only) -->
      <div class="row g-4">
        <div class="col-xl-4 col-md-6" *ngFor="let pkg of packages; trackBy:trackById">
          <div class="card border-0 shadow-sm rounded-4 h-100 overflow-hidden" [style.border-top]="'5px solid ' + pkg.accent">
            <div class="card-header bg-white border-0 pt-4 px-4 pb-0 d-flex justify-content-between align-items-start">
               <div>
                 <h4 class="fw-bold mb-1">{{ pkg.name }}</h4>
                 <div class="text-muted small">{{ pkg.tagline }}</div>
               </div>
               <div class="dropdown">
                  <button class="btn btn-sm btn-light rounded-circle" type="button" data-bs-toggle="dropdown">
                    <i class="bi bi-three-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end shadow border-0 rounded-3">
                    <li><a class="dropdown-item text-primary d-flex align-items-center" (click)="openEditModal(pkg)">
                      <i class="bi bi-pencil me-2"></i> Edit Package
                    </a></li>
                    <li><a class="dropdown-item text-danger d-flex align-items-center" (click)="deletePackage(pkg)">
                      <i class="bi bi-trash me-2"></i> Delete Package
                    </a></li>
                  </ul>
               </div>
            </div>
            
            <div class="card-body px-4 py-4">
              <div class="mb-4">
                <div class="d-flex align-items-end gap-1">
                  <span class="fs-5 text-muted fw-bold">BDT</span>
                  <span class="display-6 fw-bold text-dark lh-1">{{ pkg.price | number }}</span>
                  <span class="text-muted fw-bold">{{ pkg.period }}</span>
                </div>
              </div>

              <div class="mb-4">
                <div class="space-y-2 max-h-60 overflow-auto">
                  <div *ngFor="let f of pkg.features" class="d-flex align-items-start gap-2 mb-2">
                    <i class="bi bi-check-circle-fill text-success small mt-1"></i>
                    <span class="text-dark">{{ f }}</span>
                  </div>
                </div>
              </div>

              <div class="d-flex flex-wrap gap-2 mt-auto">
                 <span class="badge bg-light text-dark border">{{ pkg.badge || 'Standard' }}</span>
                 <span class="badge" *ngIf="pkg.recommended" [style.backgroundColor]="pkg.accentLight" [style.color]="pkg.accent">Featured</span>
                 <i class="bi ms-auto fs-5 text-muted" [ngClass]="pkg.icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div class="text-center py-5" *ngIf="packages.length === 0">
        <i class="bi bi-box-seam display-1 text-muted opacity-25"></i>
        <h4 class="mt-3 text-muted">No packages designed yet.</h4>
        <button class="btn btn-primary mt-3" (click)="openAddModal()">Get Started</button>
      </div>

      <!-- Add/Edit Package Modal -->
      <div class="modal-backdrop fade show" *ngIf="showModal" (click)="closeModal()"></div>
      <div class="modal fade show d-block" *ngIf="showModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg rounded-5 overflow-hidden">
            <div class="modal-header border-0 bg-primary text-white p-4 d-flex justify-content-between align-items-center">
              <h5 class="modal-title fw-bold">{{ isEditing ? 'Edit Package' : 'Create New Package' }}</h5>
              <button type="button" class="btn-close btn-close-white" (click)="closeModal()"></button>
            </div>
            <div class="modal-body p-4 p-md-5">
              <form (ngSubmit)="savePackage()" #pkgForm="ngForm">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-muted">Package Name</label>
                    <input type="text" class="form-control bg-light border-0 py-2 rounded-3" name="name" [(ngModel)]="activePackage.name" required>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-muted">Tagline</label>
                    <input type="text" class="form-control bg-light border-0 py-2 rounded-3" name="tagline" [(ngModel)]="activePackage.tagline" required>
                  </div>
                  
                  <div class="col-md-4">
                    <label class="form-label small fw-bold text-muted">Price (BDT)</label>
                    <input type="number" class="form-control bg-light border-0 py-2 rounded-3" name="price" [(ngModel)]="activePackage.price" required>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label small fw-bold text-muted">Billing Period</label>
                    <select class="form-select bg-light border-0 py-2 rounded-3" name="period" [(ngModel)]="activePackage.period">
                      <option value="/one-time">One-time</option>
                      <option value="/month">Monthly</option>
                      <option value="/year">Yearly</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label small fw-bold text-muted">Badge</label>
                    <input type="text" class="form-control bg-light border-0 py-2 rounded-3" name="badge" [(ngModel)]="activePackage.badge" placeholder="e.g. POPULAR">
                  </div>

                  <div class="col-md-4">
                    <label class="form-label small fw-bold text-muted">Icon Class</label>
                    <input type="text" class="form-control bg-light border-0 py-2 rounded-3" name="icon" [(ngModel)]="activePackage.icon" placeholder="bi-laptop">
                  </div>
                  <div class="col-md-4">
                    <label class="form-label small fw-bold text-muted">Accent Color</label>
                    <input type="color" class="form-control form-control-color w-100 border-0 p-1 bg-light rounded-2 h-auto" name="accent" [(ngModel)]="activePackage.accent" (change)="updateAccentLight()">
                  </div>
                  <div class="col-md-4 d-flex align-items-center mt-4 pt-1">
                    <div class="form-check form-switch fs-5">
                      <input class="form-check-input" type="checkbox" name="recommended" [(ngModel)]="activePackage.recommended">
                      <label class="form-check-label ms-2 small fw-bold text-muted mt-1">Featured Package</label>
                    </div>
                  </div>

                  <div class="col-12 mt-4">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <label class="form-label small fw-bold text-muted mb-0">Package Features</label>
                      <button type="button" class="btn btn-sm btn-soft-primary px-3 rounded-pill" (click)="addFeature()">
                        <i class="bi bi-plus-circle me-1"></i> Add Feature
                      </button>
                    </div>
                    <div class="bg-light p-3 rounded-4 space-y-2 max-h-60 overflow-auto">
                      <div *ngFor="let f of activePackage.features; let fi = index; trackBy:trackByIndex" class="d-flex align-items-center gap-2 mb-2">
                        <i class="bi bi-check-circle-fill text-success small"></i>
                        <input type="text" class="form-control form-control-sm border-0 py-2 rounded-3" [name]="'feature'+fi" [(ngModel)]="activePackage.features[fi]" required>
                        <button type="button" class="btn btn-sm btn-light text-danger rounded-circle p-2" (click)="removeFeature(fi)">
                          <i class="bi bi-x fs-6"></i>
                        </button>
                      </div>
                      <div class="text-center text-muted small py-3" *ngIf="activePackage.features.length === 0">
                        No features added yet.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-4 pt-4 border-top d-flex justify-content-end gap-2">
                  <button type="button" class="btn btn-light rounded-pill px-4 py-2 fw-bold" (click)="closeModal()">Cancel</button>
                  <button type="submit" class="btn btn-primary rounded-pill px-5 py-2 fw-bold shadow-sm" [disabled]="!pkgForm.form.valid">
                    {{ isEditing ? 'Update Package' : 'Create Package' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .btn-soft-primary {
      background: rgba(13, 110, 253, 0.1);
      color: #0d6efd;
    }
    .btn-soft-primary:hover {
      background: rgba(13, 110, 253, 0.2);
    }
    .space-y-2 > :not([hidden]) ~ :not([hidden]) {
      margin-top: 0.5rem;
    }
    .max-h-60 {
      max-height: 15rem;
    }
  `]
})
export class PackageBuilderComponent implements OnInit {
  packages: SubscriptionPackage[] = [];
  private apiUrl = `${environment.apiUrl}/subscriptions`;
  
  showModal = false;
  isEditing = false;
  activePackage: SubscriptionPackage = this.getEmptyPackage();

  constructor(private http: HttpClient, private modalService: ModalService) {}

  ngOnInit() {
    this.loadPackages();
  }

  loadPackages() {
    this.http.get<SubscriptionPackage[]>(this.apiUrl).subscribe(data => {
      this.packages = data;
    });
  }

  getEmptyPackage(): SubscriptionPackage {
    return {
      name: '',
      price: 100000,
      features: ['Core Service 1', 'Support Period'],
      recommended: false,
      badge: 'NEW',
      tagline: '',
      accent: '#3b82f6',
      accentLight: '#eff6ff',
      icon: 'bi-rocket-takeoff',
      currency: 'BDT',
      period: '/one-time'
    };
  }

  openAddModal() {
    this.activePackage = this.getEmptyPackage();
    this.isEditing = false;
    this.showModal = true;
  }

  openEditModal(pkg: SubscriptionPackage) {
    this.activePackage = JSON.parse(JSON.stringify(pkg)); // Deep copy to prevent live editing
    this.isEditing = true;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  updateAccentLight() {
    this.activePackage.accentLight = this.activePackage.accent + '15';
  }

  addFeature() {
    this.activePackage.features.push('New feature');
  }

  removeFeature(index: number) {
    this.activePackage.features.splice(index, 1);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  trackById(index: number, pkg: SubscriptionPackage): any {
    return pkg.id || index;
  }

  enforceSingleRecommended(pkg: SubscriptionPackage) {
    if (pkg.recommended) {
      this.packages.forEach(p => {
        if (p.id !== pkg.id) {
          p.recommended = false;
          if (p.id) this.http.put(`${this.apiUrl}/${p.id}`, p).subscribe();
        }
      });
    }
  }

  savePackage() {
    if (this.isEditing && this.activePackage.id) {
      this.http.put(`${this.apiUrl}/${this.activePackage.id}`, this.activePackage).subscribe(() => {
        this.enforceSingleRecommended(this.activePackage);
        this.loadPackages();
        this.closeModal();
      });
    } else {
      this.http.post<SubscriptionPackage>(this.apiUrl, this.activePackage).subscribe(() => {
        this.enforceSingleRecommended(this.activePackage);
        this.loadPackages();
        this.closeModal();
      });
    }
  }

  async deletePackage(pkg: SubscriptionPackage) {
    if (!pkg.id) return;
    const confirmed = await this.modalService.confirm('Are you sure you want to delete "' + pkg.name + '"?');
    if (confirmed) {
      this.http.delete(`${this.apiUrl}/${pkg.id}`).subscribe(() => {
        this.packages = this.packages.filter(p => p.id !== pkg.id);
      });
    }
  }
}
