// class for instagram data structure
// allows instantiating with data + methods
// got annoyed by all the methods being in weird places

// TODO: break up classes into seperate files

import {
  AvertiserInfo,
  Category,
  Device,
  EventType,
  Impression,
  Log,
  LogEvent,
  Post,
} from "./types.ts";
import { DataType, FileData, RenderType } from "../types.ts";
import { convertUnixTimeToDate, randColour } from "../utils.ts";
import LineChartIsland from "../../islands/LineChart.tsx";
import BarChartIsland from "../../islands/BarChart.tsx";

// TODO: only print out titles for data that has been given

// root of instagram data structure
export class InstagramData implements DataType {
  activities: Logs = new Logs();
  adsInfo: AdsInformation = new AdsInformation();
  userActivity: UserActivity = new UserActivity();
  deviceInfo: DeviceInfo = new DeviceInfo();
  userInfo: UserInfo = new UserInfo();

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
        {this.activities.render()}
        <br />
        {this.adsInfo.render()}
        <br />
        {this.userActivity.render()}
        <br />
        {this.deviceInfo.render()}
        <br />
        {this.userInfo.render()}
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
          this.adsInfo.ads_and_topics.ads_viewed = new AdImpressions(file);
          console.log("Parsed ads_viewed.json");
          break;
        }
        case "posts_viewed.json": {
          this.adsInfo.ads_and_topics.posts_viewed = new PostImpressions(file);
          console.log("Parsed posts_viewed.json");
          break;
        }
        case "videos_watched.json": {
          this.adsInfo.ads_and_topics.videos_watched = new VideoImpressions(
            file,
          );
          console.log("Parsed videos_watched.json");
          break;
        }
        case "advertisers_using_your_activity_or_information.json": {
          this.adsInfo.instagram_ads.advertisers_using_your_data =
            new AdvertisersUsingData(file);
          console.log(
            "Parsed advertisers_using_your_activity_or_information.json",
          );
          break;
        }
        case "other_categories_used_to_reach_you.json": {
          this.adsInfo.instagram_ads.categories_used_to_reach_you =
            new CategoriesUsedToReachYou(file);
          console.log("Parsed other_categories_used_to_reach_you.json");
          break;
        }
        case "your_activity_off_meta_technologies.json": {
          this.activities = new Logs(file);
          console.log("Parsed your_activity_off_meta_technologies.json");
          break;
        }
        case "saved_posts.json": {
          this.userActivity.savedPosts = new SavedPosts(file);
          console.log("Parsed saved_posts.json");
          break;
        }
        case "liked_posts.json": {
          this.userActivity.likedPosts = new LikedPosts(file);
          console.log("Parsed liked_posts.json");
          break;
        }
        case "devices.json": {
          this.deviceInfo.devices = new Devices(file);
          console.log("Parsed devices.json");
          break;
        }
        case "personal_information.json": {
          this.userInfo.personalInfo = new PersonalInfo(file);
          console.log("Parsed personal_information.json");
          break;
        }
        case "profile_based_in.json": {
          this.userInfo.yourLocation = new Location(file);
          console.log("Parsed profile_based_in.json");
          break;
        }
        case "locations_of_interest.json": {
          this.userInfo.locationsOfInterest = new LocationsOfInterest(file);
          console.log("Parsed locations_of_interest.json");
          break;
        }
        default: {
          console.log("Invalid file name:", file.name);
          break;
        }
      }
    }
  }
}

export class Logs implements DataType {
  activities: Log[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.activities.length === 0) {
      return (
        <p>
        </p>
      );
    }

    return (
      <>
        <p class="text-2xl">Your actions outside Instagram</p>
        <p>
          {`Your actions were tracked across ${this.activities.length} different apps and websites.`}
        </p>
        <p>{`A total of ${this.getNumEvents()} logs were made.`}</p>

        <BarChartIsland
          id="ActivitiesBar"
          datasets={Array.from(this.getEventTypeAnalytics()).map(
            ([event, count]: [EventType, number]) => ({
              label: event,
              data: [count],
              color: randColour(),
            }),
          )}
        />
        <BarChartIsland
          id="ActivityLogsBar"
          datasets={this.activities.map((activity) => ({
            label: activity.name,
            data: [activity.events.length],
            color: `rgba(${Math.floor(Math.random() * 255)}, ${
              Math.floor(Math.random() * 255)
            }, ${Math.floor(Math.random() * 255)}, 1)`,
          }))}
        />
        <LineChartIsland
          id="ActivitiesChart"
          datasets={Array.from(this.getEventTypeAnalytics()).map(
            ([event, _count]: [EventType, number]) => ({
              label: event,
              data: this.activities
                .flatMap((activity) =>
                  activity.events.filter((e) => e.type === event)
                )
                .map((e) => ({
                  timestamp: e.timestamp,
                }))
                .sort((a, b) => a.timestamp - b.timestamp),
              color: randColour(),
            }),
          )}
        />
      </>
    );
  }

  parse(fileData: FileData) {
    // convert to JSON
    const jsonData = JSON.parse(fileData.text);

    // convert JSON to useable activity objects
    this.activities = jsonData.apps_and_websites_off_meta_activity
      .map((activity: Log) => {
        return {
          name: activity.name,
          events: activity.events.map((event: LogEvent) => ({
            timestamp: event.timestamp,
            type: event.type,
          })) as LogEvent[],
        } as Log;
      });
  }

  getNumEvents(): number {
    return this.activities?.reduce(
      (acc, activity) => acc + activity.events.length,
      0,
    );
  }

  getEventTypeAnalytics(): Map<EventType, number> {
    const typeAnalytics = new Map<EventType, number>();

    this.activities.forEach((activity) => {
      activity.events.forEach((event) => {
        const type = event.type as EventType;
        if (typeAnalytics.has(type)) {
          typeAnalytics.set(type, (typeAnalytics.get(type) || 0) + 1);
        } else {
          typeAnalytics.set(type, 1);
        }
      });
    });

    return typeAnalytics;
  }

  getStringifiedActivities(): string[] {
    return this.activities.map((activity) => activity.name);
  }
}

export class AdsInformation implements RenderType {
  ads_and_topics: AdsAndTopics = new AdsAndTopics();
  instagram_ads: InstagramAds = new InstagramAds();

  render() {
    return (
      <>
        <p class="text-2xl">Ad Information</p>
        {this.ads_and_topics.render()}
        <br />
        {this.instagram_ads.render()}
      </>
    );
  }
}

export class AdsAndTopics implements RenderType {
  ads_viewed: AdImpressions = new AdImpressions();
  posts_viewed: PostImpressions = new PostImpressions();
  videos_watched: VideoImpressions = new VideoImpressions();

  render() {
    return (
      <>
        <p class="text-xl">Ads and Topics</p>
        {this.ads_viewed?.render()}
        <br />
        {this.posts_viewed?.render()}
        <br />
        {this.videos_watched?.render()}
      </>
    );
  }

  // for later if needed
  //posts_not_interested: PostsNotInterested;
  //profiles_not_interested: ProfilesNotInterested;
  //suggested_profiles: SuggestedProfiles;
}

export class InstagramAds implements RenderType {
  advertisers_using_your_data: AdvertisersUsingData =
    new AdvertisersUsingData();
  categories_used_to_reach_you: CategoriesUsedToReachYou =
    new CategoriesUsedToReachYou();

  render() {
    return (
      <>
        <p class="text-xl">Instagram Ads</p>
        <br />
        {this.advertisers_using_your_data?.render()}
        <br />
        {this.categories_used_to_reach_you?.render()}
      </>
    );
  }

  // for later if needed
  //ads_about_meta: AdsAboutMeta;
}

export class AdvertisersUsingData implements DataType {
  advertisers: AvertiserInfo[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.advertisers.length === 0) {
      return <p></p>;
    }

    return (
      <>
        <p>Advertisers using your data</p>
        <p class="text-sm italic">
          {`Your data has been sold to ${this.advertisers.length} advertisers`}
        </p>
        <p class="text-sm italic">
          {`Advertisers with data files on you: ${
            this.advertisers.filter((advertiser) =>
              advertiser.has_data_file_on_you
            ).length
          }`}
        </p>
        <p class="text-sm italic">
          {`Advertisers with remarketing just for you: ${
            this.advertisers.filter((advertiser) => advertiser.has_remarketing)
              .length
          }`}
        </p>
        <p class="text-sm italic">
          {`Advertisers with in-person store visits from you: ${
            this.advertisers.filter((advertiser) =>
              advertiser.has_in_person_store_visit
            ).length
          }`}
        </p>
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.advertisers = jsonData.ig_custom_audiences_all_types.map(
      (advertiser: any) => {
        return {
          name: advertiser.advertiser_name,
          has_data_file_on_you: advertiser.has_data_file_custom_audience,
          has_remarketing: advertiser.has_remarketing_custom_audience,
          has_in_person_store_visit: advertiser.has_in_person_store_visit,
        } as AvertiserInfo;
      },
    );
  }
}

export class CategoriesUsedToReachYou implements DataType {
  categories: Category[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.categories.length === 0) {
      return <p></p>;
    }

    return (
      <>
        <p>Categories used to reach you</p>
        <p class="text-sm italic">
          {`Your data has been used to reach you in ${this.categories.length} categories`}
        </p>
        {this.categories.map((category) => (
          <p key={category.name} class="text-sm">
            {`${category.name}`}
          </p>
        ))}
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.categories = jsonData.label_values[0].vec.map(
      (category: any) => {
        return {
          name: category.value,
        } as Category;
      },
    );
  }
}

// default data structure for impressions
export abstract class Impressions implements DataType {
  impressions: Impression[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.impressions.length === 0) {
      return <p></p>;
    }
    return (
      <>
        <p>Impressions</p>
        {`You have seen ${this.impressions.length} impressions`}
        <LineChartIsland
          id="Impressions"
          datasets={[{
            label: "Impressions",
            data: this.impressions,
            color: "rgba(75, 192, 192, 1)",
          }]}
        />
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.impressions = jsonData.impressions.map((
      impression: any,
    ) => {
      const stringMapData = impression.string_map_data;
      return {
        author: stringMapData.Author?.value || "Unknown",
        timestamp: stringMapData.Time?.timestamp || "Unknown",
      } as Impression;
    });
  }
}

export class AdImpressions extends Impressions {
  override render() {
    if (this.impressions.length === 0) {
      return <p></p>;
    }
    return (
      <>
        <p>Ad Impressions</p>
        <p class="text-sm italic">
          {`You have seen ${this.impressions.length} ads`}
        </p>
        <LineChartIsland
          id="AdImpressions"
          datasets={[{
            label: "Ad Impressions",
            data: this.impressions,
            color: "rgba(75, 192, 192, 1)",
          }]}
        />
      </>
    );
  }

  override parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.impressions = jsonData.impressions_history_ads_seen.map((
      impression: any,
    ) => {
      const stringMapData = impression.string_map_data;
      return {
        author: stringMapData.Author?.value || "Unknown",
        timestamp: stringMapData.Time?.timestamp || "Unknown",
      } as Impression;
    });
  }
}

export class VideoImpressions extends Impressions {
  override render() {
    if (this.impressions.length === 0) {
      return <p></p>;
    }
    return (
      <>
        <p>Video Impressions</p>
        <p class="text-sm italic">
          {`You have seen ${this.impressions.length} videos`}
        </p>
        <LineChartIsland
          id="VideoImpressions"
          datasets={[{
            label: "Video Impressions",
            data: this.impressions,
            color: "rgba(75, 192, 192, 1)",
          }]}
        />
      </>
    );
  }

  override parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.impressions = jsonData.impressions_history_videos_watched.map((
      impression: any,
    ) => {
      const stringMapData = impression.string_map_data;
      return {
        author: stringMapData.Author?.value || "Unknown",
        timestamp: stringMapData.Time?.timestamp || "Unknown",
      } as Impression;
    });
  }
}

export class PostImpressions extends Impressions {
  override render() {
    if (this.impressions.length === 0) {
      return <p></p>;
    }
    return (
      <>
        <p>Post Impressions</p>
        <p class="text-sm italic">
          {`You have seen ${this.impressions.length} posts`}
        </p>
        <LineChartIsland
          id="PostImpressions"
          datasets={[{
            label: "Post Impressions",
            data: this.impressions,
            color: "rgba(75, 192, 192, 1)",
          }]}
        />
      </>
    );
  }

  override parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.impressions = jsonData.impressions_history_posts_seen.map((
      impression: any,
    ) => {
      const stringMapData = impression.string_map_data;
      return {
        author: stringMapData.Author?.value || "Unknown",
        timestamp: stringMapData.Time?.timestamp || "Unknown",
      } as Impression;
    });
  }
}

export class UserActivity implements RenderType {
  likedPosts: LikedPosts = new LikedPosts();
  savedPosts: SavedPosts = new SavedPosts();

  render() {
    return (
      <>
        <p class="text-2xl">
          User Activity
        </p>
        <br />
        {this.likedPosts.render()}
        <br />
        {this.savedPosts.render()}
      </>
    );
  }
}

// TODO: make graphs using number of posts liked/saved per day over time (days)
export class LikedPosts implements DataType {
  posts: Post[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.posts.length === 0) {
      return <p></p>;
    }
    return (
      <>
        <p>Liked Posts</p>
        {`You have liked ${this.posts.length} posts between ${
          convertUnixTimeToDate(this.posts[this.posts.length - 1].timestamp)
        } and ${convertUnixTimeToDate(this.posts[0].timestamp)}`}

        <LineChartIsland
          id="LikedPosts"
          datasets={[{
            label: "Liked Posts",
            data: this.posts.reverse(),
            color: "rgba(75, 192, 192, 1)",
          }]}
        />
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.posts = jsonData.likes_media_likes.map((post: any) => {
      const stringMapData = post.string_list_data[0];
      return {
        author: post.title || "Unknown",
        href: stringMapData.href || "Unknown",
        timestamp: stringMapData.timestamp || 0,
      } as Post;
    });
  }
}

export class SavedPosts implements DataType {
  posts: Post[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.posts.length === 0) {
      return <p></p>;
    }
    return (
      <>
        <p>Saved Posts</p>
        {`You have saved ${this.posts.length} posts between ${
          convertUnixTimeToDate(this.posts[this.posts.length - 1].timestamp)
        } and ${convertUnixTimeToDate(this.posts[0].timestamp)}`}
        <LineChartIsland
          id="SavedPosts"
          datasets={[{
            label: "Saved Posts",
            data: this.posts.reverse(),
            color: "rgba(75, 192, 192, 1)",
          }]}
        />
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.posts = jsonData.saved_saved_media.map((post: any) => {
      const stringMapData = post.string_map_data["Saved on"];
      return {
        author: post.title || "Unknown",
        href: stringMapData.href || "Unknown",
        timestamp: stringMapData.timestamp || 0,
      } as Post;
    });
  }
}

export class DeviceInfo implements RenderType {
  devices: Devices = new Devices();

  render() {
    return (
      <>
        <p class="text-2xl">Device Information</p>
        {this.devices.render()}
      </>
    );
  }
}

export class Devices implements DataType {
  devices: Device[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <p>{`You have used ${this.devices.length} different devices`}</p>
        <p>
          {`Your most recent device was a ${
            this.devices[0].name
          }, and you last logged in on ${
            convertUnixTimeToDate(this.devices[0].timestamp)
          }`}
        </p>
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);
    this.devices = jsonData.devices_devices.map((device: any) => {
      const stringMapData = device.string_map_data;
      return {
        name: stringMapData["User Agent"].value,
        timestamp: stringMapData["Last Login"].timestamp,
      } as Device;
    });
  }
}

export class UserInfo implements RenderType {
  personalInfo: PersonalInfo = new PersonalInfo();
  yourLocation: Location = new Location();
  locationsOfInterest: LocationsOfInterest = new LocationsOfInterest();

  render() {
    return (
      <>
        <p class="text-2xl">Your User Info</p>
        {this.personalInfo.render()}
        <br />
        {this.yourLocation.render()}
        <br />
        {this.locationsOfInterest.render()}
      </>
    );
  }
}

export class PersonalInfo implements DataType {
  email: string = "Unknown";
  phone: string = "Unknown";
  username: string = "Unknown";
  name: string = "Unknown";
  gender: string = "Unknown";
  dob: string = "Unknown";

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <p>Your personal information</p>
        <p>{`Email: ${this.email}`}</p>
        <p>{`Phone: ${this.phone}`}</p>
        <p>{`Username: ${this.username}`}</p>
        <p>{`Name: ${this.name}`}</p>
        <p>{`Gender: ${this.gender}`}</p>
        <p>{`Date of Birth: ${this.dob}`}</p>
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    const stringMapData = jsonData.profile_user[0].string_map_data;

    this.email = stringMapData["Email"]?.value || "Unknown";
    this.phone = stringMapData["Phone Number"]?.value || "Unknown";
    this.username = stringMapData["Username"]?.value || "Unknown";
    this.name = stringMapData["Name"]?.value || "Unknown";
    this.gender = stringMapData["Gender"]?.value || "Unknown";
    this.dob = stringMapData["Date of birth"]?.value || "Unknown";
  }
}

export class Location implements DataType {
  location: string = "Unknown";

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return <p>{`You are located at ${this.location}`}</p>;
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);
    this.location =
      jsonData.inferred_data_primary_location[0].string_map_data["City Name"]
        .value;
  }
}

export class LocationsOfInterest implements DataType {
  locations: string[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return <p>{`Locations of interest: ${this.locations.join(", ")}`}</p>;
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);
    this.locations = jsonData.label_values[0].vec.map((location: any) => {
      return location.value;
    });
  }
}
