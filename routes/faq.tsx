import Button from "../components/Button.tsx";
import * as Layout from "../components/Layout.tsx";
import * as Text from "../components/Text.tsx";
import * as Icons from "../components/Icons.tsx";

// frequently asked questions page
export default function FAQ() {
  return (
    <Layout.Background>
      <Layout.Element>
        <Text.Title>
          Frequently Asked Questions
        </Text.Title>
        <Layout.Center>
          <Text.Heading>
            What is this website?
          </Text.Heading>

          <Text.Paragraph>
            This website is a platform for you to see your data, look at
            analytics, and gain insights into your social media usage.
          </Text.Paragraph>

          <Text.Heading>
            Is this website secure?
          </Text.Heading>

          <Text.Paragraph>
            All data is loaded in and processed client-side. This means nothing
            is sent to the server. In fact, you can open one of the platform
            pages, disconnect from the internet, and the data will still load
            and be analysed fine.
          </Text.Paragraph>

          <Text.Heading>
            How do I get my data?
          </Text.Heading>

          <Layout.Grid>
            <Button
              href="https://help.instagram.com/181231772500920?helpref=faq_content"
              text=""
              backgroundColour="bg-black"
              hoverBackgroundColour="hover:bg-gray-700"
              textColour="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.IconInstagram />
            </Button>

            <Button
              href="https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/requesting-your-data"
              text=""
              backgroundColour="bg-black"
              hoverBackgroundColour="hover:bg-gray-700"
              textColour="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.IconTikTok />
            </Button>
          </Layout.Grid>
          <Text.Paragraph>
            Make sure to configure for records across all time, and export as
            JSON where possible.
          </Text.Paragraph>
          <Text.Heading>
            How much does it cost?
          </Text.Heading>

          <Text.Paragraph>
            This website is free to use. However, there may be plans to add premium
            features in the future.
          </Text.Paragraph>
        </Layout.Center>
      </Layout.Element>
    </Layout.Background>
  );
}
