export default function Home() {
  return (
    <div class="flex items-center min-h-screen bg-white">
      <div class="px-4 py-8 mx-auto bg-blue-500 rounded-2xl">
        <div class="max-w-screen-md mx-auto flex flex-col items-center">
          <h1 class="text-4xl font-bold text-white">
            What is my data worth?
          </h1>
          <p class="text-lg text-white mt-4 mb-4">
            Welcome to your own data.
          </p>
          <button class="flex items-center justify-center bg-white rounded-2xl p-4 hover:bg-yellow-500 hover:text-white">
            <a
              href="/platforms/instagram_analytics"
              class="text-light-blue-500"
            >
              Go to Instagram Analytics
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
