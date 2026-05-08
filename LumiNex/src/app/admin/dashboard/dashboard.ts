import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../../core/services/request.service';
import { ServiceRequest } from '../../core/models/service-request';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {
  requests: ServiceRequest[] = [];
  
  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.requestService.getAllRequests().subscribe(data => {
      this.requests = data;
    });
  }

  get recentRequests() {
    return this.requests.slice(0, 5);
  }

  get pendingCount() {
    return this.requests.filter(r => r.status === 'PENDING').length;
  }
}
