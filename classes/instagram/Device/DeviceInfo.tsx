import Devices from "./Devices.tsx";
import { RenderType } from "../../../types/global/types.ts";

// TODO: merge this file with Devices.tsx??

export default class DeviceInfo implements RenderType {
  devices: Devices = new Devices();

  render() {
    return (
      <>
        <p class="text-2xl">Device Information</p>
        {this.devices.render()}
      </>
    );
  }
}
