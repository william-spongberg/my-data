import { DataType, FileData } from "../../../types/global/types.ts";
import { Device } from "../../../types/instagram/types.ts";
import { convertUnixTimeToDate } from "../../../utils/utils.ts";

export default class Devices implements DataType {
  devices: Device[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <p>{`You have used ${this.devices.length} different devices`}</p>
        <p>
          {`Your most recent device was a ${
            this.devices[0].name
          }, and you last logged in on ${
            convertUnixTimeToDate(this.devices[0].timestamp)
          }`}
        </p>
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);
    this.devices = jsonData.devices_devices.map((device: any) => {
      const stringMapData = device.string_map_data;
      return {
        name: stringMapData["User Agent"].value,
        timestamp: stringMapData["Last Login"].timestamp,
      } as Device;
    });
  }
}