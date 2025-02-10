import Button from "../components/Button.tsx";
import Page from "../components/Page.tsx";
import Title from "../components/Title.tsx";

export default function Home() {
  return (
    <Page home={true}>
      <Title>
        What is my data worth?
      </Title>
      <p class="text-base sm:text-lg text-white mt-4 mb-4 text-center">
        Welcome to your own data.
      </p>
      <Button
        href="/platforms/instagram"
        text="Go to Instagram Analytics"
      />
      <Button href="/platforms/tiktok" text="Go to TikTok Analytics" />

      <div class="flex items-center justify-center px-4 py-4 sm:px-8">
        <Button
          href="/faq"
          text="❓ How do I get my data?"
          backgroundColour="bg-blue-500"
          textColour="text-white"
          hoverBackgroundColour="hover:bg-blue-600"
          hoverTextColour="hover:text-white"
        />
      </div>
    </Page>
  );
}
