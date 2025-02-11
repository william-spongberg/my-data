import { DataType, FileData, Log } from "../../../global/types.ts";
import LineChart from "../../../islands/LineChart.tsx";
import { convertDateToUnixTime, randColour } from "../../../global/utils.ts";
import * as Text from "../../../components/Text.tsx";

export default class WatchHistory implements DataType {
  history: Log[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <Text.SubHeading>Watch History</Text.SubHeading>
        <Text.Small>
          {`You have watched ${this.history.length} TikToks`}
        </Text.Small>
        <LineChart
          id="WatchHistory"
          datasets={[{
            label: "WatchHistory",
            data: this.history,
            color: randColour(),
          }]}
        />
      </>
    );
  }

    parse(fileData: FileData) {
      const jsonData = JSON.parse(fileData.text).Activity["Video Browsing History"].VideoList;
  
      this.history = jsonData.map((
        log: any,
      ) => {
        return {
          data: log.Link,
          timestamp: convertDateToUnixTime(log.Date),
        } as Log;
      }).reverse();
    }
}
