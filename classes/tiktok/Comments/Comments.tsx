import { DataType, FileData, Log } from "../../../global/types.ts";
import { convertDateToUnixTime, randColour } from "../../../global/utils.ts";
import * as Text from "../../../components/Text.tsx";
import LineChart from "../../../islands/LineChart.tsx";

export default class Comments implements DataType {
  comments: Log[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <Text.Heading>Comments</Text.Heading>
        <Text.Small>
          {`You have made ${this.comments.length} comments`}
        </Text.Small>
        <LineChart
          id="Comments"
          datasets={[{
            label: "Comments",
            data: this.comments,
            color: randColour(),
          }]}
        />
      </>
    );
  }

  parse(fileData: FileData): void {
    const jsonData = JSON.parse(fileData.text).Comment.Comments.CommentsList;
  
      this.comments = jsonData.map((
        log: any,
      ) => {
        return {
          data: log.comment,
          timestamp: convertDateToUnixTime(log.date),
        } as Log;
      }).reverse();
    }
}