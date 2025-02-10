import { FileData } from "../../../../types/global/types.ts";
import AbstractImpressions from "./AbstractImpressions.tsx";
import LineChart from "../../../../islands/LineChart.tsx";
import { Impression } from "../../../../types/instagram/types.ts";

export default class VideoImpressions extends AbstractImpressions {
  override render() {
    if (this.impressions.length === 0) {
      return <p></p>;
    }
    return (
      <>
        <p>Video Impressions</p>
        <p class="text-sm italic">
          {`You have seen ${this.impressions.length} videos`}
        </p>
        <LineChart
          id="VideoImpressions"
          datasets={[{
            label: "Video Impressions",
            data: this.impressions,
            color: "rgba(75, 192, 192, 1)",
          }]}
        />
      </>
    );
  }

  override parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.impressions = jsonData.impressions_history_videos_watched.map((
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
