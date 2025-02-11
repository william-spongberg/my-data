import Button from "../components/Button.tsx";
import Page from "../components/Page.tsx";
import Grid from "../components/Grid.tsx";
import Center from "../components/Center.tsx";
import * as Text from "../components/Text.tsx";
import * as Icons from "../components/Icons.tsx";

export default function Home() {
  return (
    <Page home={true}>
      <Text.Title >
        What is my data worth?
      </Text.Title>

      <Text.Paragraph >
        <i>
          Welcome to your own data.
        </i>
      </Text.Paragraph>

      <Grid>
        <Button
          href="/platforms/instagram"
          text="Analytics"
          backgroundColour="bg-black"
          hoverBackgroundColour="hover:bg-gray-800"
          textColour="text-white"
        >
          <Icons.IconInstagram />
        </Button>
        <Button
          href="/platforms/tiktok"
          text="Analytics"
          backgroundColour="bg-black"
          hoverBackgroundColour="hover:bg-gray-800"
          textColour="text-white"
        >
          <Icons.IconTikTok />
        </Button>
      </Grid>

      <Center>
        <Button
          href="/faq"
          text="❓ How do I get my data?"
        />
      </Center>
    </Page>
  );
}
