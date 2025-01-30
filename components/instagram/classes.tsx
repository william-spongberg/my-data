// class for data structure
// allows instantiating with data + methods
// got annoyed by all the methods being in weird places

import {
  Activity,
  ActivityEvent,
  AvertiserInfo,
  Category,
  EventType,
  Impression,
} from "./interfaces.tsx";
import { DataType, FileData } from "../interfaces.tsx";

// root of instagram data structure
export class InstagramData implements DataType {
  activities: Activities = new Activities();
  adsInfo: AdsInformation = new AdsInformation();

  // TODO: messages, likes, etc

  constructor(fileData?: FileData[]) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    return (
      <>
        <p class="mt-4 mb-4 text-3xl">Your Instagram data</p>
        {this.activities?.render()}
        <br />
        {this.adsInfo?.render()}
        <br />
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
          this.activities = new Activities(file);
          console.log("Parsed your_activity_off_meta_technologies.json");
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

export class Activities implements DataType {
  activities: Activity[] = [];

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
        <p class="text-2xl">Activities</p>
        <p>
          {`Your actions were tracked across ${this.activities.length} different apps and websites.`}
        </p>
        <p>{`A total of ${this.getNumEvents()} logs were made.`}</p>
        {Array.from(this.getEventTypeAnalytics()).map(([event, count]) => (
          <p key={event}>{`Event type: ${event}, Count: ${count}`}</p>
        ))}
        <p class="max-w-screen-md">
          {`Apps and websites: ${this.getStringifiedActivities().join(", ")}`}
        </p>
      </>
    );
  }

  parse(fileData: FileData) {
    // convert to JSON
    const jsonData = JSON.parse(fileData.text);

    // convert JSON to useable activity objects
    this.activities = jsonData.apps_and_websites_off_meta_activity
      .map((activity: Activity) => {
        return {
          name: activity.name,
          events: activity.events.map((event: ActivityEvent) => ({
            timestamp: event.timestamp,
            type: event.type,
          })) as ActivityEvent[],
        } as Activity;
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

export class AdsInformation implements DataType {
  ads_and_topics: AdsAndTopics = new AdsAndTopics();
  instagram_ads: InstagramAds = new InstagramAds();

  constructor(_fileData?: FileData) {
  }

  render() {
    return (
      <>
        <p class="text-2xl">Ads Information</p>
        {this.ads_and_topics.render()}
        <br />
        {this.instagram_ads.render()}
      </>
    );
  }

  parse(_fileData: FileData) {
  }
}

export class AdsAndTopics implements DataType {
  ads_viewed: AdImpressions = new AdImpressions();
  posts_viewed: PostImpressions = new PostImpressions();
  videos_watched: VideoImpressions = new VideoImpressions();

  constructor(_fileData?: FileData) {
  }

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

  parse(_fileData: FileData) {
  }

  // for later if needed
  //posts_not_interested: PostsNotInterested;
  //profiles_not_interested: ProfilesNotInterested;
  //suggested_profiles: SuggestedProfiles;
}

export class InstagramAds implements DataType {
  advertisers_using_your_data: AdvertisersUsingData =
    new AdvertisersUsingData();
  categories_used_to_reach_you: CategoriesUsedToReachYou =
    new CategoriesUsedToReachYou();

    constructor(fileData?: FileData) {
      if (fileData) {
        this.parse(fileData);
      }
    }

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

  parse(_fileData: FileData) {
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
        <p class='text-sm italic'>{`Your data has been sold to ${this.advertisers.length} advertisers`}</p>
        <p class='text-sm italic'>{`Advertisers with data files on you: ${this.advertisers.filter(advertiser => advertiser.has_data_file_on_you).length}`}</p>
        <p class='text-sm italic'>{`Advertisers with remarketing just for you: ${this.advertisers.filter(advertiser => advertiser.has_remarketing).length}`}</p>
        <p class='text-sm italic'>{`Advertisers with in-person store visits from you: ${this.advertisers.filter(advertiser => advertiser.has_in_person_store_visit).length}`}</p>
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
        <p class="text-sm italic">{`Your data has been used to reach you in ${this.categories.length} categories`}</p>
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
        {this.impressions.map((impression, index) => (
          <p key={`${impression.timestamp}-${index}`} class="text-sm">
            {`Impression by ${impression.author} at ${impression.timestamp}`}
          </p>
        ))}
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
        <p class="text-sm italic">{`You have seen ${this.impressions.length} ads`}</p>
        {this.impressions.map((impression, index) => (
          <p key={`${impression.timestamp}-${index}`} class="text-sm">
            {`Impression by ${impression.author} at ${impression.timestamp}`}
          </p>
        ))}
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
        <p>Ad Impressions</p>
        <p class="text-sm italic">{`You have seen ${this.impressions.length} videos`}</p>
        {this.impressions.map((impression, index) => (
          <p key={`${impression.timestamp}-${index}`} class="text-sm">
            {`Impression by ${impression.author} at ${impression.timestamp}`}
          </p>
        ))}
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
        <p>Ad Impressions</p>
        <p class="text-sm italic">{`You have seen ${this.impressions.length} posts`}</p>
        {this.impressions.map((impression, index) => (
          <p key={`${impression.timestamp}-${index}`} class="text-sm">
            {`Impression by ${impression.author} at ${impression.timestamp}`}
          </p>
        ))}
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
