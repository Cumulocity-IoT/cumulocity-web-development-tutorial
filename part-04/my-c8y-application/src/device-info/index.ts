import {
  gettext,
  hookWidget,
  MeasurementRealtimeService,
} from '@c8y/ngx-components';
import { DeviceInfoComponent } from './device-info.component';
import {
  exportConfigWithDevice,
  importConfigWithDevice,
} from '@c8y/ngx-components/widgets/import-export-config';
import {
  hookWidgetConfig,
  WidgetAssetSelectorComponent,
} from '@c8y/ngx-components/context-dashboard';

export const deviceInfoViewProviders = [
  MeasurementRealtimeService,
  hookWidget({
    id: 'device-info.widget',
    label: 'Device Info Widget',
    description: 'This is a sample widget',
    component: DeviceInfoComponent,
    data: {
      export: exportConfigWithDevice,
      import: importConfigWithDevice,
      settings: {
        noNewWidgets: false,
        widgetDefaults: {
          _width: 8,
          _height: 4,
        },
      },
    },
  }),
  hookWidgetConfig({
    widgetId: 'device-info.widget',
    label: gettext('Device'),
    loadComponent: () => Promise.resolve(WidgetAssetSelectorComponent),
    priority: 100,
  }),
];
