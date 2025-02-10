import { ComponentChildren } from "preact";

interface TitleProps {
  children: ComponentChildren;
}

export default function Title({ children }: TitleProps) {
  return (
    <h1 class="text-2xl sm:text-4xl font-bold text-white text-center">
      {children}
    </h1>
  );
}
