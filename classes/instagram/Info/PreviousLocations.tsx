import { DataType, FileData } from "../../../types/global/types.ts";
import * as Text from "../../../components/Text.tsx";

export default class PreviousLocations implements DataType {
  locations: string[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <Text.SubHeading>
          Previous Locations
        </Text.SubHeading>
        <Text.Small>
          {`${this.locations.join(", ")}`}
        </Text.Small>
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);
    this.locations = jsonData.label_values[0].vec.map((location: any) => {
      return location.value;
    });
  }
}
