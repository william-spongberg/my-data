import { ChildrenProps } from "../types/global/types.ts";

export default function Heading({ children }: ChildrenProps) {
  return (
    <h2 class="text-xl sm:text-2xl font-bold text-white text-center">
      {children}
    </h2>
  );
}