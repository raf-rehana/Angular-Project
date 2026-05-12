import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.services';
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

  ngOnInit() {
    this.catalogueService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
  
  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
