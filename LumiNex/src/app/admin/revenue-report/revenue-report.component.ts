import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService, Payment } from '../../core/services/payment.service';

@Component({
  selector: 'app-revenue-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container-fluid py-4">

      <!-- Header -->
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="d-flex align-items-center gap-3">
          <button class="btn btn-light rounded-circle p-2" (click)="goBack()">
            <i class="bi bi-arrow-left fs-5"></i>
          </button>
          <div>
            <h4 class="fw-bold mb-0">Full Revenue Report</h4>
            <div class="text-muted small">All transactions overview</div>
          </div>
        </div>
        <button class="btn btn-primary rounded-pill px-4 fw-bold" (click)="printReport()">
          <i class="bi bi-printer me-2"></i>Print Report
        </button>
      </div>

      <!-- Summary Cards -->
      <div class="row g-3 mb-4">
        <div class="col-6 col-md-3">
          <div class="card border-0 shadow-sm rounded-4 p-3 text-center">
            <div class="small text-muted fw-bold text-uppercase mb-1">Total Revenue</div>
            <div class="h4 fw-bold text-primary mb-0">{{ totalRevenue | number:'1.0-0' }} BDT</div>
            <div class="small text-muted">{{ paidCount }} paid</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card border-0 shadow-sm rounded-4 p-3 text-center">
            <div class="small text-muted fw-bold text-uppercase mb-1">Pending</div>
            <div class="h4 fw-bold text-warning mb-0">{{ pendingRevenue | number:'1.0-0' }} BDT</div>
            <div class="small text-muted">{{ pendingCount }} pending</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card border-0 shadow-sm rounded-4 p-3 text-center">
            <div class="small text-muted fw-bold text-uppercase mb-1">Total Transactions</div>
            <div class="h4 fw-bold text-dark mb-0">{{ allPayments.length }}</div>
            <div class="small text-muted">All records</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card border-0 shadow-sm rounded-4 p-3 text-center">
            <div class="small text-muted fw-bold text-uppercase mb-1">Avg. Transaction</div>
            <div class="h4 fw-bold text-success mb-0">{{ avgTransaction | number:'1.0-0' }} BDT</div>
            <div class="small text-muted">Per payment</div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
        <div class="row g-3 align-items-end">
          <div class="col-md-4">
            <label class="form-label small fw-bold text-muted">Search Client / Item</label>
            <div class="input-group">
              <span class="input-group-text bg-light border-0"><i class="bi bi-search text-muted"></i></span>
              <input
                type="text"
                class="form-control bg-light border-0"
                placeholder="Search..."
                [(ngModel)]="searchTerm"
                (input)="applyFilters()">
            </div>
          </div>
          <div class="col-md-2">
            <label class="form-label small fw-bold text-muted">Status</label>
            <select class="form-select bg-light border-0" [(ngModel)]="filterStatus" (change)="applyFilters()">
              <option value="">All</option>
              <option value="PAID">Paid</option>
              <option value="PENDING">Pending</option>
              <option value="FAILED">Failed</option>
            </select>
          </div>
          <div class="col-md-2">
            <label class="form-label small fw-bold text-muted">Method</label>
            <select class="form-select bg-light border-0" [(ngModel)]="filterMethod" (change)="applyFilters()">
              <option value="">All Methods</option>
              <option *ngFor="let m of paymentMethods" [value]="m">{{ m }}</option>
            </select>
          </div>
          <div class="col-md-2">
            <label class="form-label small fw-bold text-muted">From Date</label>
            <input type="date" class="form-control bg-light border-0" [(ngModel)]="fromDate" (change)="applyFilters()">
          </div>
          <div class="col-md-2">
            <label class="form-label small fw-bold text-muted">To Date</label>
            <input type="date" class="form-control bg-light border-0" [(ngModel)]="toDate" (change)="applyFilters()">
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <span class="small text-muted">Showing {{ filteredPayments.length }} of {{ allPayments.length }} records</span>
          <button class="btn btn-sm btn-outline-secondary rounded-pill px-3" (click)="clearFilters()">
            <i class="bi bi-x-circle me-1"></i>Clear Filters
          </button>
        </div>
      </div>

      <!-- Transactions Table -->
      <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="table-light">
              <tr>
                <th class="px-4 py-3 small fw-bold text-muted text-uppercase">#</th>
                <th class="px-4 py-3 small fw-bold text-muted text-uppercase">Client</th>
                <th class="px-4 py-3 small fw-bold text-muted text-uppercase">Item</th>
                <th class="px-4 py-3 small fw-bold text-muted text-uppercase">Method</th>
                <th class="px-4 py-3 small fw-bold text-muted text-uppercase">Date</th>
                <th class="px-4 py-3 small fw-bold text-muted text-uppercase text-end">Amount</th>
                <th class="px-4 py-3 small fw-bold text-muted text-uppercase text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let t of filteredPayments; let i = index">
                <td class="px-4 py-3 text-muted small">{{ i + 1 }}</td>
                <td class="px-4 py-3">
                  <div class="d-flex align-items-center gap-2">
                    <div class="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center"
                      style="width:32px;height:32px;flex-shrink:0">
                      <i class="bi bi-person-fill text-primary small"></i>
                    </div>
                    <div>
                      <div class="fw-semibold small">{{ t.client }}</div>
                      <div class="text-muted" style="font-size:11px">ID: {{ t.clientId }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 small">{{ t.item }}</td>
                <td class="px-4 py-3">
                  <span class="badge bg-light text-dark border small">{{ t.method }}</span>
                </td>
                <td class="px-4 py-3 small text-muted">{{ t.date | date:'mediumDate' }}</td>
                <td class="px-4 py-3 text-end fw-bold">{{ t.amount | number:'1.0-0' }} BDT</td>
                <td class="px-4 py-3 text-center">
                  <span class="badge rounded-pill px-3 py-1"
                    [ngClass]="{
                      'bg-success': t.status === 'PAID',
                      'bg-warning text-dark': t.status === 'PENDING',
                      'bg-danger': t.status === 'FAILED'
                    }">
                    {{ t.status }}
                  </span>
                </td>
              </tr>
              <tr *ngIf="filteredPayments.length === 0">
                <td colspan="7" class="text-center py-5 text-muted">
                  <i class="bi bi-inbox fs-1 d-block mb-2"></i>
                  No transactions found
                </td>
              </tr>
            </tbody>
            <tfoot class="table-light" *ngIf="filteredPayments.length > 0">
              <tr>
                <td colspan="5" class="px-4 py-3 fw-bold text-end">Filtered Total (PAID):</td>
                <td class="px-4 py-3 fw-bold text-end text-primary">
                  {{ filteredPaidTotal | number:'1.0-0' }} BDT
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .table th { border: none; }
    .table td { border-color: #f3f4f6; vertical-align: middle; }
    @media print {
      .btn, select, input { display: none !important; }
    }
  `]
})
export class RevenueReportComponent implements OnInit {
  allPayments: Payment[] = [];
  filteredPayments: Payment[] = [];

  // Stats
  totalRevenue = 0;
  pendingRevenue = 0;
  paidCount = 0;
  pendingCount = 0;
  avgTransaction = 0;
  filteredPaidTotal = 0;

  // Filters
  searchTerm = '';
  filterStatus = '';
  filterMethod = '';
  fromDate = '';
  toDate = '';
  paymentMethods: string[] = [];

  constructor(
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.paymentService.getPayments().subscribe(data => {
      this.allPayments = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      this.filteredPayments = [...this.allPayments];

      // Unique payment methods for filter dropdown
      this.paymentMethods = [...new Set(data.map(p => p.method).filter(Boolean))];

      // Stats
      const paid = data.filter(p => p.status === 'PAID');
      const pending = data.filter(p => p.status === 'PENDING');
      this.totalRevenue = paid.reduce((s, p) => s + p.amount, 0);
      this.pendingRevenue = pending.reduce((s, p) => s + p.amount, 0);
      this.paidCount = paid.length;
      this.pendingCount = pending.length;
      this.avgTransaction = data.length ? data.reduce((s, p) => s + p.amount, 0) / data.length : 0;

      this.updateFilteredTotal();
    });
  }

  applyFilters() {
    this.filteredPayments = this.allPayments.filter(p => {
      const matchSearch = !this.searchTerm ||
        p.client?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.item?.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchStatus = !this.filterStatus || p.status === this.filterStatus;
      const matchMethod = !this.filterMethod || p.method === this.filterMethod;

      const matchFrom = !this.fromDate || new Date(p.date) >= new Date(this.fromDate);
      const matchTo = !this.toDate || new Date(p.date) <= new Date(this.toDate);

      return matchSearch && matchStatus && matchMethod && matchFrom && matchTo;
    });
    this.updateFilteredTotal();
  }

  updateFilteredTotal() {
    this.filteredPaidTotal = this.filteredPayments
      .filter(p => p.status === 'PAID')
      .reduce((s, p) => s + p.amount, 0);
  }

  clearFilters() {
    this.searchTerm = '';
    this.filterStatus = '';
    this.filterMethod = '';
    this.fromDate = '';
    this.toDate = '';
    this.filteredPayments = [...this.allPayments];
    this.updateFilteredTotal();
  }

  goBack() {
    this.router.navigate(['/admin/revenue']);
  }

  printReport() {
    window.print();
  }
}