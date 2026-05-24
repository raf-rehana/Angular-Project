import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { SidebarComponent } from './shared/components/sidebar/sidebar';
import { FooterComponent } from './shared/components/footer/footer';
import { LoadingBarComponent } from './shared/components/loading-bar/loading-bar';
import { ChatWidgetComponent } from './shared/components/chat-widget/chat-widget';
import { ToastComponent } from './shared/components/toast/toast';
import { ConfirmModalComponent } from './shared/components/confirm-modal/confirm-modal.component';
import { ThemeService } from './core/services/theme.service';
import { AuthService } from './core/services/auth.service';
import { NotificationBellComponent } from './shared/components/notification-bell/notification-bell';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, SidebarComponent, FooterComponent, LoadingBarComponent, ChatWidgetComponent, ToastComponent, ConfirmModalComponent, NotificationBellComponent],
  template: `
    <div class="app-container min-vh-100 d-flex flex-column">
      <app-loading-bar></app-loading-bar>
      
      <app-navbar *ngIf="!showSidebar"></app-navbar>
      
      <!-- Chat Widget -->
      <app-chat-widget></app-chat-widget>

      <!-- Global Toast Notifications -->
      <app-toast></app-toast>
      <app-confirm-modal></app-confirm-modal>
      
      <!-- Offset for fixed-top navbar (Premium height is 80px) -->
      <div [style.marginTop.px]="showSidebar ? 0 : 80" class="flex-grow-1">
        <ng-container *ngIf="showSidebar; else simpleLayout">
          <div class="container-fluid p-0">
            <div class="row g-0">
              <div class="col-auto">
                <app-sidebar></app-sidebar>
              </div>
              <div class="col overflow-hidden d-flex flex-column min-vh-100">
                <!-- Dashboard Top Header -->
                <div class="bg-white border-bottom px-4 py-2 d-flex justify-content-end align-items-center shadow-sm" style="height: 60px;">
                  <div class="d-flex align-items-center gap-4">
                    <a routerLink="/contact" class="text-decoration-none text-violet-500 fw-bold small transition-all opacity-75 hover-opacity-100" *ngIf="(authService.currentUser$ | async)?.role === 'CLIENT'">
                      <i class="bi bi-envelope me-1"></i> Contact
                    </a>
                    <a routerLink="/catalogue" class="text-decoration-none text-violet-500 fw-bold small transition-all opacity-75 hover-opacity-100" *ngIf="(authService.currentUser$ | async)?.role === 'CLIENT'">
                      <i class="bi bi-grid me-1"></i> Services
                    </a>
                    <div class="vr mx-2 text-slate-300" *ngIf="(authService.currentUser$ | async)?.role === 'CLIENT'"></div>
                    <app-notification-bell></app-notification-bell>
                    <div class="dropdown">
                      <button class="btn btn-light rounded-pill dropdown-toggle d-flex align-items-center gap-2 border-0" type="button" data-bs-toggle="dropdown" *ngIf="authService.currentUser$ | async as user">
                        <div class="avatar-circle bg-primary text-white d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; border-radius: 50%;">
                          <img *ngIf="user.avatar; else initialAvatar" [src]="user.avatar" class="w-100 h-100 object-fit-cover" style="border-radius: 50%;">
                          <ng-template #initialAvatar>{{ user.name.charAt(0) | uppercase }}</ng-template>
                        </div>
                        <span class="d-none d-md-inline small fw-bold">{{ user.name }}</span>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0 mt-2 rounded-3">
                        <li><a class="dropdown-item py-2" routerLink="/client/profile"><i class="bi bi-person me-2"></i>Profile Settings</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><button class="dropdown-item text-danger py-2" (click)="logout()"><i class="bi bi-box-arrow-right me-2"></i>Sign Out</button></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="p-0 flex-grow-1 overflow-auto"> <!-- Removed extra padding here to let pages control their own spacing -->
                  <router-outlet></router-outlet>
                </div>
              </div>
            </div>
          </div>
        </ng-container>
        
        <ng-template #simpleLayout>
          <router-outlet></router-outlet>
          <app-footer></app-footer>
        </ng-template>
      </div>
    </div>
  `,
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'LumiNex';
  showSidebar = false;

  constructor(private router: Router, private themeService: ThemeService, public authService: AuthService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects || event.url;
      const isLoggedIn = this.authService.isLoggedIn();
      
      // Paths that should display the sidebar
      const isDashboardPath = url.includes('/client') || 
                              url.includes('/admin') || 
                              url.includes('/employee');
      
      const isGlobalComponent = url.includes('/catalogue') || 
                                url.includes('/contact') || 
                                url.includes('/packages');
      
      // Show sidebar for core dashboard paths, OR if user is logged in and visiting global components
      this.showSidebar = isDashboardPath || (isGlobalComponent && isLoggedIn);
    });
  }

  logout() {
    this.authService.logout();
  }
}
