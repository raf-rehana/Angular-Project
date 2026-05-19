import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestService } from '../../core/services/request.service';
import { AdminService } from '../../core/services/admin.service';
import { ServiceRequest } from '../../core/models/service-request';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { User } from '../../core/models/user';
import { AuditLogService } from '../../core/services/audit-log.service';
import { ModalService } from '../../core/services/modal.service';
import { PaymentService } from '../../core/services/payment.service';
import { NotificationService } from '../../core/services/notification.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-all-requests',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent, FormsModule],
  template: `
    <div class="container-fluid py-4 px-4 px-lg-5">
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
          <button class="btn btn-primary" (click)="exportRequests()"><i class="bi bi-download me-2"></i>Export</button>
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
                <option value="PROPOSAL_PENDING">PENDING PROPOSALS</option>
                <option value="PENDING">PENDING</option>
                <option value="AWAITING_ADVANCE">AWAITING ADVANCE</option>
                <option value="ADVANCE_PAID">ADVANCE PAID</option>
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
                        <div class="mt-1"><span class="badge bg-light text-primary border rounded-pill small px-2">ID: {{ req.userId }}</span></div>
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
                      <option value="PROPOSAL_PENDING" *ngIf="selectedRequest.status === 'PROPOSAL_PENDING'">PROPOSAL_PENDING</option>
                      <option value="PENDING">PENDING</option>
                      <option value="AWAITING_ADVANCE">AWAITING_ADVANCE</option>
                      <option value="ADVANCE_PAID">ADVANCE_PAID</option>
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

                  <div class="col-12" *ngIf="selectedRequest.status === 'PROPOSAL_PENDING' || selectedRequest.status === 'PENDING'">
                    <div class="card border-0 rounded-4 p-4 shadow-sm" style="background-color: #f8fafc; border: 1px solid #e2e8f0 !important;">
                      <h6 class="fw-bold text-primary mb-3"><i class="bi bi-gear-fill me-2"></i>Project Proposal Setup & Documentation</h6>
                      <div class="row g-3">
                        <div class="col-md-12">
                          <label class="form-label small fw-bold text-muted text-uppercase mb-2">Fixed Total Budget (BDT)</label>
                          <input type="number" class="form-control border-0 py-2 rounded-3 bg-white shadow-sm" 
                                 [(ngModel)]="selectedRequest.totalAmount" 
                                 placeholder="Enter manually negotiated fixed price...">
                        </div>
                        <div class="col-12 mt-3">
                          <label class="form-label small fw-bold text-muted text-uppercase mb-2">Project Documentation scope</label>
                          <textarea class="form-control border-0 py-3 rounded-4 bg-white shadow-sm" rows="4" 
                                    [(ngModel)]="selectedRequest.projectDocumentation" 
                                    placeholder="Provide detailed guidelines, timeline scope, or deliverables..."></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12" *ngIf="selectedRequest.status === 'PENDING' || selectedRequest.status === 'PROPOSAL_PENDING'">
                    <div class="alert alert-info border-0 rounded-3 mb-3 d-flex align-items-center justify-content-between p-3" style="background-color: #e0f2fe; color: #075985;">
                      <div>
                        <strong class="d-block mb-1 text-dark"><i class="bi bi-wallet2 me-2"></i>20% Advance Payment Pending</strong>
                        <span class="small text-muted">Generate a 20% advance payment request for the client before starting assignment.</span>
                      </div>
                      <button class="btn btn-info fw-bold text-white rounded-pill px-4 py-2" (click)="requestAdvancePayment(selectedRequest)">
                        Request 20% Advance
                      </button>
                    </div>
                  </div>

                  <div class="col-12" *ngIf="selectedRequest.status === 'PROPOSAL_PENDING' || selectedRequest.status === 'PENDING' || selectedRequest.status === 'AWAITING_ADVANCE'; else assignmentUnlocked">
                    <div class="alert alert-secondary border-0 rounded-3 p-3 small text-center mb-0" style="background-color: #f3f4f6; color: #4b5563;">
                      <i class="bi bi-lock-fill me-2 text-muted"></i>Employee assignment is locked until the 20% advance is paid.
                    </div>
                  </div>
                  <ng-template #assignmentUnlocked>
                    <div class="col-12">
                      <label class="form-label small fw-bold text-muted text-uppercase">Assign to Employee</label>
                      <select class="form-select bg-light border-0 py-2 rounded-3" [(ngModel)]="selectedRequest.assignedTo" (change)="updateRequest()">
                        <option [ngValue]="undefined">Unassigned</option>
                        <option *ngFor="let s of employee" [value]="s.id">{{ s.name }}</option>
                      </select>
                    </div>
                  </ng-template>

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
    private cdr: ChangeDetectorRef,
    private modalService: ModalService,
    private paymentService: PaymentService,
    private notificationService: NotificationService,
    private toastService: ToastService
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

  exportRequests() {
    if (this.requests.length === 0) return;
    
    // Define headers
    const headers = ['Request ID', 'Client ID', 'Service Name', 'Category', 'Status', 'Priority', 'Created Date'];
    
    // Map requests to rows
    const rows = this.filteredRequests.map(req => [
      `REQ-${req.id}`,
      req.userId,
      req.serviceName,
      req.categoryName,
      req.status,
      req.priority,
      req.createdAt ? new Date(req.createdAt).toLocaleDateString() : 'N/A'
    ]);
    
    // Construct CSV content
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(val => `"${String(val).replace(/"/g, '""')}"`).join(','))
    ].join('\r\n');
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `LumiNex_Requests_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  manageRequest(req: ServiceRequest) {
    this.selectedRequest = { ...req }; // Work on a copy
  }

  updateRequest() {
    if (!this.selectedRequest) return;

    // Automate status transition if employee is newly assigned on an ADVANCE_PAID request
    if (this.selectedRequest.assignedTo && this.selectedRequest.status === 'ADVANCE_PAID') {
      this.selectedRequest.status = 'ASSIGNED';
    }

    const payload: Partial<ServiceRequest> = {
      status: this.selectedRequest.status,
      employeeNotes: this.selectedRequest.employeeNotes,
      priority: this.selectedRequest.priority,
      totalAmount: this.selectedRequest.totalAmount,
      projectDocumentation: this.selectedRequest.projectDocumentation
    };

    this.requestService.updateRequest(this.selectedRequest.id, payload)
      .subscribe(() => {
        this.auditLogService.logAction('Request Updated', `Admin updated request #${this.selectedRequest!.id} to status: ${this.selectedRequest!.status} (Priority: ${this.selectedRequest!.priority})`);
        
        // --- STEP 7 & 8 AUTOMATION ---
        if (this.selectedRequest?.status === 'COMPLETED') {
          this.handleCompletionAutomation(this.selectedRequest);
        }

        if (this.selectedRequest?.assignedTo) {
          this.requestService.assignToEmployee(this.selectedRequest.id, this.selectedRequest.assignedTo)
            .subscribe(() => {
              // Notify Employee
              this.notificationService.create({
                userId: Number(this.selectedRequest!.assignedTo),
                title: 'New Task Assigned',
                message: `You have been assigned: ${this.selectedRequest!.serviceName}`,
                type: 'TASK_ASSIGNED'
              }).subscribe();
              this.loadData();
            });
        } else {
          this.loadData();
        }
      });
  }

  private handleCompletionAutomation(req: ServiceRequest) {
    this.adminService.getService(req.serviceId).subscribe(service => {
      // 1. Create Pending Payment
      this.paymentService.addPayment({
        clientId: req.userId.toString(),
        client: 'Client Name', 
        email: req.clientEmail,
        item: req.serviceName,
        amount: service.price,
        method: 'WAITING',
        status: 'PENDING',
        date: new Date().toISOString()
      }).subscribe();

      // 2. Send Notification to Client
      this.notificationService.create({
        userId: Number(req.userId),
        title: 'Payment Due',
        message: `Your request for "${req.serviceName}" has been completed. Please proceed to payment.`,
        type: 'PAYMENT_DUE'
      }).subscribe();
    });
  }

  generateAdvanceInvoice(req: ServiceRequest) {
    this.adminService.getService(req.serviceId).subscribe(service => {
      this.paymentService.addPayment({
        clientId: req.userId.toString(),
        client: 'Client Name', 
        email: req.clientEmail,
        item: `${req.serviceName} (50% Advance)`,
        amount: service.price / 2,
        method: 'WAITING',
        status: 'PENDING',
        date: new Date().toISOString()
      }).subscribe(() => {
        this.notificationService.create({
          userId: Number(req.userId),
          title: 'Advance Payment Due',
          message: `A 50% advance payment is required to proceed with "${req.serviceName}".`,
          type: 'PAYMENT_DUE'
        }).subscribe();
        this.modalService.alert('Advance invoice generated successfully.');
        this.selectedRequest = null;
        this.loadData();
      });
    });
  }

  saveNotes() {
    this.updateRequest();
    this.selectedRequest = null;
  }

  acceptProposal(req: ServiceRequest) {
    this.requestService.updateStatus(req.id, 'PENDING').subscribe({
      next: () => {
        this.auditLogService.logAction('Proposal Accepted', `Admin accepted project proposal #${req.id} ("${req.serviceName}")`);
        this.toastService.success('Project Proposal accepted successfully!');
        
        this.notificationService.create({
          userId: Number(req.userId),
          title: `Project Proposal Approved!`,
          message: `Congratulations! Your project proposal "${req.serviceName}" has been accepted. It is now active and ready for assignment/invoice setup.`,
          type: 'STATUS_UPDATE'
        }).subscribe();

        this.loadData();
        this.selectedRequest = null;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.toastService.error('Failed to accept proposal.');
        console.error(err);
      }
    });
  }

  requestAdvancePayment(req: ServiceRequest) {
    if (req.serviceId === 'PROPOSAL' && (!req.totalAmount || req.totalAmount <= 0)) {
      this.toastService.error('Please specify a positive Fixed Total Budget for this custom project proposal first.');
      return;
    }

    this.adminService.getService(req.serviceId).subscribe({
      next: (service) => {
        const totalAmt = req.totalAmount || (service ? service.price : 0);
        if (totalAmt <= 0) {
          this.toastService.error('Could not determine project budget. Please set a Fixed Total Budget manually.');
          return;
        }

        const amount = totalAmt * 0.20;
        
        this.paymentService.addPayment({
          clientId: req.userId.toString(),
          client: 'Client Name',
          email: req.clientEmail || '',
          item: `${req.serviceName} (20% Advance)`,
          amount: amount,
          method: 'WAITING',
          status: 'PENDING',
          date: new Date().toISOString().split('T')[0],
          requestId: req.id
        }).subscribe(() => {
          this.requestService.updateRequest(req.id, {
            status: 'AWAITING_ADVANCE',
            totalAmount: req.totalAmount,
            projectDocumentation: req.projectDocumentation
          }).subscribe(() => {
            this.auditLogService.logAction('Advance Requested', `Admin requested 20% advance payment for request #${req.id} (BDT ${amount})`);
            this.toastService.success('20% Advance payment requested successfully!');
            
            this.notificationService.create({
              userId: Number(req.userId),
              title: '20% Advance Payment Required',
              message: `An advance payment of 20% (BDT ${amount}) is required to start your project "${req.serviceName}".`,
              type: 'PAYMENT_DUE'
            }).subscribe();

            this.loadData();
            this.selectedRequest = null;
            this.cdr.detectChanges();
          });
        });
      },
      error: (err) => {
        const totalAmt = req.totalAmount || 25000;
        const amount = totalAmt * 0.20;

        this.paymentService.addPayment({
          clientId: req.userId.toString(),
          client: 'Client Name',
          email: req.clientEmail || '',
          item: `${req.serviceName} (20% Advance)`,
          amount: amount,
          method: 'WAITING',
          status: 'PENDING',
          date: new Date().toISOString().split('T')[0],
          requestId: req.id
        }).subscribe(() => {
          this.requestService.updateRequest(req.id, {
            status: 'AWAITING_ADVANCE',
            totalAmount: req.totalAmount,
            projectDocumentation: req.projectDocumentation
          }).subscribe(() => {
            this.auditLogService.logAction('Advance Requested', `Admin requested 20% advance payment for request #${req.id} (BDT ${amount})`);
            this.toastService.success('20% Advance payment requested successfully!');
            
            this.notificationService.create({
              userId: Number(req.userId),
              title: '20% Advance Payment Required',
              message: `An advance payment of 20% (BDT ${amount}) is required to start your project "${req.serviceName}".`,
              type: 'PAYMENT_DUE'
            }).subscribe();

            this.loadData();
            this.selectedRequest = null;
            this.cdr.detectChanges();
          });
        });
      }
    });
  }

  async cancelRequest() {
    const confirmed = await this.modalService.confirm('Are you sure you want to reject this request?');
    if (confirmed) {
      this.selectedRequest!.status = 'REJECTED';
      this.auditLogService.logAction('Request Rejected', `Admin rejected request #${this.selectedRequest!.id}`);
      this.updateRequest();
      this.selectedRequest = null;
    }
  }
}
