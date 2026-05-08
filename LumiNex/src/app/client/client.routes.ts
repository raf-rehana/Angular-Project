import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { CatalogueComponent } from './catalogue/catalogue';
import { MyRequestsComponent } from './my-requests/my-requests';
import { SubscriptionsComponent } from './subscriptions/subscriptions';
import { RequestForm } from './request-form/request-form';
import { RequestDetail } from './request-detail/request-detail';
import { Payments } from './payments/payments';
import { Profile } from './profile/profile';

export const CLIENT_ROUTES: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'my-requests', component: MyRequestsComponent },
  { path: 'request-form', component: RequestForm },
  { path: 'request-detail/:id', component: RequestDetail },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'payments', component: Payments },
  { path: 'profile', component: Profile },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
