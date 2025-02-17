import * as Layout from "../../components/Layout.tsx";
import InstagramAnalytics from "../../islands/InstagramAnalytics.tsx";

export default function TikTok() {
  return (
    <Layout.Background>
      <Layout.Element title={"Instagram Analytics"} dragAndDrop={true}>
        <InstagramAnalytics />
      </Layout.Element>
    </Layout.Background>
  );
}
