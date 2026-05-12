import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { SidebarComponent } from './shared/components/sidebar/sidebar';
import { FooterComponent } from './shared/components/footer/footer';
import { LoadingBarComponent } from './shared/components/loading-bar/loading-bar';
import { ChatWidgetComponent } from './shared/components/chat-widget/chat-widget';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgIf, NavbarComponent, SidebarComponent, FooterComponent, LoadingBarComponent, ChatWidgetComponent],
  template: `
    <div class="app-container min-vh-100 d-flex flex-column">
      <app-loading-bar></app-loading-bar>
      
      <app-navbar></app-navbar>
      
      <!-- Chat Widget -->
      <app-chat-widget></app-chat-widget>
      
      <!-- Offset for fixed-top navbar (Premium height is 80px) -->
      <div style="margin-top: 80px;" class="flex-grow-1">
        <ng-container *ngIf="showSidebar; else simpleLayout">
          <div class="container-fluid p-0">
            <div class="row g-0">
              <div class="col-auto">
                <app-sidebar></app-sidebar>
              </div>
              <div class="col overflow-hidden">
                <div class="p-0"> <!-- Removed extra padding here to let pages control their own spacing -->
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

  constructor(private router: Router, private themeService: ThemeService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects || event.url;
      const isDashboardPath = url.includes('/client') || url.includes('/admin') || url.includes('/employee');
      const isPublicFlow = url.includes('/client/subscriptions') || url.includes('/client/payments') || url.includes('/client/plans');
      this.showSidebar = isDashboardPath && !isPublicFlow;
    });
  }
}