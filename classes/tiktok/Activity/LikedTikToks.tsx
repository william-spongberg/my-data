import { DataType, FileData, Log } from "../../../global/types.ts";
import LineChart from "../../../islands/LineChart.tsx";
import { convertDateToUnixTime, randColour } from "../../../global/utils.ts";
import * as Text from "../../../components/Text.tsx";

export default class LikedTikToks implements DataType {
  liked: Log[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <Text.SubHeading>Liked TikToks</Text.SubHeading>
        <Text.Small>
          {`You have liked ${this.liked.length} TikToks`}
        </Text.Small>
        <LineChart
          id="LikedTiktoks"
          datasets={[{
            label: "History",
            data: this.liked,
            color: randColour(),
          }]}
        />
      </>
    );
  }

    parse(fileData: FileData) {
      const jsonData = JSON.parse(fileData.text).Activity["Like List"].ItemFavoriteList;
  
      this.liked = jsonData.map((
        log: any,
      ) => {
        return {
          data: log.link,
          timestamp: convertDateToUnixTime(log.date),
        } as Log;
      }).reverse();
    }
}
