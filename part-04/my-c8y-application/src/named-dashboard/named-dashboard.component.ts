import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoreModule } from '@c8y/ngx-components';
import { ContextDashboardModule } from '@c8y/ngx-components/context-dashboard';

@Component({
  selector: 'named-dashboard-component',
  templateUrl: './named-dashboard.component.html',
  imports: [ContextDashboardModule, CommonModule, CoreModule],
})
export class NamedDashboardComponent {}
