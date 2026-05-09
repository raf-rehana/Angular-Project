import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../../core/services/request.service';
import { AuthService } from '../../core/services/auth.services';
import { ServiceRequest } from '../../core/models/service-request';
import { RouterModule } from '@angular/router';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';

@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [CommonModule, RouterModule, StatusBadgeComponent],
  templateUrl: './my-tasks.html',
  styleUrl: './my-tasks.css',
})
export class MyTasksComponent implements OnInit {
  tasks: ServiceRequest[] = [];
  filteredTasks: ServiceRequest[] = [];

  constructor(
    private requestService: RequestService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    const user = this.authService.currentUser;
    if (user) {
      this.requestService.getAllRequests().subscribe(data => {
        this.tasks = data.filter(t => t.assignedTo === user.id || t.assignedTo === undefined);
        this.filteredTasks = [...this.tasks];
        this.cdr.detectChanges();
      });
    }
  }

  filterStatus(status: string) {
    if (status === 'ALL') {
      this.filteredTasks = [...this.tasks];
    } else {
      this.filteredTasks = this.tasks.filter(t => t.status === status);
    }
    this.cdr.detectChanges();
  }
}
