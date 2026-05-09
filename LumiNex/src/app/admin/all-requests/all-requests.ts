import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestService } from '../../core/services/request.service';
import { AdminService } from '../../core/services/admin.service';
import { ServiceRequest } from '../../core/models/service-request';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-all-requests',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent, FormsModule],
  template: `
    <div class="container-fluid py-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="fw-bold text-dark mb-0">All Requests</h2>
          <p class="text-muted">Manage and assign all platform requests.</p>
        </div>
        <div>
          <button class="btn btn-outline-primary me-2" (click)="showFilters = !showFilters">
            <i class="bi" [ngClass]="showFilters ? 'bi-x-lg' : 'bi-filter'"></i>
            {{ showFilters ? 'Hide Filters' : 'Filter' }}
          </button>
          <button class="btn btn-primary"><i class="bi bi-download me-2"></i>Export</button>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="card border-0 shadow-sm rounded-4 mb-4 animate-fade-in" *ngIf="showFilters">
        <div class="card-body p-4">
          <div class="row g-3 align-items-end">
            <div class="col-md-4">
              <label class="form-label small fw-bold text-muted text-uppercase">Status Filter</label>
              <select class="form-select bg-light border-0 py-2 rounded-3" [(ngModel)]="filterStatus">
                <option value="">All Statuses</option>
                <option value="PENDING">PENDING</option>
                <option value="ASSIGNED">ASSIGNED</option>
                <option value="IN_PROGRESS">IN_PROGRESS</option>
                <option value="REVIEW">REVIEW</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="REJECTED">REJECTED</option>
              </select>
            </div>
            <div class="col-md-4">
              <label class="form-label small fw-bold text-muted text-uppercase">Priority Filter</label>
              <select class="form-select bg-light border-0 py-2 rounded-3" [(ngModel)]="filterPriority">
                <option value="">All Priorities</option>
                <option value="LOW">LOW</option>
                <option value="NORMAL">NORMAL</option>
                <option value="HIGH">HIGH</option>
                <option value="URGENT">URGENT</option>
              </select>
            </div>
            <div class="col-md-4">
              <button class="btn btn-light w-100 py-2 rounded-pill fw-bold" (click)="filterStatus = ''; filterPriority = ''">Reset Filters</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Requests Table -->
        <div [ngClass]="selectedRequest ? 'col-lg-8' : 'col-12'">
          <div class="card border-0 shadow-sm rounded-4">
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-hover align-middle mb-0">
                  <thead class="table-light">
                    <tr>
                      <th class="ps-4 py-3 border-0">ID / Client</th>
                      <th class="py-3 border-0">Service</th>
                      <th class="py-3 border-0">Status</th>
                      <th class="py-3 border-0">Priority</th>
                      <th class="pe-4 py-3 border-0 text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let req of filteredRequests" [class.table-primary]="selectedRequest?.id === req.id">
                      <td class="ps-4 py-3">
                        <div class="fw-bold text-dark">#REQ-{{ req.id }}</div>
                        <div class="small text-muted">User ID: {{ req.userId }}</div>
                      </td>
                      <td class="py-3">
                        <div class="fw-medium text-dark">{{ req.serviceName }}</div>
                        <div class="small text-muted">{{ req.categoryName }}</div>
                      </td>
                      <td class="py-3"><app-status-badge [status]="req.status"></app-status-badge></td>
                      <td class="py-3">
                        <span class="badge" 
                          [ngClass]="{'bg-danger': req.priority === 'URGENT', 'bg-warning text-dark': req.priority === 'HIGH', 'bg-info text-dark': req.priority === 'NORMAL', 'bg-secondary': req.priority === 'LOW'}">
                          {{ req.priority }}
                        </span>
                      </td>
                      <td class="pe-4 py-3 text-end">
                        <button class="btn btn-sm btn-primary px-3 rounded-pill" (click)="manageRequest(req)">Manage</button>
                      </td>
                    </tr>
                    <tr *ngIf="filteredRequests.length === 0">
                      <td colspan="5" class="text-center py-5 text-muted">No requests found matching your filters.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Management Panel -->
        <div class="col-lg-4" *ngIf="selectedRequest">
          <div class="card border-0 shadow-sm rounded-4 sticky-top" style="top: 20px;">
            <div class="card-header bg-white border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
              <h5 class="fw-bold mb-0 text-primary">Manage Request</h5>
              <button type="button" class="btn-close" (click)="selectedRequest = null"></button>
            </div>
            <div class="card-body p-4">
              <div class="mb-4">
                <label class="form-label small fw-bold text-muted text-uppercase">Status</label>
                <select class="form-select" [(ngModel)]="selectedRequest.status" (change)="updateRequest()">
                  <option value="PENDING">PENDING</option>
                  <option value="ASSIGNED">ASSIGNED</option>
                  <option value="IN_PROGRESS">IN_PROGRESS</option>
                  <option value="REVIEW">REVIEW</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="REJECTED">REJECTED</option>
                </select>
              </div>

              <div class="mb-4">
                <label class="form-label small fw-bold text-muted text-uppercase">Priority</label>
                <select class="form-select" [(ngModel)]="selectedRequest.priority" (change)="updateRequest()">
                  <option value="LOW">LOW</option>
                  <option value="NORMAL">NORMAL</option>
                  <option value="HIGH">HIGH</option>
                  <option value="URGENT">URGENT</option>
                </select>
              </div>

              <div class="mb-4">
                <label class="form-label small fw-bold text-muted text-uppercase">Assign to Employee</label>
                <select class="form-select" [(ngModel)]="selectedRequest.assignedTo" (change)="updateRequest()">
                  <option [ngValue]="undefined">Unassigned</option>
                  <option *ngFor="let s of employee" [value]="s.id">{{ s.name }}</option>
                </select>
              </div>

              <div class="mb-4">
                <label class="form-label small fw-bold text-muted text-uppercase">Internal Notes</label>
                <textarea class="form-control" rows="3" [(ngModel)]="selectedRequest.employeeNotes" placeholder="Add notes for the team..."></textarea>
              </div>

              <div class="d-grid gap-2">
                <button class="btn btn-primary py-2" (click)="saveNotes()">Save Notes</button>
                <button class="btn btn-outline-danger py-2" (click)="cancelRequest()">Cancel Request</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AllRequestsComponent implements OnInit {
  requests: ServiceRequest[] = [];
  employee: User[] = [];
  selectedRequest: ServiceRequest | null = null;
  
  showFilters = false;
  filterStatus = '';
  filterPriority = '';

  constructor(
    private requestService: RequestService,
    private adminService: AdminService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadData();
  }

  get filteredRequests() {
    return this.requests.filter(req => {
      const matchStatus = !this.filterStatus || req.status === this.filterStatus;
      const matchPriority = !this.filterPriority || req.priority === this.filterPriority;
      return matchStatus && matchPriority;
    });
  }

  loadData() {
    this.requestService.getAllRequests().subscribe(data => {
      this.requests = data;
      this.cdr.detectChanges();
    });
    this.adminService.getUsers('EMPLOYEE').subscribe(data => {
      this.employee = data;
      this.cdr.detectChanges();
    });
  }

  manageRequest(req: ServiceRequest) {
    this.selectedRequest = { ...req }; // Work on a copy
  }

  updateRequest() {
    if (!this.selectedRequest) return;
    this.requestService.updateStatus(this.selectedRequest.id, this.selectedRequest.status, this.selectedRequest.employeeNotes).subscribe(() => {
      this.loadData();
    });
  }

  saveNotes() {
    this.updateRequest();
    alert('Notes saved successfully!');
    this.selectedRequest = null;
  }

  cancelRequest() {
    if (confirm('Are you sure you want to cancel this request?')) {
      this.selectedRequest!.status = 'REJECTED';
      this.updateRequest();
    }
  }
}
