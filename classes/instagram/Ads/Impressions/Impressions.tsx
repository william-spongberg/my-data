import { DataType, FileData, Log } from "../../../../global/types.ts";
import LineChart from "../../../../islands/LineChart.tsx";
import { randColour } from "../../../../global/utils.ts";
import * as Text from "../../../../components/Text.tsx";

export default class Impressions implements DataType {
  impressions: Log[] = [];
  title: string = "Impressions";
  section: string = "impressions";

  constructor(fileData?: FileData, title?: string, section?: any) {
    if (fileData) {
      this.parse(fileData);
    }
    if (title) {
      this.title = title;
    }
    if (section) {
      this.section = section;
    }
  }

  render() {
    if (this.impressions.length === 0) {
      return (
        <Text.Small>
          No {this.title.toLowerCase()} found.
        </Text.Small>
      );
    }
    return (
      <>
        <Text.SubHeading>{this.title}</Text.SubHeading>
        <Text.Small>
          {`You have seen ${this.impressions.length} impressions`}
        </Text.Small>
        <LineChart
          id={this.title}
          datasets={[{
            label: this.title,
            data: this.impressions,
            color: randColour(),
          }]}
        />
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text)[this.section];
    this.impressions = jsonData.map((
      impression: any,
    ) => {
      const stringMapData = impression.string_map_data;
      return {
        data: stringMapData.Author?.value || "Unknown",
        timestamp: stringMapData.Time?.timestamp || "Unknown",
      } as Log;
    });
  }
}
