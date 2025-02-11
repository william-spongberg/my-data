import { ComponentChildren } from "preact";

interface TextProps {
    textColour?: string;
    children: ComponentChildren;
}

export function Title({ textColour="text-white", children }: TextProps) {
  return (
    <h1 class={`text-2xl sm:text-4xl py-4 px-4 font-bold ${textColour} text-center`}>
      {children}
    </h1>
  );
}

export function Heading({ textColour="text-white", children }: TextProps) {
  return (
    <h2 class={`text-xl sm:text-2xl font-bold ${textColour} text-center`}>
      {children}
    </h2>
  );
}

export function SubHeading({ textColour="text-white", children }: TextProps) {
  return (
    <h3 class={`text-lg sm:text-xl font-bold ${textColour} text-center`}>
      {children}
    </h3>
  );
}

export function Paragraph({ textColour="text-white", children }: TextProps) {
    return (
      <p class={`text-base sm:text-lg ${textColour} mt-4 mb-4 text-center`}>
        {children}
      </p>
    )
}

export function Small({ textColour="text-white", children }: TextProps) {
  return (
    <p class={`text-sm ${textColour} text-center`}>
      {children}
    </p>
  );
}