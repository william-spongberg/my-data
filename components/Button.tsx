import { ComponentChildren } from "preact";

interface ButtonProps {
  href: string;
  text: string;
  textColour?: string;
  backgroundColour?: string;
  hoverBackgroundColour?: string;
  hoverTextColour?: string;
  target?: string;
  rel?: string;
  children?: ComponentChildren;
}

export default function Button({
  href,
  text,
  backgroundColour = "bg-white",
  textColour = "text-light-blue-500",
  hoverBackgroundColour = "hover:bg-yellow-500",
  hoverTextColour = "hover:text-white",
  target = "_self",
  rel = "",
  children,
}: ButtonProps) {
  return (
    <a
      href={href}
      class={`flex items-center justify-center ${backgroundColour} rounded-2xl p-4 my-2 ${hoverBackgroundColour} ${hoverTextColour} ${textColour}`}
      target={target}
      rel={rel}
    >
      {children}
      <button class="w-full h-full">
        {text}
      </button>
    </a>
  );
}
