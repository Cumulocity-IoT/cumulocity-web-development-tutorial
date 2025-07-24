import { Component, OnDestroy, OnInit, WritableSignal } from '@angular/core';
import { DeviceDetails, TemperatureMeasuerement } from './device-info.model';
import { DeviceInfoService } from './device-info.service';
import { CoreModule, MeasurementRealtimeService } from '@c8y/ngx-components';

@Component({
  selector: 'c8y-device-info',
  templateUrl: 'device-info.component.html',
  imports: [CoreModule],
  providers: [DeviceInfoService, MeasurementRealtimeService],
})
export class DeviceInfoComponent implements OnInit, OnDestroy {
  private readonly DEVICE_ID = '{{deviceId}}';

  tempteratureMeasurement!: WritableSignal<TemperatureMeasuerement | undefined>;

  deviceDetails!: DeviceDetails | undefined;

  constructor(private deviceInfoService: DeviceInfoService) {}

  ngOnInit() {
    this.initDeviceDetails();
    this.subscribeForTemperatureMeasurements();
  }

  ngOnDestroy(): void {
    this.unsubscribeForTemperatureMeasurements();
  }

  private async initDeviceDetails() {
    this.deviceDetails = await this.deviceInfoService.getDeviceDetails(
      this.DEVICE_ID
    );
  }

  private subscribeForTemperatureMeasurements() {
    this.tempteratureMeasurement =
      this.deviceInfoService.subscribeForTemperatureMeasurements(
        this.DEVICE_ID
      );
  }

  private unsubscribeForTemperatureMeasurements() {
    this.deviceInfoService.unscubscribeFromTemperatureMeasurements();
  }
}
