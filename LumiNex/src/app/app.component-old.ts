import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { SidebarComponent } from './shared/components/sidebar/sidebar';
import { FooterComponent } from './shared/components/footer/footer';
import { LoadingBarComponent } from './shared/components/loading-bar/loading-bar';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, SidebarComponent, FooterComponent, LoadingBarComponent],
  template: `
    <div class="app-container bg-light min-vh-100 d-flex flex-column">
      <app-loading-bar></app-loading-bar>
      
      <app-navbar></app-navbar>
      
      <!-- Offset for fixed-top navbar (approx 64px) -->
      <div style="margin-top: 64px;" class="flex-grow-1">
        <ng-container *ngIf="showSidebar; else simpleLayout">
          <div class="container-fluid p-0">
            <div class="row g-0">
              <div class="col-auto">
                <app-sidebar></app-sidebar>
              </div>
              <div class="col">
                <div class="p-4">
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
      this.showSidebar = url.includes('/client') || url.includes('/admin') || url.includes('/employee');
    });
  }
}