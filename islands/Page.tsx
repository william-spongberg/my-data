import { ComponentChildren } from "preact";
import Footer from "../components/Footer.tsx";
import DragAndDrop from "../islands/DragAndDrop.tsx";
import * as Text from "../components/Text.tsx";

interface PageProps {
  children: ComponentChildren;
  home?: boolean;
  dragAndDrop?: boolean;
  title?: string;
}

export default function Page(
  { home = false, dragAndDrop = false, title = "", children }: PageProps,
) {
  return (
    <div class="flex flex-col min-h-screen bg-white">
      <div class="flex-grow flex items-center justify-center px-4 sm:px-8 pt-8 pb-8">
      <div class="px-8 py-8 mx-auto my-auto bg-blue-400 rounded-2xl w-full max-w-screen-md">
        <div class="px-4 mx-auto flex flex-col items-center">
        <Text.Title>{title}</Text.Title>
        <br />
        {dragAndDrop ? <DragAndDrop /> : null}
        {children}
        <br />
        </div>
      </div>
      </div>
      <Footer home={home} />
    </div>
  );
}
