import { DataType, FileData } from "../../../../types/global/types.ts";
import { Impression } from "../../../../types/instagram/types.ts";
import LineChart from "../../../../islands/LineChart.tsx";

export default abstract class AbstractImpressions implements DataType {
  impressions: Impression[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.impressions.length === 0) {
      return <p></p>;
    }
    return (
      <>
        <p>Impressions</p>
        {`You have seen ${this.impressions.length} impressions`}
        <LineChart
          id="Impressions"
          datasets={[{
            label: "Impressions",
            data: this.impressions,
            color: "rgba(75, 192, 192, 1)",
          }]}
        />
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.impressions = jsonData.impressions.map((
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