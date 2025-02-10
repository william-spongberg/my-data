import { ComponentChildren } from "preact";
import Footer from "./Footer.tsx";

interface PageProps {
  children: ComponentChildren;
  home?: boolean;
}

export default function Page({ home = false, children }: PageProps) {
  return (
    <div class="flex flex-col min-h-screen bg-white">
      <div class="flex-grow flex items-center justify-center px-4 sm:px-8">
        <div class="px-8 py-8 mx-auto bg-blue-400 rounded-2xl w-full sm:w-auto">
          <div class="max-w-screen-md px-4 mx-auto flex flex-col items-center">
            {children}
          </div>
        </div>
      </div>
      <Footer home={home} />
    </div>
  );
}
