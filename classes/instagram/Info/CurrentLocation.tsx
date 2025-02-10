import { DataType, FileData } from "../../../types/global/types.ts";

export default class CurrentLocation implements DataType {
  location: string = "Unknown";

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return <p>{`You are located at ${this.location}`}</p>;
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);
    this.location =
      jsonData.inferred_data_primary_location[0].string_map_data["City Name"]
        .value;
  }
}
