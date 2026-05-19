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
import { NotificationService } from '../../core/services/notification.service';
import { AdminService } from '../../core/services/admin.service';

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
  daysRemaining: number | null = null;

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
    private notificationService: NotificationService,
    private adminService: AdminService,
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
          this.calculateDeadline(data);
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
    if (!this.isTimerRunning) return;
    this.isTimerRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    if (this.task) {
      const hours = parseFloat((this.elapsedSeconds / 3600).toFixed(2));
      this.task.workedHours = hours;
      this.requestService.updateStatus(this.task.id, this.task.status, this.task.employeeNotes, hours, this.task.progress).subscribe();
    }
  }

  calculateDeadline(task: ServiceRequest) {
    this.adminService.getService(task.serviceId).subscribe(service => {
      if (service && service.deliveryDays) {
        // Extract max days from range like "3-5" or just "7"
        const days = Math.max(...service.deliveryDays.split('-').map((d: string) => parseInt(d.trim())).filter((n: number) => !isNaN(n)));
        if (days > 0) {
          const createdAt = new Date(task.createdAt);
          const deadline = new Date(createdAt.getTime() + days * 24 * 60 * 60 * 1000);
          const now = new Date();
          const diff = deadline.getTime() - now.getTime();
          this.daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));
        }
      }
    });
  }

  goBack() {
    this.router.navigate(['/employee/my-tasks']);
  }

  updateTask() {
    if (!this.task) return;
    
    // Stop the timer first to prevent ngOnDestroy from triggering a duplicate save
    if (this.isTimerRunning) {
      this.isTimerRunning = false;
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
      }
    }

    const hours = parseFloat((this.elapsedSeconds / 3600).toFixed(2));
    const task = this.task;
    this.requestService.updateStatus(task.id, task.status, task.employeeNotes, hours, task.progress).subscribe(() => {
      this.auditLogService.logAction('Task Updated', `Task #${task.id} status changed to ${task.status} (${task.progress}% complete)`);
      this.toastService.success('Task updated successfully!');

      // Notify the client about the progress update
      const statusLabel = this.getStatusLabel(task.status);
      const progressText = task.progress != null ? ` (${task.progress}% complete)` : '';
      this.notificationService.create({
        userId: task.userId as number,
        title: `Work Progress Update`,
        message: `Your request "${task.serviceName}" has been updated to ${statusLabel}${progressText}.`,
        type: 'STATUS_UPDATE'
      }).subscribe();

      // Navigate back after save
      this.goBack();
    });
  }

  downloadAllDocs() {
    if (!this.task || !this.task.documents) return;
    this.task.documents.forEach(doc => {
      window.open(doc.url, '_blank');
    });
    this.toastService.info(`Initiating download for ${this.task.documents.length} documents.`);
  }

  private getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      PENDING: 'Pending',
      ASSIGNED: 'Assigned',
      IN_PROGRESS: 'In Progress',
      REVIEW: 'Under Review',
      COMPLETED: 'Completed',
      REJECTED: 'Rejected'
    };
    return labels[status] || status;
  }
}

