import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationService } from '../../../core/services/notification.service';
import { AuthService } from '../../../core/services/auth.services';

@Component({
  selector: 'app-notification-bell',
  standalone: true,
  imports: [CommonModule, NgIf, RouterModule],
  templateUrl: './notification-bell.html',
  styleUrls: ['./notification-bell.css']
})
export class NotificationBellComponent implements OnInit {
  unreadCount = 0;

  constructor(
    public notificationService: NotificationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.notificationService.unreadCount$.subscribe(count => {
      this.unreadCount = count;
    });
    
    const user = this.authService.currentUser;
    if (user) {
      this.notificationService.getAll(user.id).subscribe();
    }
  }
}
