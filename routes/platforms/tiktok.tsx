import Page from "../../components/Page.tsx";
import TikTokAnalytics from "../../islands/TikTokAnalytics.tsx";

export default function TikTok() {
  return (
    <Page title={"TikTok Analytics"} dragAndDrop={true}>
      <TikTokAnalytics />
    </Page>
  );
}
