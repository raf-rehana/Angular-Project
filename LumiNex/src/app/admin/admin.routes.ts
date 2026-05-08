import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { AllRequestsComponent } from './all-requests/all-requests';
import { ClientManagementComponent } from './client-management/client-management';
import { StaffManagementComponent } from './staff-management/staff-management';
import { ServiceManagementComponent } from './service-management/service-management';
import { Revenue } from './revenue/revenue';
import { AdminPaymentsComponent } from './payments/payments';

export const ADMIN_ROUTES: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'all-requests', component: AllRequestsComponent },
  { path: 'client-management', component: ClientManagementComponent },
  { path: 'staff-management', component: StaffManagementComponent },
  { path: 'service-management', component: ServiceManagementComponent },
  { path: 'revenue', component: Revenue },
  { path: 'payments', component: AdminPaymentsComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
