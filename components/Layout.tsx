import { ComponentChildren } from "preact";
import * as Text from "./Text.tsx";
import { ChildrenProps } from "../global/types.ts";
import DragAndDrop from "../islands/DragAndDrop.tsx";

const SCREEN_COLOUR = "bg-black";
const ELEMENT_COLOUR = "bg-gray-800";
const ELEMENT_SIZE = "max-w-screen-md";

interface BackgroundProps {
  colour?: string;
  children: ComponentChildren;
}

export function Background(
  { colour = SCREEN_COLOUR, children }: BackgroundProps,
) {
  return (
    <div class={`flex flex-col min-h-screen ${colour}`}>
      <div class="flex flex-grow items-center justify-center mb-9 px-4 sm:px-8 pt-8 pb-8">
        {children}
      </div>
    </div>
  );
}

interface ElementProps {
  children: ComponentChildren;
  dragAndDrop?: boolean;
  title?: string;
  colour?: string;
  size?: string;
}

export function Element(
  {
    title = "",
    dragAndDrop = false,
    colour = ELEMENT_COLOUR,
    size = ELEMENT_SIZE,
    children,
  }: ElementProps,
) {
  return (
    <div
      class={`px-8 py-8 mx-auto my-auto ${colour} rounded-2xl w-full ${size}`}
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
  );
}

export function Grid({ children }: ChildrenProps) {
  const childCount = Array.isArray(children) ? children.length : 1;
  const gridCols = childCount <= 2 ? `grid-cols-${childCount}` : "grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div class={`grid ${gridCols} gap-4 mt-4 mb-4`}>
      {children}
    </div>
  );
}

export function Center({ children }: ChildrenProps) {
  return (
    <div class="flex flex-col items-center px-4 py-4 sm:px-8">
      {children}
    </div>
  );
}


export function Footer() {
  return (
    <>
      <footer class="flex flex-col items-center w-auto bg-black text-gray-600">
      <div class="flex flex-col md:flex-row justify-center items-center h-auto md:h-16 p-4 md:p-2 pb-16 md:pb-2">
        <p class="mb-2 md:mb-0">
        Created by{" "}
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
      </div>
      </footer>
    </>
  );
}
