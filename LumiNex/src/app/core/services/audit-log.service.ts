import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface AuditLog {
  id?: string;
  timestamp: string;
  userId: string;
  userName: string;
  userRole: string;
  action: string;
  details: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuditLogService {
  private apiUrl = 'http://localhost:3000/auditLogs';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getLogs(): Observable<AuditLog[]> {
    return this.http.get<AuditLog[]>(`${this.apiUrl}?_sort=timestamp&_order=desc`);
  }

  logAction(action: string, details: string): void {
    const user = this.authService.currentUser;
    if (!user) return;

    const log: AuditLog = {
      timestamp: new Date().toISOString(),
      userId: user.id,
      userName: user.name,
      userRole: user.role,
      action,
      details
    };

    this.http.post<AuditLog>(this.apiUrl, log).subscribe({
      error: (err) => console.error('Failed to save audit log', err)
    });
  }
}
