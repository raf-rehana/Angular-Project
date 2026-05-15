import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data['roles'] as Array<string>;
    if (!expectedRoles) return true;

    if (this.auth.isLoggedIn() && expectedRoles.some(role => this.auth.hasRole(role))) {
      return true;
    }
    
    this.router.navigate(['/']);
    return false;
  }
}
