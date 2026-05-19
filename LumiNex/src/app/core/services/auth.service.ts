import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap, map, switchMap } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  checkEmail(email: string): Observable<boolean> {
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}`).pipe(
      map(users => users && users.length > 0)
    );
  }

  constructor(private http: HttpClient, private router: Router) {
    const stored = localStorage.getItem('user');
    if (stored) {
      const user = JSON.parse(stored);
      this.currentUserSubject.next(user);
      
      // Verification: Fetch fresh data from backend to sync with db.json
      this.http.get<User>(`${this.apiUrl}/users/${user.id}`).subscribe({
        next: (freshUser) => {
          localStorage.setItem('user', JSON.stringify(freshUser));
          this.currentUserSubject.next(freshUser);
        },
        error: () => {
          // If user was deleted from db.json but exists in localStorage, clear it
          this.logout();
        }
      });
    }
  }

  login(email: string, password: string): Observable<any> {
    // For mock server, we fetch the user by email and password
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users && users.length > 0) {
          const user = users[0];
          const token = 'mock-jwt-token-' + user.id;
          return { user, token };
        }
        throw new Error('Invalid credentials');
      }),
      tap((res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.currentUserSubject.next(res.user);
      })
    );
  }

  register(data: any): Observable<any> {
    return this.getAllUsers().pipe(
      switchMap(users => {
        const numericIds = users
          .map(u => typeof u.id === 'number' ? u.id : parseInt(u.id))
          .filter(id => !isNaN(id));
        const maxId = numericIds.length > 0 ? Math.max(...numericIds) : 10000;
        const nextId = maxId + 1;

        const newUser = { ...data, role: 'CLIENT', id: nextId };
        return this.http.post<User>(`${this.apiUrl}/users`, newUser);
      }),
      map(user => {
        const token = 'mock-jwt-token-' + user.id;
        return { user, token };
      }),
      tap((res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.currentUserSubject.next(res.user);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  hasRole(role: string): boolean {
    if (!this.currentUser) return false;
    // SUPER_ADMIN has access to everything
    if (this.currentUser.role === 'SUPER_ADMIN') return true;
    return this.currentUser.role === role;
  }

  get isSuperAdmin(): boolean {
    return this.currentUser?.role === 'SUPER_ADMIN';
  }

  get isAdmin(): boolean {
    return this.currentUser?.role === 'ADMIN';
  }

  get isEmployee(): boolean {
    return this.currentUser?.role === 'EMPLOYEE';
  }

  get isClient(): boolean {
    return this.currentUser?.role === 'CLIENT';
  }

  updateProfile(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user).pipe(
      tap(updatedUser => {
        // Only update local storage if the updated user is the current user
        if (this.currentUser?.id === updatedUser.id) {
          localStorage.setItem('user', JSON.stringify(updatedUser));
          this.currentUserSubject.next(updatedUser);
        }
      })
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

    deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser$.pipe(
      tap(user => {
        // If no user is available yet, try to get from storage
        if (!user) {
          const stored = localStorage.getItem('user');
          if (stored) {
            this.currentUserSubject.next(JSON.parse(stored));
          }
        }
      })
    );
  }
}
