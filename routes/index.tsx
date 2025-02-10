import Button from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <div class="flex flex-col min-h-screen bg-white">
      <div class="flex-grow flex items-center justify-center px-4 sm:px-8">
        <div class="px-8 py-8 mx-auto bg-blue-500 rounded-2xl w-full sm:w-auto">
          <div class="max-w-screen-md px-4 mx-auto flex flex-col items-center">
            <h1 class="text-2xl sm:text-4xl font-bold text-white text-center">
              What is my data worth?
            </h1>
            <p class="text-base sm:text-lg text-white mt-4 mb-4 text-center">
              Welcome to your own data.
            </p>
            <Button
              href="/platforms/instagram"
              name="Go to Instagram Analytics"
            />
            <Button href="/platforms/tiktok" name="Go to TikTok Analytics" />
          </div>
        </div>
      </div>
      <Footer home={true} />
    </div>
  );
}
