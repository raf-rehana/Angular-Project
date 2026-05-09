import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceRequest } from '../models/service-request';

@Injectable({ providedIn: 'root' })
export class RequestService {
  private api = 'http://127.0.0.1:3000/service-requests';

  constructor(private http: HttpClient) {}

  getMyRequests(userId: string | number): Observable<ServiceRequest[]> {
    return this.http.get<ServiceRequest[]>(`${this.api}?userId=${userId}`);
  }

  getAllRequests(): Observable<ServiceRequest[]> {
    return this.http.get<ServiceRequest[]>(this.api);
  }

  getById(id: string | number): Observable<ServiceRequest> {
    return this.http.get<ServiceRequest>(`${this.api}/${id}`);
  }

  submitRequest(data: Partial<ServiceRequest>): Observable<ServiceRequest> {
    return this.http.post<ServiceRequest>(this.api, data);
  }

  updateStatus(id: string | number, status: string, employeeNotes?: string): Observable<ServiceRequest> {
    return this.http.patch<ServiceRequest>(`${this.api}/${id}`, { status, employeeNotes });
  }

  assignToEmployee(requestId: string | number, employeeId: string | number): Observable<ServiceRequest> {
    return this.http.patch<ServiceRequest>(`${this.api}/${requestId}`, { assignedTo: employeeId.toString() });
  }
}
