import { IManagedObject } from '@c8y/client';

export interface DeviceDetails {
  name: string;
  type: string;
}

export interface TemperatureMeasuerement {
  value: number;
  unit: string;
}

export type DeviceInfoWidgetConfig = { device?: IManagedObject };
