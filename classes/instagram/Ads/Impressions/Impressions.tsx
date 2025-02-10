import { DataType, FileData } from "../../../../types/global/types.ts";
import { Impression } from "../../../../types/instagram/types.ts";
import LineChart from "../../../../islands/LineChart.tsx";
import { randColour } from "../../../../utils/utils.ts";

export default class Impressions implements DataType {
  impressions: Impression[] = [];
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
        <p>
          No {(this.title).toLowerCase()} found.
        </p>
      );
    }
    return (
      <>
        <p>{this.title}</p>
        <p class="text-sm italic">
          {`You have seen ${this.impressions.length} impressions`}
        </p>
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
        author: stringMapData.Author?.value || "Unknown",
        timestamp: stringMapData.Time?.timestamp || "Unknown",
      } as Impression;
    });
  }
}
