import { ComponentChildren } from "preact";
import Footer from "../components/Footer.tsx";

interface PlatformProps {
  title: string;
  children: ComponentChildren;
}

export default function Platform({ title, children }: PlatformProps) {
  return (
    <div class="flex flex-col min-h-screen bg-white">
      <div class="flex-grow flex items-center justify-center">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center w-full">
          <h1 class="text-4xl font-bold">{title}</h1>
          <br />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
