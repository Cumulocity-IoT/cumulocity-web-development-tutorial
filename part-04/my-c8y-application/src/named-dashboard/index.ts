import { hookNavigator } from '@c8y/ngx-components';
import { NamedDashboardNavigationFactory } from './named-dashboard.factory';
import { RouterModule, Routes } from '@angular/router';
import { NamedDashboardComponent } from './named-dashboard.component';
import { importProvidersFrom } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'named-dashboard',
    pathMatch: 'full',
  },
  {
    path: 'named-dashboard',
    component: NamedDashboardComponent,
  },
];

export const namedDashboardProviders = [
  importProvidersFrom(RouterModule.forChild(routes)),
  hookNavigator(NamedDashboardNavigationFactory),
];
