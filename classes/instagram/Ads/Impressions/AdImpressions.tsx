import { FileData } from "../../../../types/global/types.ts";
import AbstractImpressions from "./AbstractImpressions.tsx";
import LineChart from "../../../../islands/LineChart.tsx";
import { Impression } from "../../../../types/instagram/types.ts";
import { randColour } from "../../../../utils/utils.ts";

export default class AdImpressions extends AbstractImpressions {
  override render() {
    if (this.impressions.length === 0) {
      return <p>
        No ad impressions found.
      </p>;
    }
    return (
      <>
        <p>Ad Impressions</p>
        <p class="text-sm italic">
          {`You have seen ${this.impressions.length} ads`}
        </p>
        <LineChart
          id="AdImpressions"
          datasets={[{
            label: "Ad Impressions",
            data: this.impressions,
            color: randColour(),
          }]}
        />
      </>
    );
  }

  override parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.impressions = jsonData.impressions_history_ads_seen.map((
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
