import { DataType, FileData } from "../../global/types.ts";
import Activity from "./Activity/Activity.tsx";
import Comments from "./Comments/Comments.tsx";

export default class TikTokData implements DataType {
  activity?: Activity;
  comments?: Comments;

  constructor(fileData?: FileData[]) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        {this.activity?.render()}
        <br />
        {this.comments?.render()}
      </>
    );
  }

  parse(fileData: FileData[]) {
    for (const file of fileData) {
      if (file.type !== "application/json") {
        console.error(`Invalid file type: ${file.type} for ${file.name}`);
        continue;
      }

      switch (file.name) {
        case "user_data_tiktok.json": {
          if (!this.activity) {
            this.activity = new Activity(file);
          }

          if (!this.comments) {
            this.comments = new Comments(file);
          }
          
          // etc etc

          console.log(`Parsed ${file.name}`);
          break;
        }
        default:
          console.error(`Unknown file: ${file.name}`);
      }
    }
  }
}
