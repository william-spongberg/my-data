import Button from "../components/Button.tsx";
import Grid from "../components/Grid.tsx";
import Page from "../components/Page.tsx";
import Title from "../components/Title.tsx";
import Text from "../components/Text.tsx";
import Center from "../components/Center.tsx";
import * as Icons from "../components/Icons.tsx";

export default function Home() {
  return (
    <Page home={true}>
      <Title>
        What is my data worth?
      </Title>

      <Text>
        <i>
          Welcome to your own data.
        </i>
      </Text>

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
          backgroundColour="bg-blue-500"
          textColour="text-white"
          hoverBackgroundColour="hover:bg-blue-600"
          hoverTextColour="hover:text-white"
        />
      </Center>
    </Page>
  );
}
