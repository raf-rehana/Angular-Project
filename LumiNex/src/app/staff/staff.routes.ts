import { Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary';
import { MyTasksComponent } from './my-tasks/my-tasks';
import { TaskDetail } from './task-detail/task-detail';

export const STAFF_ROUTES: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'my-tasks', component: MyTasksComponent },
  { path: 'task-detail/:id', component: TaskDetail },
  { path: '', redirectTo: 'summary', pathMatch: 'full' }
];
