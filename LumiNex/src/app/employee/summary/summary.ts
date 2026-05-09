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
        
        this.cdr.detectChanges();
      });
    }
  }
}
