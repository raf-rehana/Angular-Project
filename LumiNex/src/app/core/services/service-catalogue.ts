import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service, ServiceCategory } from '../models/service';

@Injectable({ providedIn: 'root' })
export class ServiceCatalogueService {
  private apiUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ServiceCategory[]> {
    return this.http.get<ServiceCategory[]>(`${this.apiUrl}/categories`);
  }

  getServices(categoryId?: string): Observable<Service[]> {
    const url = categoryId ? `${this.apiUrl}/services?categoryId=${categoryId}` : `${this.apiUrl}/services`;
    return this.http.get<Service[]>(url);
  }

  getServiceById(id: string): Observable<Service> {
    return this.http.get<Service>(`${this.apiUrl}/services/${id}`);
  }
}
