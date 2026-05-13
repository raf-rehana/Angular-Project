import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCatalogueService } from '../../core/services/service-catalogue';
import { Service, ServiceCategory } from '../../core/models/service';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.services';
import { RedirectService } from '../../core/services/redirect.service';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogue.html',
  styleUrls: ['./catalogue.css']
})
export class CatalogueComponent implements OnInit {
  categories: ServiceCategory[] = [];
  services: Service[] = [];
  filteredServices: Service[] = [];
  activeCategoryId: string | number | null = null;
  searchQuery = '';

  constructor(
    private serviceCatalogue: ServiceCatalogueService,
    private route: ActivatedRoute,
    public authService: AuthService,
    private router: Router,
    private redirectService: RedirectService
  ) {}

  ngOnInit() {
    this.serviceCatalogue.getCategories().subscribe((data: ServiceCategory[]) => {
      this.categories = data;
      
      // Handle categoryId from query params after categories are loaded
      this.route.queryParams.subscribe(params => {
        const catId = params['categoryId'];
        if (catId) {
          this.activeCategoryId = catId;
        }
        this.loadServices();
      });
    });
  }

  loadServices() {
    this.serviceCatalogue.getServices().subscribe((data: Service[]) => {
      this.services = data;
      this.applyFilters();
    });
  }

  filterByCategory(categoryId: string | number | null) {
    this.activeCategoryId = categoryId;
    this.applyFilters();
  }

  onSearch(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  applyFilters() {
    let filtered = this.services;
    
    if (this.activeCategoryId) {
      filtered = filtered.filter(s => s.categoryId.toString() === this.activeCategoryId?.toString());
    }
    
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(s => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));
    }
    
    this.filteredServices = filtered;
  }

  get groupedServices() {
    const groups: { category: ServiceCategory, services: Service[] }[] = [];
    
    const relevantCategories = this.activeCategoryId 
      ? this.categories.filter(c => c.id.toString() === this.activeCategoryId?.toString())
      : this.categories;

    relevantCategories.forEach(cat => {
      const catServices = this.filteredServices.filter(s => s.categoryId.toString() === cat.id.toString());
      if (catServices.length > 0) {
        groups.push({ category: cat, services: catServices });
      }
    });
    
    return groups;
  }

  getCategoryColor(categoryId: string | number): string {
    const category = this.categories.find(c => c.id.toString() === categoryId.toString());
    return category?.color || '#0d6efd';
  }

  getActiveCategoryName(): string {
    const cat = this.categories.find(c => c.id.toString() === this.activeCategoryId?.toString());
    return cat?.name || 'Selected Sector';
  }

  getServiceBadgeColor(index: number): string {
    const palette = [
      '#1D4ED8', // Bold Blue
      '#065F46', // Deep Emerald
      '#92400E', // Burnt Amber
      '#1E3A5F', // Navy
      '#7C3AED', // Deep Violet
      '#0F766E', // Teal
      '#B45309', // Dark Orange
      '#1F2937', // Charcoal
      '#155E75', // Dark Cyan
      '#3B0764', // Deep Indigo
      '#064E3B', // Forest Green
      '#1C1917', // Dark Stone
    ];
    return palette[index % palette.length];
  }

  onServiceRequest(service: any) {
    const targetUrl = '/client/request-form';
    const queryParams = { serviceId: service.id };
    if (this.authService.isLoggedIn()) {
      this.router.navigate([targetUrl], { queryParams });
    } else {
      const fullUrl = this.router.createUrlTree([targetUrl], { queryParams }).toString();
      this.redirectService.setReturnUrl(fullUrl);
      this.router.navigate(['/login']);
    }
  }
}
