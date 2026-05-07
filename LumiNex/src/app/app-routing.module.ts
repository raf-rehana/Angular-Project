import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role-guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: 'client',
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'CLIENT' },
    loadChildren: () => import('./client/client-module').then(m => m.ClientModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'ADMIN' },
    loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
  },
  {
    path: 'staff',
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'STAFF' },
    loadChildren: () => import('./staff/staff-module').then(m => m.StaffModule)
  },
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}