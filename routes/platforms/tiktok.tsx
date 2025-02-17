import * as Layout from "../../components/Layout.tsx";
import TikTokAnalytics from "../../islands/TikTokAnalytics.tsx";

export default function TikTok() {
  return (
    <Layout.Background>
      <Layout.Element title={"TikTok Analytics"} dragAndDrop={true}>
        <TikTokAnalytics />
      </Layout.Element>
    </Layout.Background>
  );
}
