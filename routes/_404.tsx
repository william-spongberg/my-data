import { Head } from "$fresh/runtime.ts";
import Button from "../components/Button.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#5b68ad2d]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">404 - Page not found</h1>
          <p class="my-4">
            The page you were looking for does not exist.
          </p>
          <Button
            href="/"
            name="Go back home"
          />
        </div>
      </div>
    </>
  );
}
