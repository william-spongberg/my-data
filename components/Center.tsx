import { ChildrenProps } from "../global/types.ts";

export default function Center({ children }: ChildrenProps) {
  return (
    <div class="flex flex-col items-center px-4 py-4 sm:px-8">
      {children}
    </div>
  );
}
