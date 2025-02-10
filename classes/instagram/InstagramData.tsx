import { DataType, FileData } from "../../types/global/types.ts";
import Logs from "./Logs.tsx";
import Ads from "./Ads/Ads.tsx";
import Activity from "./Activity/Activity.tsx";
import DeviceInfo from "./Device/DeviceInfo.tsx";
import Info from "./Info/UserInfo.tsx";

// root of instagram data structure
export default class InstagramData implements DataType {
  logs: Logs = new Logs();
  ads: Ads = new Ads();
  activity: Activity = new Activity();
  device: DeviceInfo = new DeviceInfo();
  info: Info = new Info();

  // TODO: initial user sign up data
  // TODO: login/logout activity
  // TODO: posts/stories shared

  constructor(fileData?: FileData[]) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <p class="mt-8 mb-8 text-3xl">Your Instagram data</p>
        {this.logs.render()}
        <br />
        {this.ads.render()}
        <br />
        {this.activity.render()}
        <br />
        {this.device.render()}
        <br />
        {this.info.render()}
      </>
    );
  }

  parse(fileData: FileData[]) {
    for (const file of fileData) {
      // instagram only allows json files, skip non-json
      if (file.type !== "application/json") {
        console.log(`Invalid file type: ${file.type} for ${file.name}`);
        continue;
      }

      // parse json data differently depending on what it is
      switch (file.name) {
        case "ads_viewed.json": {
          this.ads.impressions.ads_viewed.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "posts_viewed.json": {
          this.ads.impressions.posts_viewed.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "videos_watched.json": {
          this.ads.impressions.videos_watched.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "advertisers_using_your_activity_or_information.json": {
          this.ads.advertisers.advertisers_using_your_data.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "other_categories_used_to_reach_you.json": {
          this.ads.advertisers.categories_used_to_reach_you.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "your_activity_off_meta_technologies.json": {
          this.logs.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "saved_posts.json": {
          this.activity.savedPosts.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "liked_posts.json": {
          this.activity.likedPosts.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "devices.json": {
          this.device.devices.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "personal_information.json": {
          this.info.personalInfo.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "profile_based_in.json": {
          this.info.currentLocation.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "locations_of_interest.json": {
          this.info.previousLocations.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        default: {
          console.log(`Unknown file: ${file.name}`);
          break;
        }
      }
    }
  }
}
