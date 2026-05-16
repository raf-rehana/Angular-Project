import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin, of } from 'rxjs';
import { switchMap, tap, map, catchError } from 'rxjs/operators';
import { Notification } from '../models/notification';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private api = 'http://127.0.0.1:3000/notifications';
  private unreadCount = new BehaviorSubject<number>(0);
  unreadCount$ = this.unreadCount.asObservable();

  constructor(private http: HttpClient) {}

  // Fetches by both number and string userId to handle DB inconsistencies
  getAll(userId: string | number): Observable<Notification[]> {
    const numId = Number(userId);
    const strId = String(userId);
    const byNumber$ = this.http.get<Notification[]>(`${this.api}?userId=${numId}`).pipe(catchError(() => of([])));
    const byString$ = this.http.get<Notification[]>(`${this.api}?userId=${strId}`).pipe(catchError(() => of([])));

    return forkJoin([byNumber$, byString$]).pipe(
      map(([byNum, byStr]) => {
        // Merge and deduplicate by id
        const merged = [...byNum];
        for (const n of byStr) {
          if (!merged.find(x => x.id === n.id)) merged.push(n);
        }
        return merged;
      }),
      tap(n => this.unreadCount.next(n.filter(x => !x.isRead).length))
    );
  }

  markRead(id: string | number): Observable<Notification> {
    return this.http.patch<Notification>(`${this.api}/${id}`, { isRead: true });
  }

  markAllRead(userId: string | number): Observable<any> {
    return this.getAll(userId).pipe(
      switchMap(notifications => {
        const unread = notifications.filter(n => !n.isRead);
        const requests = unread.map(n => this.markRead(n.id));
        return requests.length ? forkJoin(requests) : of([]);
      })
    );
  }

  create(notification: Partial<Notification>): Observable<Notification> {
    return this.http.post<Notification>(this.api, {
      ...notification,
      userId: Number(notification.userId), // Always store as number
      isRead: false,
      createdAt: new Date().toISOString()
    });
  }
}

