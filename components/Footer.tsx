import Button from "./Button.tsx";

interface FooterProps {
  home?: boolean;
}

export default function Footer({ home = false }: FooterProps) {
  return (
    <>
      <div class="flex justify-center w-auto">
        {!home && (
          <Button
            href="/"
            text="Go back Home"
          />
        )}
      </div>
      <footer class="flex flex-col md:flex-row justify-center items-center h-auto md:h-16 bg-gray-900 text-white p-4 md:p-2 pb-16 md:pb-2">
        <p class="text-yellow-500 mb-2 md:mb-0">This website is in beta.</p>
        <p class="hidden md:block mx-2">|</p>
        <p class="mb-2 md:mb-0">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/william-spongberg"
            class="text-blue-500 hover:underline"
          >
            William Spongberg
          </a>
        </p>
        <p class="hidden md:block mx-2">|</p>
        <p>
          &copy; William Spongberg{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </>
  );
}
