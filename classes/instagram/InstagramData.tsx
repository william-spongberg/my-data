import { DataType, FileData } from "../../global/types.ts";
import ExternalLogs from "./ExternalLogs/ExternalLogs.tsx";
import Ads from "./Ads/Ads.tsx";
import Activity from "./Activity/Activity.tsx";
import DeviceInfo from "./Device/DeviceInfo.tsx";
import Info from "./Info/UserInfo.tsx";

// root of instagram data structure
export default class InstagramData implements DataType {
  logs?: ExternalLogs;
  ads?: Ads;
  activity?: Activity;
  device?: DeviceInfo;
  info?: Info;

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
        {this.logs?.render()}
        <br />
        {this.activity?.render()}
        <br />
        {this.ads?.render()}
        <br />
        {this.device?.render()}
        <br />
        {this.info?.render()}
        <br />
      </>
    );
  }

  parse(fileData: FileData[]) {
    for (const file of fileData) {
      // instagram only allows json files, skip non-json
      if (file.type !== "application/json") {
        console.error(`Invalid file type: ${file.type} for ${file.name}`);
        continue;
      }

      // parse json data differently depending on what it is
      switch (file.name) {
        case "ads_viewed.json": {
          if (!this.ads) {
            this.ads = new Ads();
          }
          this.ads.impressions.ads_viewed.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "posts_viewed.json": {
          if (!this.ads) {
            this.ads = new Ads();
          }
          this.ads.impressions.posts_viewed.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "videos_watched.json": {
          if (!this.ads) {
            this.ads = new Ads();
          }
          this.ads.impressions.videos_watched.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "advertisers_using_your_activity_or_information.json": {
          if (!this.ads) {
            this.ads = new Ads();
          }
          this.ads.advertisers.advertisers_using_your_data.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "other_categories_used_to_reach_you.json": {
          if (!this.ads) {
            this.ads = new Ads();
          }
          this.ads.advertisers.categories_used_to_reach_you.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "your_activity_off_meta_technologies.json": {
          if (!this.logs) {
            this.logs = new ExternalLogs();
          }
          this.logs.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "saved_posts.json": {
          if (!this.activity) {
            this.activity = new Activity();
          }
          this.activity.savedPosts.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "liked_posts.json": {
          if (!this.activity) {
            this.activity = new Activity();
          }
          this.activity.likedPosts.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "devices.json": {
          if (!this.device) {
            this.device = new DeviceInfo();
          }
          this.device.devices.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "personal_information.json": {
          if (!this.info) {
            this.info = new Info();
          }
          this.info.personalInfo.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "profile_based_in.json": {
          if (!this.info) {
            this.info = new Info();
          }
          this.info.currentLocation.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        case "locations_of_interest.json": {
          if (!this.info) {
            this.info = new Info();
          }
          this.info.previousLocations.parse(file);
          console.log(`Parsed ${file.name}`);
          break;
        }
        default: {
          console.error(`Unknown file: ${file.name}`);
          break;
        }
      }
    }
  }
}
