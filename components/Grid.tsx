import { ChildrenProps } from "../types/global/types.ts";

export default function Grid({ children }: ChildrenProps) {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
      {children}
    </div>
  );
}