import { ChildrenProps } from "../types/global/types.ts";

export default function Grid({ children }: ChildrenProps) {
  return (
    // md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
      {children}
    </div>
  );
}