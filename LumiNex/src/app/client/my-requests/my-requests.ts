import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RequestService } from '../../core/services/request.service';
import { AuthService } from '../../core/services/auth.service';
import { ServiceRequest } from '../../core/models/service-request';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { RequestTimelineComponent } from '../../shared/components/request-timeline/request-timeline';

@Component({
  selector: 'app-my-requests',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent, RequestTimelineComponent],
  templateUrl: './my-requests.html',
  styleUrls: ['./my-requests.css']
})
export class MyRequestsComponent implements OnInit {
  requests: ServiceRequest[] = [];
  selectedRequest: ServiceRequest | null = null;

  constructor(
    private requestService: RequestService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const user = this.authService.currentUser;
    if (user) {
      this.requestService.getMyRequests(user.id).subscribe(data => {
        this.requests = data;
      });
    }
  }

  viewDetails(req: ServiceRequest) {
    this.router.navigate(['/client/request-detail', req.id]);
  }
}
