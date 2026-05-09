import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private api = 'http://127.0.0.1:3000/users';

  constructor(private http: HttpClient) {}

  getEmployeeMembers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}?role=EMPLOYEE`);
  }
}
