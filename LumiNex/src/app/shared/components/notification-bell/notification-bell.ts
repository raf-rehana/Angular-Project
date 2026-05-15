import { Component, OnInit, Input } from '@angular/core';
import { CommonModule, NgIf, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationService } from '../../../core/services/notification.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-notification-bell',
  standalone: true,
  imports: [CommonModule, NgIf, NgClass, RouterModule],
  templateUrl: './notification-bell.html',
  styleUrls: ['./notification-bell.css']
})
export class NotificationBellComponent implements OnInit {
  @Input() iconClass: string = '';
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
