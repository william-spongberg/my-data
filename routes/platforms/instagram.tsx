import Page from "../../components/Page.tsx";
import InstagramAnalytics from "../../islands/InstagramAnalytics.tsx";

export default function TikTok() {
  return (
    <Page title={"Instagram Analytics"} dragAndDrop={true}>
      <InstagramAnalytics />
    </Page>
  );
}
