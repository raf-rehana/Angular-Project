import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationService } from '../../core/services/notification.service';
import { AuthService } from '../../core/services/auth.service';
import { Notification } from '../../core/models/notification';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, NgClass, DatePipe, RouterModule],
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.css']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  isLoading = true;
  filter: 'all' | 'unread' = 'all';

  constructor(
    public notificationService: NotificationService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    const user = this.authService.currentUser;
    if (user) {
      this.isLoading = true;
      this.notificationService.getAll(user.id).subscribe({
        next: (data) => {
          this.notifications = data.sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          this.isLoading = false;
        },
        error: () => { this.isLoading = false; }
      });
    } else {
      this.isLoading = false;
    }
  }

  get filteredNotifications(): Notification[] {
    return this.filter === 'unread'
      ? this.notifications.filter(n => !n.isRead)
      : this.notifications;
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.isRead).length;
  }

  markRead(notification: Notification) {
    if (notification.isRead) return;
    this.notificationService.markRead(notification.id).subscribe(() => {
      notification.isRead = true;
      // Recount from local list and push to service
      const remaining = this.notifications.filter(n => !n.isRead).length;
      (this.notificationService as any)['unreadCount'].next(remaining);
    });
  }

  markAllRead() {
    const user = this.authService.currentUser;
    if (!user) return;
    this.notificationService.markAllRead(user.id).subscribe(() => {
      this.notifications.forEach(n => n.isRead = true);
    });
  }

  getTypeIcon(type: string): string {
    const icons: Record<string, string> = {
      STATUS_UPDATE: 'bi-arrow-repeat',
      PAYMENT_DUE: 'bi-credit-card',
      DOCUMENT_NEEDED: 'bi-file-earmark-text',
      INFO: 'bi-info-circle',
      TASK_ASSIGNED: 'bi-person-check'
    };
    return icons[type] || 'bi-bell';
  }

  getTypeColor(type: string): string {
    const colors: Record<string, string> = {
      STATUS_UPDATE: 'notif-blue',
      PAYMENT_DUE: 'notif-red',
      DOCUMENT_NEEDED: 'notif-orange',
      INFO: 'notif-purple',
      TASK_ASSIGNED: 'notif-green'
    };
    return colors[type] || 'notif-blue';
  }

  getTypeLabel(type: string): string {
    const labels: Record<string, string> = {
      STATUS_UPDATE: 'Status Update',
      PAYMENT_DUE: 'Payment Due',
      DOCUMENT_NEEDED: 'Document Needed',
      INFO: 'Info',
      TASK_ASSIGNED: 'Task Assigned'
    };
    return labels[type] || type;
  }
}
