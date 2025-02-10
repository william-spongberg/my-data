import { ChildrenProps } from "../types/global/types.ts";

export default function Title({ children }: ChildrenProps) {
  return (
    <h1 class="text-2xl sm:text-4xl font-bold text-white text-center">
      {children}
    </h1>
  );
}
