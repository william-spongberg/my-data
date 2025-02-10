import InstagramData from "../classes/instagram/InstagramData.tsx";
import Analytics from "./Analytics.tsx";

export default function InstagramAnalytics() {
  return (
    <Analytics
      DataClass={InstagramData}
      renderData={(data) => data.render()}
      title="What data does Instagram have on you?"
    />
  );
}
