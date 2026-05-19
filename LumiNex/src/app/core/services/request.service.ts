import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceRequest } from '../models/service-request';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class RequestService {
  private api = `${environment.apiUrl}/service-requests`;

  constructor(private http: HttpClient) {}

  getMyRequests(userId: string | number): Observable<ServiceRequest[]> {
    return this.http.get<ServiceRequest[]>(`${this.api}?userId:contains=${userId}`);
  }

  getAllRequests(): Observable<ServiceRequest[]> {
    return this.http.get<ServiceRequest[]>(this.api);
  }

  getAll(): Observable<ServiceRequest[]> {
    return this.http.get<ServiceRequest[]>(this.api);
  }

  getById(id: string | number): Observable<ServiceRequest> {
    return this.http.get<ServiceRequest>(`${this.api}/${id}`);
  }

  submitRequest(data: Partial<ServiceRequest>): Observable<ServiceRequest> {
    return this.http.post<ServiceRequest>(this.api, data);
  }

  updateStatus(id: string | number, status: string, employeeNotes?: string, workedHours?: number, progress?: number, priority?: string): Observable<ServiceRequest> {
    const payload: any = { status, employeeNotes };
    if (workedHours !== undefined && workedHours !== null) payload.workedHours = Number(workedHours);
    if (progress !== undefined && progress !== null) payload.progress = Number(progress);
    if (priority !== undefined) payload.priority = priority;
    return this.http.patch<ServiceRequest>(`${this.api}/${id}`, payload);
  }

  assignToEmployee(requestId: string | number, employeeId: string | number): Observable<ServiceRequest> {
    return this.http.patch<ServiceRequest>(`${this.api}/${requestId}`, { assignedTo: employeeId.toString() });
  }

  updateRequest(id: string | number, payload: Partial<ServiceRequest>): Observable<ServiceRequest> {
    return this.http.patch<ServiceRequest>(`${this.api}/${id}`, payload);
  }
}
