import { DataType, FileData, Log } from "../../../global/types.ts";
import LineChart from "../../../islands/LineChart.tsx";
import { convertDateToUnixTime, randColour } from "../../../global/utils.ts";
import * as Text from "../../../components/Text.tsx";

export default class FavouriteTikToks implements DataType {
  favourited: Log[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <Text.SubHeading>Favourite TikToks</Text.SubHeading>
        <Text.Small>
          {`You have ${this.favourited.length} favourite TikToks`}
        </Text.Small>
        <LineChart
          id="FavoriteTikToks"
          datasets={[{
            label: "History",
            data: this.favourited,
            color: randColour(),
          }]}
        />
      </>
    );
  }

    parse(fileData: FileData) {
      const jsonData = JSON.parse(fileData.text).Activity["Favorite Videos"].FavoriteVideoList;
  
      this.favourited = jsonData.map((
        log: any,
      ) => {
        return {
          data: log.Link,
          timestamp: convertDateToUnixTime(log.Date),
        } as Log;
      }).reverse();
    }
}
