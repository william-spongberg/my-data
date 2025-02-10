import TikTokData from "../classes/tiktok/TikTokData.tsx";
import Analytics from "./Analytics.tsx";

export default function TikTokAnalytics() {
  return (
    <Analytics
      DataClass={TikTokData}
      renderData={(data) => data.render()}
      title="What data does TikTok have on you?"
    />
  );
}
