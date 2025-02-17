import Button from "../components/Button.tsx";
import * as Layout from "../components/Layout.tsx";
import * as Text from "../components/Text.tsx";
import * as Icons from "../components/Icons.tsx";

export default function Home() {
  return (
    <Layout.Background disableFooter={true}>
      <Layout.Element>
        <Text.Title>
          Your Data Insights
        </Text.Title>

        <Text.Paragraph>
          <i>
            Welcome to your personalised data dashboard.
          </i>
        </Text.Paragraph>

        <Layout.Grid>
          <Button
            href="/platforms/instagram"
            text="Analytics"
            backgroundColour="bg-black"
            hoverBackgroundColour="hover:bg-gray-700"
            textColour="text-white"
          >
            <Icons.IconInstagram />
          </Button>
          <Button
            href="/platforms/tiktok"
            text="Analytics"
            backgroundColour="bg-black"
            hoverBackgroundColour="hover:bg-gray-700"
            textColour="text-white"
          >
            <Icons.IconTikTok />
          </Button>
          <Button
            href="/faq"
            text="❓FAQ">
          </Button>
        </Layout.Grid>
      </Layout.Element>
    </Layout.Background>
  );
}
