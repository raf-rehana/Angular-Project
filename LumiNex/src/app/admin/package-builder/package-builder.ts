import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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
        <button class="btn btn-primary px-4 py-2 rounded-pill fw-bold" (click)="addNewPackage()">
          <i class="bi bi-plus-lg me-2"></i> Create New Package
        </button>
      </div>

      <div class="row g-4">
        <div class="col-xl-4 col-md-6" *ngFor="let pkg of packages; trackBy:trackById">
          <div class="card border-0 shadow-sm rounded-4 h-100 overflow-hidden" [style.border-top]="'5px solid ' + pkg.accent">
            <div class="card-header bg-white border-0 pt-4 px-4 pb-0 d-flex justify-content-between align-items-start">
               <div>
                 <input [(ngModel)]="pkg.name" class="form-control form-control-lg border-0 bg-transparent fw-bold p-0 mb-1" placeholder="Package Name">
                 <input [(ngModel)]="pkg.tagline" class="form-control form-control-sm border-0 bg-transparent text-muted p-0" placeholder="Tagline">
               </div>
               <div class="dropdown">
                  <button class="btn btn-sm btn-light rounded-circle" type="button" data-bs-toggle="dropdown">
                    <i class="bi bi-three-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end shadow border-0 rounded-3">
                    <li><a class="dropdown-item text-danger d-flex align-items-center" (click)="deletePackage(pkg)">
                      <i class="bi bi-trash me-2"></i> Delete Package
                    </a></li>
                  </ul>
               </div>
            </div>
            
            <div class="card-body px-4 py-4">
              <div class="mb-4">
                <label class="small fw-bold text-muted text-uppercase mb-2">Pricing Details</label>
                <div class="d-flex align-items-center gap-2">
                  <div class="input-group input-group-sm">
                    <span class="input-group-text bg-light border-0">BDT</span>
                    <input type="number" [(ngModel)]="pkg.price" class="form-control bg-light border-0 fw-bold">
                  </div>
                  <select [(ngModel)]="pkg.period" class="form-select form-select-sm bg-light border-0" style="width: auto;">
                    <option value="/one-time">One-time</option>
                    <option value="/month">Monthly</option>
                    <option value="/year">Yearly</option>
                  </select>
                </div>
              </div>

              <div class="mb-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <label class="small fw-bold text-muted text-uppercase">Features</label>
                  <button class="btn btn-sm btn-soft-primary p-1" (click)="addFeature(pkg)">
                    <i class="bi bi-plus-circle-fill"></i>
                  </button>
                </div>
                <div class="space-y-2 max-h-60 overflow-auto">
                  <div *ngFor="let f of pkg.features; let fi = index; trackBy:trackByIndex" class="d-flex align-items-center gap-2 mb-2">
                    <i class="bi bi-check-circle-fill text-success small"></i>
                    <input [(ngModel)]="pkg.features[fi]" class="form-control form-control-sm border-0 border-bottom rounded-0 px-1" placeholder="Enter feature...">
                    <button class="btn btn-link text-danger p-0" (click)="removeFeature(pkg, fi)">
                      <i class="bi bi-x"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="row g-2">
                 <div class="col-6">
                    <label class="small fw-bold text-muted d-block mb-1">Badge</label>
                    <input [(ngModel)]="pkg.badge" class="form-control form-control-sm bg-light border-0" placeholder="e.g. POPULAR">
                 </div>
                 <div class="col-6">
                    <label class="small fw-bold text-muted d-block mb-1">Icon Class</label>
                    <input [(ngModel)]="pkg.icon" class="form-control form-control-sm bg-light border-0" placeholder="bi-laptop">
                 </div>
                 <div class="col-6">
                    <label class="small fw-bold text-muted d-block mb-1">Accent Color</label>
                    <input type="color" [(ngModel)]="pkg.accent" class="form-control form-control-color w-100 border-0 p-1 bg-light rounded-2 h-auto" (change)="pkg.accentLight = pkg.accent + '15'">
                 </div>
                 <div class="col-6 d-flex align-items-end">
                    <div class="form-check form-switch mb-1">
                      <input class="form-check-input" type="checkbox" [(ngModel)]="pkg.recommended" (change)="toggleRecommended(pkg)">
                      <label class="small fw-bold text-muted">Featured</label>
                    </div>
                 </div>
              </div>
            </div>

            <div class="card-footer bg-white border-0 p-4 pt-0">
              <button class="btn btn-primary w-100 rounded-pill py-2 fw-bold shadow-sm" (click)="savePackage(pkg)">
                <i class="bi bi-save me-2"></i> Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div class="text-center py-5" *ngIf="packages.length === 0">
        <i class="bi bi-box-seam display-1 text-muted opacity-25"></i>
        <h4 class="mt-3 text-muted">No packages designed yet.</h4>
        <button class="btn btn-primary mt-3" (click)="addNewPackage()">Get Started</button>
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPackages();
  }

  loadPackages() {
    this.http.get<SubscriptionPackage[]>(this.apiUrl).subscribe(data => {
      this.packages = data;
    });
  }

  addNewPackage() {
    const newPkg: SubscriptionPackage = {
      name: 'New Startup Package',
      price: 100000,
      features: ['Core Service 1', 'Support Period'],
      recommended: false,
      badge: 'NEW',
      tagline: 'Start your journey with us.',
      accent: '#3b82f6',
      accentLight: '#eff6ff',
      icon: 'bi-rocket-takeoff',
      currency: 'BDT',
      period: '/one-time'
    };
    this.http.post<SubscriptionPackage>(this.apiUrl, newPkg).subscribe(savedPkg => {
      this.packages.push(savedPkg);
    });
  }

  addFeature(pkg: SubscriptionPackage) {
    pkg.features.push('New feature');
  }

  removeFeature(pkg: SubscriptionPackage, index: number) {
    pkg.features.splice(index, 1);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  trackById(index: number, pkg: SubscriptionPackage): any {
    return pkg.id || index;
  }

  toggleRecommended(pkg: SubscriptionPackage) {
    if (pkg.recommended) {
      this.packages.forEach(p => {
        if (p !== pkg) p.recommended = false;
      });
    }
  }

  savePackage(pkg: SubscriptionPackage) {
    if (!pkg.id) return;
    this.http.put(`${this.apiUrl}/${pkg.id}`, pkg).subscribe(() => {
      alert('Package "' + pkg.name + '" saved successfully!');
    });
  }

  deletePackage(pkg: SubscriptionPackage) {
    if (!pkg.id) return;
    if (confirm('Are you sure you want to delete "' + pkg.name + '"?')) {
      this.http.delete(`${this.apiUrl}/${pkg.id}`).subscribe(() => {
        this.packages = this.packages.filter(p => p.id !== pkg.id);
      });
    }
  }
}
