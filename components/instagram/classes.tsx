// class for data structure
// allows instantiating with data + methods
// got annoyed by all the methods being in weird places

import {
  Activity,
  ActivityEvent,
  AdsInformation,
  EventType,
  FileData,
  InstagramDataType,
} from "./interfaces.tsx";

// root of instagram data structure
export class InstagramData {
  ads_information?: AdsInformation;
  activities?: Activities;
  // TODO: messages, likes, etc

  constructor(ads_information?: AdsInformation, activities?: Activities) {
    this.ads_information = ads_information;
    this.activities = activities;
  }
}

export class Activities implements InstagramDataType {
  activities: Activity[] = [];

  constructor(fileData: FileData) {
    this.parse(fileData);
  }

  getNumEvents(): number {
    if (!this.activities) {
      return 0;
    }
    return this.activities?.reduce(
      (acc, activity) => acc + activity.events.length,
      0,
    );
  }

  getNumActivites(): number {
    if (!this.activities) {
      return 0;
    }
    return this.activities.length;
  }

  getEventTypeAnalytics(): Map<EventType, number> {
    if (!this.activities) {
      return new Map();
    }

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

  getActivities(): string[] {
    if (!this.activities) {
      return [];
    }
    return this.activities.map((activity) => activity.name);
  }

  render() {
    if (!this.activities || this.getNumActivites() === 0) {
      return <p>No activity data.</p>;
    }

    return (
      <>
        <p class="text-lg mt-4 mb-4">Your Instagram data</p>
        <p>
          {`Your actions were tracked across ${this.getNumActivites()} different apps and websites.`}
        </p>
        <p>{`A total of ${this.getNumEvents()} logs were made.`}</p>
        {Array.from(this.getEventTypeAnalytics()).map(([event, count]) => (
          <p key={event}>{`Event type: ${event}, Count: ${count}`}</p>
        ))}
        <p class="max-w-screen-md">
          {`Apps and websites: ${this.getActivities().join(", ")}`}
        </p>
      </>
    );
  }

  parse(fileData: FileData): void {
    // convert to JSON
    const jsonData = JSON.parse(fileData.text);

    // convert JSON to useable activity objects
    const activities: Activity[] = jsonData.apps_and_websites_off_meta_activity
      .map((activity: Activity) => {
        return {
          name: activity.name,
          events: activity.events.map((event: ActivityEvent) => ({
            timestamp: event.timestamp,
            type: event.type,
          })) as ActivityEvent[],
        } as Activity;
      });

    this.activities = activities;
  }
}
