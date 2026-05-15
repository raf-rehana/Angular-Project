import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Notification } from '../models/notification';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private api = 'http://127.0.0.1:3000/notifications';
  private unreadCount = new BehaviorSubject<number>(0);
  unreadCount$ = this.unreadCount.asObservable();

  constructor(private http: HttpClient) {}

  getAll(userId: string | number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.api}?userId=${userId}`).pipe(
      tap(n => this.unreadCount.next(n.filter(x => !x.isRead).length))
    );
  }

  markRead(id: string | number): Observable<Notification> {
    return this.http.patch<Notification>(`${this.api}/${id}`, { isRead: true });
  }

  markAllRead(userId: string | number): Observable<any> {
    return this.http.get<Notification[]>(`${this.api}?userId=${userId}&isRead=false`).pipe(
      switchMap(notifications => {
        const requests = notifications.map(n => this.markRead(n.id));
        return requests.length ? forkJoin(requests) : forkJoin([new Observable(s => s.complete())]);
      })
    );
  }

  create(notification: Partial<Notification>): Observable<Notification> {
    return this.http.post<Notification>(this.api, {
      ...notification,
      isRead: false,
      createdAt: new Date().toISOString()
    });
  }
}
