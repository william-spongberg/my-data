import { DataType, FileData } from "../../types/global/types.ts";
import { TikTokHistory } from "../../types/tiktok/types.ts";
import LineChart from "../../islands/LineChart.tsx";

export default class BrowsingHistory implements DataType {
  history: TikTokHistory[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <p>Browsing History</p>
        <p class="text-sm italic">
          {`You have watched ${this.history.length} TikToks`}
        </p>
        <LineChart
          id="History"
          datasets={[{
            label: "History",
            data: this.history,
            color: "rgba(75, 192, 192, 1)",
          }]}
        />
      </>
    );
  }

  parse(fileData: FileData) {
    const entries = fileData.text.split("\n\n");

    for (const entry of entries) {
      const lines = entry.split("\n");
      const dateLine = lines.find((line) => line.startsWith("Date:"));
      const linkLine = lines.find((line) => line.startsWith("Link:"));

      if (dateLine && linkLine) {
        const date = dateLine.replace("Date: ", "").trim();
        const link = linkLine.replace("Link: ", "").trim();

        // not unix time, so divide by 1000
        const timestamp = new Date(date).getTime() / 1000;

        this.history.push({ link, timestamp });
      }
    }
  }
}
