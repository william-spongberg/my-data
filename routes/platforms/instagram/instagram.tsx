import { FileUpload } from "../../../islands/FileUpload.tsx";

// rename this file to something else? dont love instagram/instagram tbh

export default function Instagram() {
  console.log("Instagram time");
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">Instagram</h1>
        <p class="text-lg mt
        -4">
          What data does Instagram have on you?
        </p>
        <FileUpload handleSubmit={async (file: File) => {
          // handle file upload
          console.log(file.name);

          // perform method depending on file name yay
        }} />
      </div>
    </div>
  );
}
