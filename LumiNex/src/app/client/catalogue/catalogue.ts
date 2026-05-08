import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCatalogueService } from '../../core/services/service-catalogue';
import { Service, ServiceCategory } from '../../core/models/service';
import { RouterModule } from '@angular/router';

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

  constructor(private serviceCatalogue: ServiceCatalogueService) {}

  ngOnInit() {
    this.serviceCatalogue.getCategories().subscribe((data: ServiceCategory[]) => {
      this.categories = data;
    });
    this.serviceCatalogue.getServices().subscribe((data: Service[]) => {
      this.services = data;
      this.filteredServices = data;
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
}
