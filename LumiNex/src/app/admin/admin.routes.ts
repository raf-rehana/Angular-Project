import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { AllRequestsComponent } from './all-requests/all-requests';
import { ClientManagementComponent } from './client-management/client-management';
import { EmployeeManagementComponent } from './employee-management/employee-management';
import { ServiceManagementComponent } from './service-management/service-management';
import { Revenue } from './revenue/revenue';
import { AdminPaymentsComponent } from './payments/payments';
import { ThemeSettingsComponent } from './theme-settings/theme-settings';
import { SiteContentComponent } from './site-content/site-content.component';
import { RevenueReportComponent } from './revenue-report/revenue-report.component';

export const ADMIN_ROUTES: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'all-requests', component: AllRequestsComponent },
  { path: 'client-management', component: ClientManagementComponent },
  { path: 'employee-management', component: EmployeeManagementComponent },
  { path: 'service-management', component: ServiceManagementComponent },
  { path: 'revenue', component: Revenue },
  { path: 'revenue-report', component: RevenueReportComponent },
  { path: 'payments', component: AdminPaymentsComponent },
  { path: 'theme', component: ThemeSettingsComponent },
  { path: 'site-content', component: SiteContentComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
