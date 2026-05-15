import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ServiceCatalogueService } from '../../../core/services/service-catalogue';
import { ServiceCategory } from '../../../core/models/service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgIf, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  categories: ServiceCategory[] = [];

  constructor(
    public authService: AuthService, 
    public router: Router,
    private catalogueService: ServiceCatalogueService
  ) {}

  showSectors = true;

  ngOnInit() {
    this.catalogueService.getCategories().subscribe(data => {
      this.categories = data;
    });

    // Initial check
    this.updateVisibility();

    // Listen to route changes
    this.router.events.subscribe(() => {
      this.updateVisibility();
    });
  }

  private updateVisibility() {
    this.showSectors = !this.router.url.startsWith('/client');
    console.log('Sidebar - URL:', this.router.url, 'ShowSectors:', this.showSectors);
  }
  
  get isClientContext(): boolean {
    const isClient = this.router.url.startsWith('/client');
    console.log('Sidebar - Current URL:', this.router.url);
    console.log('Sidebar - isClientContext:', isClient);
    return isClient;
  }

  get isCatalogueContext(): boolean {
    return this.router.url.startsWith('/catalogue');
  }

  get isAdminContext(): boolean {
    return this.router.url.startsWith('/admin');
  }

  get isEmployeeContext(): boolean {
    return this.router.url.startsWith('/employee');
  }

  get isGenericContext(): boolean {
    return !this.isClientContext && !this.isAdminContext && !this.isEmployeeContext && !this.isCatalogueContext;
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
