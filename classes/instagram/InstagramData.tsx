import { DataType, FileData } from "../../types/global/types.ts";
import Logs from "./Logs.tsx";
import Ads from "./Ads/Ads.tsx";
import Activity from "./Activity/UserActivity.tsx";
import Device from "./Device/Device.tsx";
import Info from "./Info/UserInfo.tsx";
import AdImpressions from "./Ads/Impressions/AdImpressions.tsx";
import PostImpressions from "./Ads/Impressions/PostImpressions.tsx";
import VideoImpressions from "./Ads/Impressions/VideoImpressions.tsx";
import AdvertisersUsingData from "./Ads/Advertisers/AdvertisersUsingData.tsx";
import CategoriesUsedToReachYou from "./Ads/Advertisers/CategoriesUsedToReachYou.tsx";
import SavedPosts from "./Activity/SavedPosts.tsx";
import LikedPosts from "./Activity/LikedPosts.tsx";
import Devices from "./Device/Devices.tsx";
import PersonalInfo from "./Info/PersonalInfo.tsx";
import CurrentLocation from "./Info/CurrentLocation.tsx";
import PreviousLocations from "./Info/PreviousLocations.tsx";

// root of instagram data structure
export default class InstagramData implements DataType {
  logs: Logs = new Logs();
  ads: Ads = new Ads();
  activity: Activity = new Activity();
  device: Device = new Device();
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
        <p class="mt-4 mb-4 text-3xl">Your Instagram data</p>
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
        console.log("Invalid file type");
        continue;
      }

      // parse json data differently depending on what it is
      switch (file.name) {
        case "ads_viewed.json": {
          this.ads.impressions.ads_viewed = new AdImpressions(file);
          console.log("Parsed ads_viewed.json");
          break;
        }
        case "posts_viewed.json": {
          this.ads.impressions.posts_viewed = new PostImpressions(file);
          console.log("Parsed posts_viewed.json");
          break;
        }
        case "videos_watched.json": {
          this.ads.impressions.videos_watched = new VideoImpressions(
            file,
          );
          console.log("Parsed videos_watched.json");
          break;
        }
        case "advertisers_using_your_activity_or_information.json": {
          this.ads.advertisers.advertisers_using_your_data =
            new AdvertisersUsingData(file);
          console.log(
            "Parsed advertisers_using_your_activity_or_information.json",
          );
          break;
        }
        case "other_categories_used_to_reach_you.json": {
          this.ads.advertisers.categories_used_to_reach_you =
            new CategoriesUsedToReachYou(file);
          console.log("Parsed other_categories_used_to_reach_you.json");
          break;
        }
        case "your_activity_off_meta_technologies.json": {
          this.logs = new Logs(file);
          console.log("Parsed your_activity_off_meta_technologies.json");
          break;
        }
        case "saved_posts.json": {
          this.activity.savedPosts = new SavedPosts(file);
          console.log("Parsed saved_posts.json");
          break;
        }
        case "liked_posts.json": {
          this.activity.likedPosts = new LikedPosts(file);
          console.log("Parsed liked_posts.json");
          break;
        }
        case "devices.json": {
          this.device.devices = new Devices(file);
          console.log("Parsed devices.json");
          break;
        }
        case "personal_information.json": {
          this.info.personalInfo = new PersonalInfo(file);
          console.log("Parsed personal_information.json");
          break;
        }
        case "profile_based_in.json": {
          this.info.currentLocation = new CurrentLocation(file);
          console.log("Parsed profile_based_in.json");
          break;
        }
        case "locations_of_interest.json": {
          this.info.previousLocations = new PreviousLocations(file);
          console.log("Parsed locations_of_interest.json");
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