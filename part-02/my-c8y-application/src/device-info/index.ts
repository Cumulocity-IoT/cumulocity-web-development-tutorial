import { hookNavigator, hookRoute } from '@c8y/ngx-components';
import { DeviceInfoNavigationFactory } from './device-info.factory';
import { DeviceInfoComponent } from './device-info.component';

export const deviceInfoViewProviders = [
  hookRoute({
    path: 'device-info',
    component: DeviceInfoComponent,
  }),
  hookNavigator(DeviceInfoNavigationFactory),
];
