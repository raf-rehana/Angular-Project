import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../../core/services/request.service';
import { AdminService } from '../../core/services/admin.service';
import { ServiceCatalogueService } from '../../core/services/service-catalogue';
import { ServiceRequest } from '../../core/models/service-request';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class AdminDashboard implements OnInit {
  requests: ServiceRequest[] = [];
  clientCount = 0;
  employeeCount = 0;
  serviceCount = 0;
  packageCount = 0;
  
  constructor(
    private requestService: RequestService,
    private adminService: AdminService,
    private catalogueService: ServiceCatalogueService
  ) {}

  ngOnInit() {
    this.loadStats();
  }

  loadStats() {
    this.requestService.getAllRequests().subscribe(data => {
      this.requests = data;
    });

    this.adminService.getUsers('CLIENT').subscribe(data => {
      this.clientCount = data.length;
    });

    this.adminService.getUsers('EMPLOYEE').subscribe(data => {
      this.employeeCount = data.length;
    });

    this.catalogueService.getServices().subscribe(data => {
      this.serviceCount = data.length;
    });

    this.catalogueService.getPackages().subscribe(data => {
      this.packageCount = data.length;
    });
  }

  get recentRequests() {
    return this.requests.slice(0, 5);
  }

  get pendingCount() {
    return this.requests.filter(r => r.status === 'PENDING').length;
  }
}
