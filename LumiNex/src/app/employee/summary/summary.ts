import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../../core/services/request.service';
import { AuthService } from '../../core/services/auth.services';
import { ServiceRequest } from '../../core/models/service-request';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class SummaryComponent implements OnInit {
  myTasks: ServiceRequest[] = [];
  activeCount = 0;
  completedCount = 0;
  reviewCount = 0;
  completionRate = 0;

  // Performance metrics
  totalHoursLogged = 0;
  avgResolutionDays = 0;
  thisMonthCompleted = 0;
  lastMonthCompleted = 0;

  constructor(
    private requestService: RequestService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const user = this.authService.currentUser;
    if (user) {
      this.requestService.getAllRequests().subscribe(data => {
        this.myTasks = data.filter(t => t.assignedTo === user.id || t.assignedTo === undefined);

        this.activeCount = this.myTasks.filter(t => t.status === 'IN_PROGRESS' || t.status === 'ASSIGNED').length;
        this.completedCount = this.myTasks.filter(t => t.status === 'COMPLETED').length;
        this.reviewCount = this.myTasks.filter(t => t.status === 'REVIEW').length;

        if (this.myTasks.length > 0) {
          this.completionRate = Math.round((this.completedCount / this.myTasks.length) * 100);
        }

        // Total hours worked
        this.totalHoursLogged = parseFloat(this.myTasks.reduce((sum, t) => sum + (t.workedHours || 0), 0).toFixed(1));

        // Average resolution time (days) for completed tasks
        const completed = this.myTasks.filter(t => t.status === 'COMPLETED' && t.completedAt && t.createdAt);
        if (completed.length > 0) {
          const totalDays = completed.reduce((sum, t) => {
            const diff = new Date(t.completedAt!).getTime() - new Date(t.createdAt).getTime();
            return sum + diff / (1000 * 60 * 60 * 24);
          }, 0);
          this.avgResolutionDays = parseFloat((totalDays / completed.length).toFixed(1));
        }

        // This month vs last month
        const now = new Date();
        this.thisMonthCompleted = completed.filter(t => {
          const d = new Date(t.completedAt!);
          return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
        }).length;
        this.lastMonthCompleted = completed.filter(t => {
          const d = new Date(t.completedAt!);
          const last = new Date(now.getFullYear(), now.getMonth() - 1, 1);
          return d.getMonth() === last.getMonth() && d.getFullYear() === last.getFullYear();
        }).length;

        this.cdr.detectChanges();
      });
    }
  }
}
