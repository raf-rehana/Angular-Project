import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../core/services/request.service';
import { PaymentService } from '../../core/services/payment.service';
import { ServiceRequest } from '../../core/models/service-request';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { AuditLogService } from '../../core/services/audit-log.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, StatusBadgeComponent],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail implements OnInit, OnDestroy {
  task: ServiceRequest | null = null;
  clientPayments: any[] = [];
  clientRequests: any[] = [];

  // Timer state
  isTimerRunning = false;
  timerInterval: any;
  elapsedSeconds = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestService: RequestService,
    private paymentService: PaymentService,
    private auditLogService: AuditLogService,
    private toastService: ToastService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.requestService.getById(id).subscribe(data => {
          this.task = data;
          this.elapsedSeconds = (data.workedHours || 0) * 3600;
          this.loadClientData(data.userId?.toString());
          this.cdr.detectChanges();
        });
      }
    });
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  loadClientData(userId: string) {
    this.paymentService.getPayments().subscribe(payments => {
      this.clientPayments = payments.filter((p: any) => p.clientId === userId);
    });
    this.requestService.getAll().subscribe((requests: any[]) => {
      this.clientRequests = requests.filter(r => r.userId?.toString() === userId && r.id !== this.task?.id);
    });
  }

  get formattedElapsed(): string {
    const h = Math.floor(this.elapsedSeconds / 3600);
    const m = Math.floor((this.elapsedSeconds % 3600) / 60);
    const s = this.elapsedSeconds % 60;
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  startTimer() {
    this.isTimerRunning = true;
    this.timerInterval = setInterval(() => {
      this.elapsedSeconds++;
      this.cdr.detectChanges();
    }, 1000);
  }

  stopTimer() {
    this.isTimerRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    if (this.task) {
      const hours = parseFloat((this.elapsedSeconds / 3600).toFixed(2));
      this.task.workedHours = hours;
      this.requestService.updateStatus(this.task.id, this.task.status, this.task.employeeNotes, hours).subscribe();
    }
  }

  goBack() {
    this.router.navigate(['/employee/my-tasks']);
  }

  updateTask() {
    if (!this.task) return;
    const hours = parseFloat((this.elapsedSeconds / 3600).toFixed(2));
    this.requestService.updateStatus(this.task.id, this.task.status, this.task.employeeNotes, hours).subscribe(() => {
      this.auditLogService.logAction('Task Updated', `Task #${this.task!.id} status changed to ${this.task!.status}`);
      this.toastService.success('Task updated successfully!');
    });
  }
}

