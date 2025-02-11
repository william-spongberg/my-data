import { DataType, FileData, Log } from "../../../global/types.ts";
import { convertUnixTimeToDate } from "../../../global/utils.ts";
import * as Text from "../../../components/Text.tsx";

export default class Devices implements DataType {
  devices: Log[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.devices.length === 0) {
      return (
        <Text.Small>
          No device data found.
        </Text.Small>
      );
    }

    return (
      <>
        <Text.Small>
          {`You have logged in across ${this.devices.length} different devices.`}
        </Text.Small>
        <Text.Small>
          {`Your most recent device was a ${
            this.devices[0].data
          }, and you last logged in on ${
            convertUnixTimeToDate(this.devices[0].timestamp)
          }`}
        </Text.Small>
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);
    this.devices = jsonData.devices_devices.map((device: any) => {
      const stringMapData = device.string_map_data;
      return {
        data: stringMapData["User Agent"].value,
        timestamp: stringMapData["Last Login"].timestamp,
      } as Log;
    });
  }
}
