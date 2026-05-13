import { Routes } from '@angular/router';
import { AdminDashboard } from './dashboard/dashboard';
import { AllRequestsComponent } from './all-requests/all-requests';
import { ClientManagementComponent } from './client-management/client-management';
import { EmployeeManagementComponent } from './employee-management/employee-management';
import { ServiceManagementComponent } from './service-management/service-management';
import { Revenue } from './revenue/revenue';
import { AdminPaymentsComponent } from './payments/payments';
import { ThemeSettingsComponent } from './theme-settings/theme-settings';
import { SiteContentComponent } from './site-content/site-content.component';
import { RevenueReportComponent } from './revenue-report/revenue-report.component';
import { PackageBuilderComponent } from './package-builder/package-builder';
import { AdminAuditLogsComponent } from './audit-logs/audit-logs';
import { AdminKnowledgeBaseComponent } from './knowledge-base/knowledge-base';
import { AdminAnalyticsComponent } from './analytics/analytics';
import { AdminSettingsComponent } from './settings/settings';

export const ADMIN_ROUTES: Routes = [
  { path: 'dashboard', component: AdminDashboard },
  { path: 'all-requests', component: AllRequestsComponent },
  { path: 'client-management', component: ClientManagementComponent },
  { path: 'employee-management', component: EmployeeManagementComponent },
  { path: 'service-management', component: ServiceManagementComponent },
  { path: 'package-builder', component: PackageBuilderComponent },
  { path: 'revenue', component: Revenue },
  { path: 'revenue-report', component: RevenueReportComponent },
  { path: 'payments', component: AdminPaymentsComponent },
  { path: 'theme', component: ThemeSettingsComponent },
  { path: 'site-content', component: SiteContentComponent },
  { path: 'audit-logs', component: AdminAuditLogsComponent },
  { path: 'knowledge-base', component: AdminKnowledgeBaseComponent },
  { path: 'analytics', component: AdminAnalyticsComponent },
  { path: 'settings', component: AdminSettingsComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

