import { DataType, FileData } from "../../../types/global/types.ts";
import * as Text from "../../../components/Text.tsx";

export default class CurrentLocation implements DataType {
  location: string = "Unknown";

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <Text.Paragraph>
        {`You are currently located at ${this.location}.`}
      </Text.Paragraph>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);
    this.location =
      jsonData.inferred_data_primary_location[0].string_map_data["City Name"]
        .value;
  }
}
