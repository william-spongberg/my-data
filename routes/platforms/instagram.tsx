import { InstagramData } from "../../islands/instagram/classes.tsx";
import { PageProps } from "$fresh/server.ts";
import { UploadProps } from "../../utils/instagram/types.ts";
import { fileUploadHandler as handler } from "../../utils/utils.ts";
import Footer from "../../components/Footer.tsx";
import DragAndDrop from "../../islands/DragAndDrop.tsx";

// TODO: show word cloud? would be cool to grab the logos of companies and show them in a word cloud

export { handler };

export default function InstagramRoute(
  props: PageProps<UploadProps>,
) {
  let instaData = null;
  let message = null;

  if (props.data) {

    const { message, uploadData } = props.data;

    if (message) {
      console.log(message);
    }
    if (uploadData) {
      instaData = new InstagramData(uploadData);
    }
  }

  return (
    <div class="flex flex-col min-h-screen bg-white">
      <div class="flex-grow flex items-center justify-center">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center w-full">
          <h1 class="text-4xl font-bold">Instagram Analytics</h1>
          <br />
          {instaData
            ? (
              instaData.render()
            )
            : (
              <>
                <p class="text-lg mt mb-4-4">
                  What data does Instagram have on you?
                </p>
                <br />
                <form method="post" encType="multipart/form-data">
                  <input
                    type="file"
                    accept=".json, .html, .txt, .csv, .zip"
                    name="user-file"
                    class="mb-4"
                    multiple
                  />
                  <button
                    type="submit"
                    class="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Upload
                  </button>

                  <p class="text-lg mt-4 mb-4">{message}</p>
                  <br />
                </form>
                {/* <DragAndDrop /> */}
              </>
            )}
          <footer class="mt-8">
            <a
              href="/"
              class="text-blue-500 hover:underline"
            >
              Go back Home
            </a>
          </footer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
