import Footer from "../components/Footer.tsx";

// frequently asked questions page
export default function FAQ() {
  return (
    <div class="flex flex-col min-h-screen bg-white">
      <div class="flex-grow flex items-center justify-center px-4 sm:px-8">
        <div class="px-8 py-8 mx-auto bg-blue-400 rounded-2xl w-full sm:w-auto">
          <div class="max-w-screen-md px-4 mx-auto flex flex-col items-center">
            <h1 class="text-2xl sm:text-4xl font-bold text-white text-center">
              Frequently Asked Questions
            </h1>
            <p class="text-base sm:text-lg text-white mt-4 mb-4 text-center">
              Welcome to our FAQ page.
            </p>
            <div class="flex flex-col items-center">
              <div class="flex flex-col items-center">
                <h2 class="text-xl sm:text-2xl font-bold text-white text-center">
                  What is this website?
                </h2>
                <p class="text-base sm:text-lg text-white mt-4 mb-4 text-center">
                  This website is a platform for you to see your
                  data, understand it and see its estimated worth to companies around the world.
                </p>
              </div>
              <div class="flex flex-col items-center">
                <h2 class="text-xl sm
                :text-2xl font-bold text-white text-center">
                  How do I get my data?
                </h2>
                <p class="text-base sm:text-lg text-white mt-4 mb-4 text-center">
                  <a
                    href="https://help.instagram.com/181231772500920?helpref=faq_content"
                    class="underline text-white"
                  >
                    Instagram
                  </a>&nbsp;|&nbsp;<a
                    href="https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/requesting-your-data"
                    class="underline text-white"
                  >
                    TikTok
                  </a>
                </p>
              </div>
              <div class="flex flex-col items-center">
                <h2 class="text-xl sm:text-2xl font-bold text-white text-center">
                  How much does it cost?
                </h2>
                <p class="text-base sm:text-lg text-white mt-4 mb-4 text-center">
                  This website is free to use. However, there are plans to add premium features in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
