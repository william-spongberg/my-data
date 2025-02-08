import Button from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <div class="flex flex-col min-h-screen bg-white">
      <div class="flex-grow flex items-center justify-center">
        <div class="px-4 py-8 mx-auto bg-blue-500 rounded-2xl">
          <div class="max-w-screen-md mx-auto flex flex-col items-center">
            <h1 class="text-4xl font-bold text-white">
              What is my data worth?
            </h1>
            <p class="text-lg text-white mt-4 mb-4">
              Welcome to your own data.
            </p>
            <Button href="/platforms/instagram" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
