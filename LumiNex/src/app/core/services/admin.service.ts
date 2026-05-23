import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(role?: string): Observable<User[]> {
    const url = role ? `${this.apiUrl}/users?role=${role}` : `${this.apiUrl}/users`;
    return this.http.get<User[]>(url);
  }

  addUser(user: Partial<User>): Observable<User> {
    return new Observable<User>(subscriber => {
      this.getUsers().subscribe(users => {
        const numericIds = users
          .map(u => typeof u.id === 'number' ? u.id : parseInt(u.id))
          .filter(id => !isNaN(id));
        const maxId = numericIds.length > 0 ? Math.max(...numericIds) : 10000;
        const nextId = maxId + 1;
        
        const userWithId = { ...user, id: nextId };
        this.http.post<User>(`${this.apiUrl}/users`, userWithId).subscribe({
          next: (res) => {
            subscriber.next(res);
            subscriber.complete();
          },
          error: (err) => subscriber.error(err)
        });
      });
    });
  }

  updateUser(id: string | number, user: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${id}`, user);
  }

  deleteUser(id: string | number): Observable<void> {
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

  getService(id: string | number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/services/${id}`);
  }
}
