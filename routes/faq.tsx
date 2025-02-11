import Button from "../components/Button.tsx";
import Page from "../components/Page.tsx";
import Grid from "../components/Grid.tsx";
import Center from "../components/Center.tsx";
import * as Text from "../components/Text.tsx";
import * as Icons from "../components/Icons.tsx";

// frequently asked questions page
export default function FAQ() {
  return (
    <Page>
      <Text.Title >
        Frequently Asked Questions
      </Text.Title>
      <Center>
        <Text.Heading >
          What is this website?
        </Text.Heading>

        <Text.Paragraph>
          This website is a platform for you to see your data, understand it and
          see its estimated worth to companies around the world.
        </Text.Paragraph>

        <Text.Heading >
          Is this website secure?
        </Text.Heading>

        <Text.Paragraph >
          All data is loaded in and processed client-side. This means nothing is sent to the server.
          In fact, you can open one of the platform pages, disconnect from the internet, and the data will still load and be analysed fine.
        </Text.Paragraph>

        <Text.Heading >
          How do I get my data?
        </Text.Heading>

        <Grid>
          <Button
            href="https://help.instagram.com/181231772500920?helpref=faq_content"
            text=""
            backgroundColour="bg-black"
            hoverBackgroundColour="hover:bg-gray-800"
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
            hoverBackgroundColour="hover:bg-gray-800"
            textColour="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.IconTikTok />
          </Button>
        </Grid>
        <Text.Paragraph >
          Make sure to configure for records across all time, and export as JSON
          where possible.
        </Text.Paragraph>
        <Text.Heading >
          How much does it cost?
        </Text.Heading>

        <Text.Paragraph >
          This website is free to use. However, there are plans to add premium
          features in the future.
        </Text.Paragraph>
      </Center>
    </Page>
  );
}
