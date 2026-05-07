import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ServiceRequest } from '../models/service-request';

@Injectable({ providedIn: 'root' })
export class RequestService {
  private api = `${environment.apiUrl}/service-requests`;

  constructor(private http: HttpClient) {}

  getMyRequests(): Observable<ServiceRequest[]> {
    return this.http.get<ServiceRequest[]>(`${this.api}/my`);
  }

  getAllRequests(): Observable<ServiceRequest[]> {
    return this.http.get<ServiceRequest[]>(this.api);
  }

  getById(id: number): Observable<ServiceRequest> {
    return this.http.get<ServiceRequest>(`${this.api}/${id}`);
  }

  submitRequest(data: Partial<ServiceRequest>): Observable<ServiceRequest> {
    return this.http.post<ServiceRequest>(this.api, data);
  }

  updateStatus(id: number, status: string, staffNotes?: string): Observable<ServiceRequest> {
    return this.http.patch<ServiceRequest>(`${this.api}/${id}/status`, { status, staffNotes });
  }

  assignToStaff(requestId: number, staffId: number): Observable<ServiceRequest> {
    return this.http.patch<ServiceRequest>(`${this.api}/${requestId}/assign`, { staffId });
  }

  uploadDocument(requestId: number, file: File, docName: string): Observable<any> {
    const form = new FormData();
    form.append('file', file);
    form.append('docName', docName);
    return this.http.post(`${this.api}/${requestId}/documents`, form);
  }
}