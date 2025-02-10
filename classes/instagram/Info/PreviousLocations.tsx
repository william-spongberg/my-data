import { DataType, FileData } from "../../../types/global/types.ts";

export default class PreviousLocations implements DataType {
  locations: string[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return <p>{`Locations of interest: ${this.locations.join(", ")}`}</p>;
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);
    this.locations = jsonData.label_values[0].vec.map((location: any) => {
      return location.value;
    });
  }
}
