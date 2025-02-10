import Button from "../components/Button.tsx";
import Page from "../components/Page.tsx";
import Title from "../components/Title.tsx";
import * as Icons from "../components/Icons.tsx";
import Grid from "../components/Grid.tsx";
import Heading from "../components/Heading.tsx";
import Text from "../components/Text.tsx";
import Center from "../components/Center.tsx";

// frequently asked questions page
export default function FAQ() {
  return (
    <Page>
      <Title>
        Frequently Asked Questions
      </Title>
      <Center>
        <Heading>
          What is this website?
        </Heading>

        <Text>
          This website is a platform for you to see your data, understand it and
          see its estimated worth to companies around the world.
        </Text>

        <Heading>
          How do I get my data?
        </Heading>

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

        <Heading>
          How much does it cost?
        </Heading>

        <Text>
          This website is free to use. However, there are plans to add premium
          features in the future.
        </Text>
      </Center>
    </Page>
  );
}
