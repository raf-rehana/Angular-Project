import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditLogService, AuditLog } from '../../core/services/audit-log.service';

@Component({
  selector: 'app-admin-audit-logs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-fluid py-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="fw-bold text-dark mb-0">Audit Logs</h2>
          <p class="text-muted">Chronological record of system activity and user actions.</p>
        </div>
      </div>

      <div class="card border-0 shadow-sm rounded-4">
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead class="table-light">
                <tr>
                  <th class="ps-4 py-3 border-0">Timestamp</th>
                  <th class="py-3 border-0">User</th>
                  <th class="py-3 border-0">Role</th>
                  <th class="py-3 border-0">Action</th>
                  <th class="pe-4 py-3 border-0">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let log of logs">
                  <td class="ps-4 py-3 text-muted small">{{ log.timestamp | date:'medium' }}</td>
                  <td class="py-3 fw-bold text-dark">{{ log.userName }}</td>
                  <td class="py-3">
                    <span class="badge" 
                          [ngClass]="{'bg-primary': log.userRole === 'ADMIN', 'bg-info': log.userRole === 'EMPLOYEE', 'bg-secondary': log.userRole === 'CLIENT'}">
                      {{ log.userRole }}
                    </span>
                  </td>
                  <td class="py-3 text-dark fw-medium">{{ log.action }}</td>
                  <td class="pe-4 py-3 text-muted">{{ log.details }}</td>
                </tr>
                <tr *ngIf="logs.length === 0">
                  <td colspan="5" class="text-center py-5 text-muted">No audit logs recorded yet.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AdminAuditLogsComponent implements OnInit {
  logs: AuditLog[] = [];

  constructor(private auditLogService: AuditLogService) {}

  ngOnInit() {
    this.auditLogService.getLogs().subscribe((data: AuditLog[]) => {
      this.logs = data;
    });
  }
}
