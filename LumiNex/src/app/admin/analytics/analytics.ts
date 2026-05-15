import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../core/services/payment.service';
import { AdminService } from '../../core/services/admin.service';
import { RequestService } from '../../core/services/request.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-analytics',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container-fluid py-4">
      <div class="mb-4">
        <h2 class="fw-bold text-dark mb-0">SaaS Analytics</h2>
        <p class="text-muted">Real-time performance metrics for your platform.</p>
      </div>

      <!-- MRR / ARR / Churn Row -->
      <div class="row g-4 mb-4">
        <div class="col-md-3">
          <div class="card border-0 shadow-sm rounded-4 p-4 h-100" style="border-left: 4px solid #6366f1 !important;">
            <div class="small fw-bold text-muted text-uppercase mb-2">MRR</div>
            <div class="h3 fw-bold text-dark mb-1">BDT {{ mrr | number }}</div>
            <div class="small text-success"><i class="bi bi-arrow-up-right"></i> Monthly Recurring Revenue</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card border-0 shadow-sm rounded-4 p-4 h-100" style="border-left: 4px solid #10b981 !important;">
            <div class="small fw-bold text-muted text-uppercase mb-2">ARR</div>
            <div class="h3 fw-bold text-dark mb-1">BDT {{ arr | number }}</div>
            <div class="small text-success"><i class="bi bi-arrow-up-right"></i> Annual Recurring Revenue</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card border-0 shadow-sm rounded-4 p-4 h-100" style="border-left: 4px solid #f59e0b !important;">
            <div class="small fw-bold text-muted text-uppercase mb-2">Churn Rate</div>
            <div class="h3 fw-bold text-dark mb-1">{{ churnRate | number:'1.1-1' }}%</div>
            <div class="small text-muted"><i class="bi bi-dash"></i> Cancelled clients / Total</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card border-0 shadow-sm rounded-4 p-4 h-100" style="border-left: 4px solid #ef4444 !important;">
            <div class="small fw-bold text-muted text-uppercase mb-2">Total Revenue</div>
            <div class="h3 fw-bold text-dark mb-1">BDT {{ totalRevenue | number }}</div>
            <div class="small text-muted"><i class="bi bi-cash-stack"></i> All time earnings</div>
          </div>
        </div>
      </div>

      <!-- Client & Request Breakdown -->
      <div class="row g-4 mb-4">
        <div class="col-md-6">
          <div class="card border-0 shadow-sm rounded-4 p-4 h-100">
            <h5 class="fw-bold mb-4">Request Status Breakdown</h5>
            <div *ngFor="let item of statusBreakdown" class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="small fw-bold text-dark">{{ item.label }}</span>
                <span class="small text-muted">{{ item.count }} requests</span>
              </div>
              <div class="progress rounded-pill" style="height: 8px;">
                <div class="progress-bar rounded-pill" [style.width.%]="item.pct" [style.background]="item.color"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-0 shadow-sm rounded-4 p-4 h-100">
            <h5 class="fw-bold mb-4">User Overview</h5>
            <div class="row g-3">
              <div class="col-6">
                <div class="text-center p-4 rounded-4" style="background: #f0f4ff;">
                  <div class="h2 fw-bold text-primary mb-1">{{ clientCount }}</div>
                  <div class="small text-muted">Total Clients</div>
                </div>
              </div>
              <div class="col-6">
                <div class="text-center p-4 rounded-4" style="background: #f0fdf4;">
                  <div class="h2 fw-bold text-success mb-1">{{ activeClients }}</div>
                  <div class="small text-muted">Active Clients</div>
                </div>
              </div>
              <div class="col-6">
                <div class="text-center p-4 rounded-4" style="background: #fefce8;">
                  <div class="h2 fw-bold text-warning mb-1">{{ employeeCount }}</div>
                  <div class="small text-muted">Employees</div>
                </div>
              </div>
              <div class="col-6">
                <div class="text-center p-4 rounded-4" style="background: #fff1f2;">
                  <div class="h2 fw-bold text-danger mb-1">{{ pendingRequests }}</div>
                  <div class="small text-muted">Pending Requests</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Clients by Revenue -->
      <div class="card border-0 shadow-sm rounded-4">
        <div class="card-body p-4">
          <h5 class="fw-bold mb-4">Top Clients by Revenue</h5>
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead class="table-light">
                <tr>
                  <th class="border-0 py-3">Client</th>
                  <th class="border-0 py-3">Total Paid</th>
                  <th class="border-0 py-3">Transactions</th>
                  <th class="border-0 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let c of topClients">
                  <td class="py-3 fw-bold">{{ c.client }}</td>
                  <td class="py-3 text-success fw-bold">BDT {{ c.total | number:'1.0-0' }}</td>
                  <td class="py-3 text-muted">{{ c.count }} txn</td>
                  <td class="py-3"><span class="badge bg-success">Active</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AdminAnalyticsComponent implements OnInit {
  payments: any[] = [];
  requests: any[] = [];
  clientCount = 0;
  employeeCount = 0;

  mrr = 0;
  arr = 0;
  totalRevenue = 0;
  churnRate = 0;
  activeClients = 0;
  pendingRequests = 0;
  topClients: any[] = [];
  statusBreakdown: any[] = [];

  constructor(
    private paymentService: PaymentService,
    private adminService: AdminService,
    private requestService: RequestService
  ) {}

  ngOnInit() {
    this.paymentService.getPayments().subscribe((data: any[]) => {
      this.payments = data;
      this.computeMetrics();
    });
    this.requestService.getAllRequests().subscribe((data: any[]) => {
      this.requests = data;
      this.computeRequestMetrics();
    });
    this.adminService.getUsers('CLIENT').subscribe((data: any[]) => {
      this.clientCount = data.length;
      this.activeClients = data.length;
    });
    this.adminService.getUsers('EMPLOYEE').subscribe((data: any[]) => {
      this.employeeCount = data.length;
    });
  }

  computeMetrics() {
    const paid = this.payments.filter(p => p.status === 'PAID');
    this.totalRevenue = paid.reduce((sum, p) => sum + (p.amount || 0), 0);
    this.mrr = Math.round(this.totalRevenue / 12);
    this.arr = this.totalRevenue;

    // Churn: % of clients with only PENDING records (never paid)
    const allClientIds = [...new Set(this.payments.map(p => p.clientId))];
    const paidClientIds = new Set(paid.map(p => p.clientId));
    const churned = allClientIds.filter(id => !paidClientIds.has(id)).length;
    this.churnRate = allClientIds.length > 0 ? (churned / allClientIds.length) * 100 : 0;

    // Top clients
    const clientMap: any = {};
    paid.forEach(p => {
      if (!clientMap[p.client]) clientMap[p.client] = { client: p.client, total: 0, count: 0 };
      clientMap[p.client].total += p.amount || 0;
      clientMap[p.client].count++;
    });
    this.topClients = Object.values(clientMap).sort((a: any, b: any) => b.total - a.total).slice(0, 5);
  }

  computeRequestMetrics() {
    const total = this.requests.length || 1;
    this.pendingRequests = this.requests.filter(r => r.status === 'PENDING').length;
    this.statusBreakdown = [
      { label: 'Pending', count: this.requests.filter(r => r.status === 'PENDING').length, color: '#f59e0b', pct: 0 },
      { label: 'In Progress', count: this.requests.filter(r => r.status === 'IN_PROGRESS').length, color: '#6366f1', pct: 0 },
      { label: 'Review', count: this.requests.filter(r => r.status === 'REVIEW').length, color: '#3b82f6', pct: 0 },
      { label: 'Completed', count: this.requests.filter(r => r.status === 'COMPLETED').length, color: '#10b981', pct: 0 },
      { label: 'Rejected', count: this.requests.filter(r => r.status === 'REJECTED').length, color: '#ef4444', pct: 0 },
    ];
    this.statusBreakdown.forEach(s => s.pct = Math.round((s.count / total) * 100));
  }
}
