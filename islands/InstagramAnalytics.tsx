import InstagramData from "../classes/instagram/InstagramData.tsx";
import Analytics from "./Analytics.tsx";
import Button from "../components/Button.tsx";

export default function InstagramAnalytics() {
  return (
    <>
      <Analytics
        DataClass={InstagramData}
        renderData={(data) => data.render()}
        subtitle="What data does Instagram have on you?"
      />
      <Button
        href="/"
        text="Go back Home"
      />
    </>
  );
}
