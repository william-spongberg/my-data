import Button from "./Button.tsx";

interface Props {
  home?: boolean;
}

export default function Footer({ home = false }: Props) {
  return (
    <>
      {!home && (
        <Button
          href="/"
          name="Go back Home"
        />
      )}
      <footer className="flex justify-center items-center h-16 bg-black text-white">
        <br />
        <p className="text-yellow-500">This website is in beta.</p>
        <p className="mx-2">|</p>
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/william-spongberg"
            className="text-blue-500 hover:underline my-4"
          >
            William Spongberg
          </a>
        </p>
        <p className="mx-2">|</p>
        <p>
          &copy; William Spongberg{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </>
  );
}
