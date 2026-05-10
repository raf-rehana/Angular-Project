import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

interface SubscriptionPackage {
  id?: string;
  name: string;
  price: number;
  features: string[];
  recommended: boolean;
}

@Component({
  selector: 'app-package-builder',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  template: `
    <div class="package-builder-container p-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold mb-0">Subscription Package Builder</h2>
        <button mat-raised-button color="primary" (click)="addNewPackage()">
          <mat-icon>add</mat-icon> Add New Package
        </button>
      </div>

      <div class="row g-4">
        <div class="col-md-4" *ngFor="let pkg of packages; let i = index">
          <mat-card class="package-card h-100" [class.recommended]="pkg.recommended">
            <mat-card-header>
              <mat-card-title>
                <input matInput [(ngModel)]="pkg.name" placeholder="Package Name" class="pkg-title-input">
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="price-input mb-3">
                <mat-form-field appearance="outline" class="w-100">
                  <mat-label>Price (BDT)</mat-label>
                  <input matInput type="number" [(ngModel)]="pkg.price">
                </mat-form-field>
              </div>

              <div class="features-list">
                <label class="small fw-bold text-muted mb-2 d-block">Features</label>
                <div *ngFor="let feature of pkg.features; let fi = index; trackBy:trackByIndex" class="feature-item d-flex align-items-center mb-2">
                  <input matInput [(ngModel)]="pkg.features[fi]" placeholder="Feature description" class="feature-input">
                  <button mat-icon-button color="warn" (click)="removeFeature(pkg, fi)">
                    <mat-icon>remove_circle</mat-icon>
                  </button>
                </div>
                <button mat-button color="primary" (click)="addFeature(pkg)">
                  <mat-icon>add</mat-icon> Add Feature
                </button>
              </div>

              <div class="recommended-toggle mt-3">
                <label class="d-flex align-items-center">
                  <input type="checkbox" [(ngModel)]="pkg.recommended" (change)="toggleRecommended(pkg)">
                  <span class="ms-2">Mark as Recommended</span>
                </label>
              </div>
            </mat-card-content>
            <mat-card-actions class="d-flex justify-content-between p-3">
              <button mat-button color="warn" (click)="deletePackage(pkg)">Delete</button>
              <button mat-raised-button color="accent" (click)="savePackage(pkg)">Save</button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .package-card {
      position: relative;
      transition: transform 0.2s;
    }
    .package-card.recommended {
      border: 2px solid var(--primary-color, #0d6efd);
    }
    .pkg-title-input {
      font-weight: bold;
      font-size: 1.25rem;
      border: none;
      border-bottom: 1px dashed #ccc;
      width: 100%;
    }
    .pkg-title-input:focus {
      outline: none;
      border-bottom-color: var(--primary-color);
    }
    .feature-input {
      border: none;
      border-bottom: 1px solid #eee;
      padding: 4px 8px;
      font-size: 0.9rem;
    }
    .feature-input:focus {
      outline: none;
      border-bottom-color: var(--primary-color);
    }
  `]
})
export class PackageBuilderComponent implements OnInit {
  packages: SubscriptionPackage[] = [];
  private apiUrl = `${environment.apiUrl}/subscriptions`;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

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
      name: 'New Package',
      price: 0,
      features: ['Feature 1'],
      recommended: false
    };
    this.http.post<SubscriptionPackage>(this.apiUrl, newPkg).subscribe(savedPkg => {
      this.packages.push(savedPkg);
      this.snackBar.open('New package added', 'Close', { duration: 2000 });
    });
  }

  addFeature(pkg: SubscriptionPackage) {
    pkg.features.push('');
  }

  removeFeature(pkg: SubscriptionPackage, index: number) {
    pkg.features.splice(index, 1);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  toggleRecommended(pkg: SubscriptionPackage) {
    if (pkg.recommended) {
      // Ensure only one is recommended
      this.packages.forEach(p => {
        if (p !== pkg) p.recommended = false;
      });
    }
  }

  savePackage(pkg: SubscriptionPackage) {
    if (!pkg.id) return;
    this.http.put(`${this.apiUrl}/${pkg.id}`, pkg).subscribe(() => {
      this.snackBar.open('Package saved successfully', 'Close', { duration: 2000 });
    });
  }

  deletePackage(pkg: SubscriptionPackage) {
    if (!pkg.id) return;
    if (confirm('Are you sure you want to delete this package?')) {
      this.http.delete(`${this.apiUrl}/${pkg.id}`).subscribe(() => {
        this.packages = this.packages.filter(p => p.id !== pkg.id);
        this.snackBar.open('Package deleted', 'Close', { duration: 2000 });
      });
    }
  }
}
