import { FileData, Activity } from "./interfaces.tsx";
import { getNumEvents, parseActivity, getEventTypeAnalytics, getActivities } from "./processing.tsx";

// call api functions from here
export function handleFileData(fileData: FileData) {
  // instagram only allows json files
  if (fileData.type !== "application/json") {
    console.log("Invalid file type");
    return;
  }

  // parse json data differently depending on what it is
  switch (fileData.name) {
    case "ads_viewed.json": {
      console.log("Ads viewed");
      break;
    }
    case "posts_viewed.json": {
      console.log("Your activity");
      break;
    }
    case "videos_watched.json": {
      console.log("Videos watched");
      break;
    }
    case "advertisers_using_your_activity_or_information.json": {
      console.log("Advertisers using your data");
      break;
    }
    case "other_categories_used_to_reach_you.json": {
      console.log("Categories used to reach you");
      break;
    }
    case "your_activity_off_meta_technologies.json": {
      console.log("Your activity off meta technologies");
      
      const activities: Activity[] = parseActivity(fileData);

      console.log("Number of activities:", activities.length);
      console.log("Number of events:", getNumEvents(activities));
      console.log("Event type analytics:", getEventTypeAnalytics(activities));
      console.log("All activities:", getActivities(activities));
      break;
    }
    default: {
      console.log("Invalid file name");
    }
  }
}