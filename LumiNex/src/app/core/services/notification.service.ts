import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Notification } from '../models/notification';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private api = `${environment.apiUrl}/notifications`;
  private unreadCount = new BehaviorSubject<number>(0);
  unreadCount$ = this.unreadCount.asObservable();

  constructor(private http: HttpClient) {}

  getAll(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.api).pipe(
      tap(n => this.unreadCount.next(n.filter(x => !x.isRead).length))
    );
  }

  markRead(id: number): Observable<any> {
    return this.http.patch(`${this.api}/${id}/read`, {});
  }

  markAllRead(): Observable<any> {
    return this.http.patch(`${this.api}/read-all`, {});
  }
}