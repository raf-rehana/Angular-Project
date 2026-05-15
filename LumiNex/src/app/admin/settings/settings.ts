import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../core/services/toast.service';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container-fluid py-4">
      <div class="mb-4">
        <h2 class="fw-bold text-dark mb-0">System Settings</h2>
        <p class="text-muted">Manage global platform configuration.</p>
      </div>

      <div class="row g-4">
        <!-- General Settings -->
        <div class="col-lg-7">
          <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <h5 class="fw-bold mb-4"><i class="bi bi-gear me-2 text-primary"></i>General Configuration</h5>
            <div class="mb-3">
              <label class="form-label small fw-bold text-muted">Platform Name</label>
              <input type="text" class="form-control bg-light border-0 py-2 rounded-3" [(ngModel)]="settings.platformName">
            </div>
            <div class="mb-3">
              <label class="form-label small fw-bold text-muted">Support Email</label>
              <input type="email" class="form-control bg-light border-0 py-2 rounded-3" [(ngModel)]="settings.supportEmail">
            </div>
            <div class="mb-3">
              <label class="form-label small fw-bold text-muted">Support Phone</label>
              <input type="text" class="form-control bg-light border-0 py-2 rounded-3" [(ngModel)]="settings.supportPhone">
            </div>
            <div class="mb-3">
              <label class="form-label small fw-bold text-muted">Default Currency</label>
              <select class="form-select bg-light border-0 py-2 rounded-3" [(ngModel)]="settings.currency">
                <option value="BDT">BDT (Bangladeshi Taka)</option>
                <option value="USD">USD (US Dollar)</option>
              </select>
            </div>
            <button class="btn btn-primary rounded-pill px-4 py-2 mt-2 fw-bold" (click)="saveSettings()">
              <i class="bi bi-check2 me-2"></i>Save Changes
            </button>
          </div>

          <!-- Payment Gateways -->
          <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <h5 class="fw-bold mb-4"><i class="bi bi-credit-card me-2 text-primary"></i>Payment Gateways</h5>
            <div class="d-flex justify-content-between align-items-center p-3 rounded-3 bg-light mb-3" *ngFor="let gw of gateways">
              <div class="d-flex align-items-center gap-3">
                <i class="bi bi-bank fs-5 text-primary"></i>
                <div>
                  <div class="fw-bold small">{{ gw.name }}</div>
                  <div class="text-muted x-small">{{ gw.description }}</div>
                </div>
              </div>
              <div class="form-check form-switch mb-0">
                <input class="form-check-input" type="checkbox" [(ngModel)]="gw.enabled" [id]="'gw-' + gw.id">
              </div>
            </div>
          </div>
        </div>

        <!-- Danger Zone & Maintenance -->
        <div class="col-lg-5">
          <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <h5 class="fw-bold mb-4"><i class="bi bi-tools me-2 text-warning"></i>Maintenance Mode</h5>
            <p class="text-muted small">When enabled, clients will see a maintenance screen instead of the platform. Admins and Employees can still log in.</p>
            <div class="d-flex align-items-center gap-3 p-3 rounded-3" [class.bg-danger]="settings.maintenanceMode" [class.bg-opacity-10]="settings.maintenanceMode" [class.bg-light]="!settings.maintenanceMode">
              <div class="form-check form-switch mb-0">
                <input class="form-check-input" type="checkbox" id="maintenanceToggle" [(ngModel)]="settings.maintenanceMode">
                <label class="form-check-label fw-bold" for="maintenanceToggle">
                  {{ settings.maintenanceMode ? '🔴 Maintenance Active' : '🟢 Platform Online' }}
                </label>
              </div>
            </div>
          </div>

          <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <h5 class="fw-bold mb-4"><i class="bi bi-envelope me-2 text-primary"></i>Email Notifications</h5>
            <div class="form-check form-switch mb-3" *ngFor="let notif of notifications">
              <input class="form-check-input" type="checkbox" [(ngModel)]="notif.enabled" [id]="'notif-' + notif.id">
              <label class="form-check-label small" [for]="'notif-' + notif.id">{{ notif.label }}</label>
            </div>
          </div>

          <div class="card border-0 shadow-sm rounded-4 p-4 border-danger">
            <h5 class="fw-bold mb-3 text-danger"><i class="bi bi-exclamation-triangle me-2"></i>Danger Zone</h5>
            <p class="text-muted small mb-3">These actions are irreversible. Proceed with extreme caution.</p>
            <button class="btn btn-outline-danger rounded-pill w-100 py-2 mb-2 fw-bold" (click)="clearCache()">
              <i class="bi bi-trash me-2"></i>Clear System Cache
            </button>
            <button class="btn btn-outline-danger rounded-pill w-100 py-2 fw-bold" (click)="exportData()">
              <i class="bi bi-download me-2"></i>Export All Data
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AdminSettingsComponent {
  constructor(private toastService: ToastService, private modalService: ModalService) {}

  settings = {
    platformName: 'LumiNex',
    supportEmail: 'support@luminex.io',
    supportPhone: '+880 1700 000000',
    currency: 'BDT',
    maintenanceMode: false,
  };

  gateways = [
    { id: 1, name: 'bKash', description: 'Mobile banking payment', enabled: true },
    { id: 2, name: 'Nagad', description: 'Digital financial service', enabled: true },
    { id: 3, name: 'Bank Transfer', description: 'Direct bank transfer', enabled: true },
    { id: 4, name: 'SSLCommerz', description: 'Online payment gateway', enabled: false },
    { id: 5, name: 'Stripe', description: 'International card payments', enabled: false },
  ];

  notifications = [
    { id: 1, label: 'New request submitted', enabled: true },
    { id: 2, label: 'Request status changed', enabled: true },
    { id: 3, label: 'Invoice generated', enabled: true },
    { id: 4, label: 'New client registered', enabled: false },
    { id: 5, label: 'Employee assigned to task', enabled: false },
  ];

  saveSettings() {
    this.toastService.success('Settings saved successfully!');
  }

  async clearCache() {
    const confirmed = await this.modalService.confirm('Are you sure you want to clear the system cache?');
    if (confirmed) {
      this.toastService.success('Cache cleared!');
    }
  }

  exportData() {
    this.toastService.success('Data export initiated. You will receive an email with the download link.');
  }
}
