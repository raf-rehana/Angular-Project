import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {}

  getUsers(role?: string): Observable<User[]> {
    const url = role ? `${this.apiUrl}/users?role=${role}` : `${this.apiUrl}/users`;
    return this.http.get<User[]>(url);
  }

  addUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  updateUser(id: string, user: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }

  addService(service: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/services`, service);
  }

  deleteService(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/services/${id}`);
  }

  updateService(id: string | number, service: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/services/${id}`, service);
  }
}
