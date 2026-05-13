import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ContactComponent } from './pages/contact/contact';
import { PackagesComponent } from './pages/packages/packages';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'packages', component: PackagesComponent },
  { path: '', loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES) },
  { path: 'client', loadChildren: () => import('./client/client.routes').then(m => m.CLIENT_ROUTES) },
  { path: 'admin', loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES) },
  { path: 'employee', loadChildren: () => import('./employee/employee.routes').then(m => m.EMPLOYEE_ROUTES) },
  { path: '**', redirectTo: '' }
];