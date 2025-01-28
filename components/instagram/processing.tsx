import { FileData, Activity, ActivityEvent, EventType } from "./interfaces.tsx";

// TODO: api calls for analytics

export function parseActivity(fileData: FileData): Activity[] {
  // convert to JSON
  const jsonData = JSON.parse(fileData.text);

  // convert JSON to useable activity objects
  const activities: Activity[] = jsonData.apps_and_websites_off_meta_activity.map((activity: any) => {
    return {
      name: activity.name,
      events: activity.events.map((event: any) => ({
        timestamp: event.timestamp,
        type: event.type,
      })) as ActivityEvent[],
    } as Activity;
  });

  return activities;
}

export function getNumEvents(activities: Activity[]): number {
  return activities.reduce((acc, activity) => acc + activity.events.length, 0);
}

export function getNumActivites(events: ActivityEvent[]): number {
  return events.length;
}

export function getEventTypeAnalytics(events: Activity[]): Map<EventType, number> {
  const typeAnalytics = new Map<EventType, number>();

  events.forEach((activity) => {
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

export function getActivities(events: Activity[]): string[] {
  return events.map((activity) => activity.name);
}