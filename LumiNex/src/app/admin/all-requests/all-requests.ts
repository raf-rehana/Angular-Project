import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestService } from '../../core/services/request.service';
import { AdminService } from '../../core/services/admin.service';
import { ServiceRequest } from '../../core/models/service-request';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { User } from '../../core/models/user';
import { AuditLogService } from '../../core/services/audit-log.service';

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
        <div class="col-12">
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

        <!-- Management Panel Modal -->
        <div class="modal-backdrop fade show" *ngIf="selectedRequest"></div>
        <div class="modal fade show d-block" *ngIf="selectedRequest" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border-0 shadow-lg rounded-5 overflow-hidden">
              <div class="modal-header border-0 bg-primary text-white p-4 d-flex justify-content-between align-items-center">
                <h5 class="fw-bold mb-0">Manage Request #REQ-{{ selectedRequest.id }}</h5>
                <button type="button" class="btn-close btn-close-white" (click)="selectedRequest = null"></button>
              </div>
              <div class="modal-body p-4 p-md-5">
                <div class="row g-4">
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-muted text-uppercase">Status</label>
                    <select class="form-select bg-light border-0 py-2 rounded-3" [(ngModel)]="selectedRequest.status" (change)="updateRequest()">
                      <option value="PENDING">PENDING</option>
                      <option value="ASSIGNED">ASSIGNED</option>
                      <option value="IN_PROGRESS">IN_PROGRESS</option>
                      <option value="REVIEW">REVIEW</option>
                      <option value="COMPLETED">COMPLETED</option>
                      <option value="REJECTED">REJECTED</option>
                    </select>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-muted text-uppercase">Priority</label>
                    <select class="form-select bg-light border-0 py-2 rounded-3" [(ngModel)]="selectedRequest.priority" (change)="updateRequest()">
                      <option value="LOW">LOW</option>
                      <option value="NORMAL">NORMAL</option>
                      <option value="HIGH">HIGH</option>
                      <option value="URGENT">URGENT</option>
                    </select>
                  </div>

                  <div class="col-12">
                    <label class="form-label small fw-bold text-muted text-uppercase">Assign to Employee</label>
                    <select class="form-select bg-light border-0 py-2 rounded-3" [(ngModel)]="selectedRequest.assignedTo" (change)="updateRequest()">
                      <option [ngValue]="undefined">Unassigned</option>
                      <option *ngFor="let s of employee" [value]="s.id">{{ s.name }}</option>
                    </select>
                  </div>

                  <div class="col-12">
                    <label class="form-label small fw-bold text-muted text-uppercase">Internal Notes</label>
                    <textarea class="form-control bg-light border-0 py-3 rounded-4" rows="3" [(ngModel)]="selectedRequest.employeeNotes" placeholder="Add notes for the team..."></textarea>
                  </div>

                  <!-- Client Documents -->
                  <div class="col-12" *ngIf="selectedRequest.documents?.length">
                    <label class="form-label small fw-bold text-muted text-uppercase">Client Attachments</label>
                    <div class="list-group list-group-flush border rounded-4 overflow-hidden">
                      <a *ngFor="let doc of selectedRequest.documents" [href]="doc.url" target="_blank" 
                         class="list-group-item list-group-item-action py-3 d-flex align-items-center justify-content-between">
                        <div class="text-truncate me-2">
                          <i class="bi bi-file-earmark-text text-primary me-2"></i>
                          <span class="fw-bold">{{ doc.name }}</span>
                        </div>
                        <i class="bi bi-box-arrow-up-right text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer border-0 p-4 pt-0 bg-light d-flex gap-2">
                <button class="btn btn-outline-danger py-2 px-4 rounded-pill fw-bold" (click)="cancelRequest()">Reject Request</button>
                <div class="ms-auto">
                  <button class="btn btn-light py-2 px-4 rounded-pill fw-bold me-2" (click)="selectedRequest = null">Close</button>
                  <button class="btn btn-primary py-2 px-4 rounded-pill fw-bold shadow-sm" (click)="saveNotes()">Save & Update</button>
                </div>
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
    private auditLogService: AuditLogService,
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

    this.requestService.updateStatus(this.selectedRequest.id, this.selectedRequest.status, this.selectedRequest.employeeNotes)
      .subscribe(() => {
        this.auditLogService.logAction('Request Updated', `Admin updated request #${this.selectedRequest!.id} to status: ${this.selectedRequest!.status}`);
        if (this.selectedRequest?.assignedTo) {
          this.requestService.assignToEmployee(this.selectedRequest.id, this.selectedRequest.assignedTo)
            .subscribe(() => this.loadData());
        } else {
          this.loadData();
        }
      });
  }

  saveNotes() {
    this.updateRequest();
    this.selectedRequest = null;
  }

  cancelRequest() {
    if (confirm('Are you sure you want to reject this request?')) {
      this.selectedRequest!.status = 'REJECTED';
      this.auditLogService.logAction('Request Rejected', `Admin rejected request #${this.selectedRequest!.id}`);
      this.updateRequest();
    }
  }
}
