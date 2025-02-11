import { ComponentChildren } from "preact";
import Footer from "./Footer.tsx";
import DragAndDrop from "../islands/DragAndDrop.tsx";
import * as Text from "./Text.tsx";
import Center from "./Center.tsx";

const SCREEN_BACKGROUND_COLOUR = "bg-black";
const PAGE_BACKGROUND_COLOUR = "bg-gray-800";

interface PageProps {
  children: ComponentChildren;
  home?: boolean;
  dragAndDrop?: boolean;
  title?: string;
  screenBackgroundColour?: string;
  pageBackgroundColour?: string;
}

export default function Page(
  {
    home = false,
    dragAndDrop = false,
    title = "",
    screenBackgroundColour = SCREEN_BACKGROUND_COLOUR,
    pageBackgroundColour = PAGE_BACKGROUND_COLOUR,
    children,
  }: PageProps,
) {
  return (
    <div class={`flex flex-col min-h-screen ${screenBackgroundColour}`}>
      <div class="flex-grow flex items-center justify-center px-4 sm:px-8 pt-8 pb-8">
        <div
          class={`px-8 py-8 mx-auto my-auto ${pageBackgroundColour} rounded-2xl w-full max-w-screen-md`}
        >
          <Center>
            <Text.Title>{title}</Text.Title>
            <br />
            {dragAndDrop ? <DragAndDrop /> : null}
            <br />
            {children}
            <br />
          </Center>
        </div>
      </div>
      <Footer home={home} />
    </div>
  );
}
