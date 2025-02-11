import Devices from "./Devices.tsx";
import { RenderType } from "../../../global/types.ts";
import * as Text from "../../../components/Text.tsx";

export default class DeviceInfo implements RenderType {
  devices: Devices = new Devices();

  render() {
    return (
      <>
        <Text.SubHeading>
          Device Information
        </Text.SubHeading>
        {this.devices.render()}
      </>
    );
  }
}
