import TikTokData from "../classes/tiktok/TikTokData.tsx";
import Analytics from "./Analytics.tsx";
import Button from "../components/Button.tsx";

export default function TikTokAnalytics() {
  return (
    <>
      <Analytics
        DataClass={TikTokData}
        renderData={(data) => data.render()}
        subtitle="What data does TikTok have on you?"
      />
      <Button
        href="/"
        text="Go back Home"
      />
    </>
  );
}
