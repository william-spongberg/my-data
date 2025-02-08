import { Dropzone } from "https://esm.sh/dropzone";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function DragAndDrop() {
  if (!IS_BROWSER) {
    return <div></div>;
  }

  new Dropzone("dropzone", {
    paramName: "user-file",
    maxFileSize: 5,
    autoProcessQueue: false,
    init: function () {
      this.on("addedfile", function (file: any) {
        console.log("File added:", file);
      });
    },
  });

  return (
    <form
      method="post"
      action=""
      id="dropzone"
      encType="multipart/form-data"
      class="border-dashed border-2 border-gray-400 p-4 w-full text-center"
    >
      Drag and drop your files here or click to upload
    </form>
  );
}
