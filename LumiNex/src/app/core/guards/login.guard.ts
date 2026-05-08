import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.services';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      const user = this.auth.currentUser;
      if (user?.role === 'ADMIN') this.router.navigate(['/admin/dashboard']);
      else if (user?.role === 'STAFF') this.router.navigate(['/staff/summary']);
      else this.router.navigate(['/client/dashboard']);
      return false;
    }
    return true;
  }
}
