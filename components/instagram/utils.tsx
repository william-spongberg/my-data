import { FileData, Activity, InstagramData } from "./interfaces.tsx";
import { getNumEvents, parseActivity, getEventTypeAnalytics, getActivities } from "./processing.tsx";

// TODO: allow multiple files to be uploaded at once, combine all into one InstagramData object
export function convertFileData(fileData: FileData): InstagramData | null {
  // instagram only allows json files
  if (fileData.type !== "application/json") {
    console.log("Invalid file type");
    return null;
  }

  // parse json data differently depending on what it is
  switch (fileData.name) {
    case "ads_viewed.json": {
      console.log("Ads viewed");
      return null;
    }
    case "posts_viewed.json": {
      console.log("Your activity");
      return null;
    }
    case "videos_watched.json": {
      console.log("Videos watched");
      return null;
    }
    case "advertisers_using_your_activity_or_information.json": {
      console.log("Advertisers using your data");
      return null;
    }
    case "other_categories_used_to_reach_you.json": {
      console.log("Categories used to reach you");
      return null;
    }
    case "your_activity_off_meta_technologies.json": {
      console.log("Your activity off meta technologies");
      
      const activities: Activity[] = parseActivity(fileData);
      const instagramData: InstagramData = {
        activity: activities,
      }

      return instagramData;
    }
    default: {
      console.log("Invalid file name");
      return null;
    }
  }
}