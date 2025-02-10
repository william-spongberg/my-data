import { ChildrenProps } from "../types/global/types.ts"

export default function Text({ children }: ChildrenProps) {
    return (
      <p class="text-base sm:text-lg text-white mt-4 mb-4 text-center">
        {children}
      </p>
    )
}