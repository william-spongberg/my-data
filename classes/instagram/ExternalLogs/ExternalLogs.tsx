import { DataType, FileData, EventType, ExternalLog, ExternalEvent } from "../../../global/types.ts";
import BarChart from "../../../islands/BarChart.tsx";
import LineChart from "../../../islands/LineChart.tsx";
import { randColour } from "../../../global/utils.ts";
import * as Text from "../../../components/Text.tsx";

export default class ExternalLogs implements DataType {
  logs: ExternalLog[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.logs.length === 0) {
      return (
        <Text.Small>
          No logs found.
        </Text.Small>
      );
    }

    return (
      <>
        <Text.Heading>Your actions outside Instagram</Text.Heading>
        <Text.Small>
          {`Your actions were tracked across ${this.logs.length} different apps and websites.`}
        </Text.Small>
        <Text.Small>
          {`A total of ${this.getNumEvents()} logs were made.`}
        </Text.Small>
        <br />
        <BarChart
          id="EventTypesBarChart"
          datasets={Array.from(this.getEventTypeAnalytics()).map(
            ([event, count]: [EventType, number]) => ({
              label: event,
              data: [count],
              color: randColour(),
            }),
          )}
        />
        <BarChart
          id="LogsBarChart"
          datasets={this.logs.map((activity) => ({
            label: activity.name,
            data: [activity.events.length],
            color: randColour(),
          }))}
        />
        <LineChart
          id="LogsLineChart"
          datasets={Array.from(this.getEventTypeAnalytics()).map(
            ([event, _count]: [EventType, number]) => ({
              label: event,
              data: this.logs
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
    this.logs = jsonData.apps_and_websites_off_meta_activity
      .map((activity: ExternalLog) => {
        return {
          name: activity.name,
          events: activity.events.map((event: ExternalEvent) => ({
            timestamp: event.timestamp,
            type: event.type,
          })) as ExternalEvent[],
        } as ExternalLog;
      });
  }

  getNumEvents(): number {
    return this.logs?.reduce(
      (acc, activity) => acc + activity.events.length,
      0,
    );
  }

  getEventTypeAnalytics(): Map<EventType, number> {
    const typeAnalytics = new Map<EventType, number>();

    this.logs.forEach((activity) => {
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
    return this.logs.map((activity) => activity.name);
  }
}
