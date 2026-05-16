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

  getAll(): Observable<ServiceRequest[]> {
    return this.http.get<ServiceRequest[]>(this.api);
  }

  getById(id: string | number): Observable<ServiceRequest> {
    return this.http.get<ServiceRequest>(`${this.api}/${id}`);
  }

  submitRequest(data: Partial<ServiceRequest>): Observable<ServiceRequest> {
    return this.http.post<ServiceRequest>(this.api, data);
  }

  updateStatus(id: string | number, status: string, employeeNotes?: string, workedHours?: number, progress?: number): Observable<ServiceRequest> {
    const payload: any = { status, employeeNotes };
    if (workedHours !== undefined) payload.workedHours = workedHours;
    if (progress !== undefined) payload.progress = progress;
    return this.http.patch<ServiceRequest>(`${this.api}/${id}`, payload);
  }

  assignToEmployee(requestId: string | number, employeeId: string | number): Observable<ServiceRequest> {
    return this.http.patch<ServiceRequest>(`${this.api}/${requestId}`, { assignedTo: employeeId.toString() });
  }
}
