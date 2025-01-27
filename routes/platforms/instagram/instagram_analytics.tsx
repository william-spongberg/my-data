import { FileData, InstagramData } from "../../../components/instagram/interfaces.tsx";
import { getNumEvents, getEventTypeAnalytics, getActivities } from "../../../components/instagram/processing.tsx";

export default function Analytics() {
  const instaData: InstagramData = JSON.parse(sessionStorage.getItem("instagramData") || "{}");
  if (instaData) {
    sessionStorage.removeItem("instagramData");
  }

  const activity = instaData.activity || [];
  // TODO: add more

  return (
    instaData ? (
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center w-full">
          <h1 class="text-4xl font-bold">Instagram Analytics</h1>
          <p class="text-lg mt-4 mb-4">Your Instagram data</p>
          <p>{`Number of activities: ${activity.length}`}</p>
          <p>{`Number of events: ${getNumEvents(activity)}`}</p>
            {Array.from(getEventTypeAnalytics(activity)).map(([event, count], index) => (
            <p key={index}>{`Event type: ${event}, Count: ${count}`}</p>
            ))}
            <p class="max-w-screen-md">{`All activities: ${getActivities(activity).join(', ')}`}</p>
        </div>
      </div>
    ) : (
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Instagram Analytics</h1>
          <p class="text-lg mt-4 mb-4">No data found</p>
        </div>
      </div>
    )
  )
}
