import Button from "../components/Button.tsx";
import Page from "../components/Page.tsx";
import Title from "../components/Title.tsx";
import * as Icons from "../components/Icons.tsx";

// frequently asked questions page
export default function FAQ() {
  return (
    <Page>
      <Title>
        Frequently Asked Questions
      </Title>
      <div class="flex flex-col items-center">
        <div class="flex flex-col py-4 items-center">
          <h2 class="text-xl sm:text-2xl font-bold text-white text-center">
            What is this website?
          </h2>
          <p class="text-base sm:text-lg text-white mt-4 mb-4 text-center">
            This website is a platform for you to see your data, understand it
            and see its estimated worth to companies around the world.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <h2 class="text-xl sm
                :text-2xl font-bold text-white text-center">
            How do I get my data?
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
            <Button
              href="https://help.instagram.com/181231772500920?helpref=faq_content"
              text="Instagram"
              backgroundColour="bg-pink-500"
              hoverBackgroundColour="hover:bg-pink-400"
              textColour="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.IconInstagram />
            </Button>
            <Button
              href="https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/requesting-your-data"
              text="TikTok"
              backgroundColour="bg-black"
              hoverBackgroundColour="hover:bg-gray-800"
              textColour="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.IconTikTok />
            </Button>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <h2 class="text-xl sm:text-2xl font-bold text-white text-center">
            How much does it cost?
          </h2>
          <p class="text-base sm:text-lg text-white mt-4 mb-4 text-center">
            This website is free to use. However, there are plans to add premium
            features in the future.
          </p>
        </div>
      </div>
    </Page>
  );
}
