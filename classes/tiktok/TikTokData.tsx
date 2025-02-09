import { DataType, FileData, RenderType } from "../../types/global/types.ts";
import BrowsingHistory from "./BrowsingHistory.tsx";
import Activity from "./Activity.tsx";

export default class TikTokData implements DataType {
  activity: Activity = new Activity();

  constructor(fileData?: FileData[]) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <p class="mt-4 mb-4 text-3xl">Your Instagram data</p>
        {this.activity.render()}
        <br />
      </>
    );
  }

  parse(fileData: FileData[]) {
    for (const file of fileData) {
      if (file.type !== "text/plain") {
        console.log("Invalid file type");
        continue;
      }

      switch (file.name) {
        case "Browsing History.txt":
          this.activity.history = new BrowsingHistory(file);
          break;
        default:
          console.log(`Unknown file: ${file.name}`);
      }
    }
  }
}
