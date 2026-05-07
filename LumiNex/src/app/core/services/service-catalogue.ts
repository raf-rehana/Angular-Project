import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Service, ServiceCategory } from '../models/service';

@Injectable({ providedIn: 'root' })
export class ServiceCatalogue {
  private jsonUrl = 'assets/data/services.json';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ServiceCategory[]> {
    return this.http.get<any>(this.jsonUrl).pipe(map(d => d.categories));
  }

  getServices(categoryId?: number): Observable<Service[]> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(d => categoryId
        ? d.services.filter((s: Service) => s.categoryId === categoryId)
        : d.services)
    );
  }

  getServiceById(id: number): Observable<Service | undefined> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(d => d.services.find((s: Service) => s.id === id))
    );
  }
}