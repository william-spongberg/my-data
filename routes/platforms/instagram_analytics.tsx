import { InstagramData } from "../../components/instagram/classes.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { UploadProps } from "../../components/instagram/types.ts";
import { FileData } from "../../components/types.ts";
import { unzipFile } from "../../components/utils.ts";
import { MAX_ZIP_FILE_SIZE } from "../../components/constants.ts";

// TODO: make file uploading a reusable component
// TODO: show word cloud? would be cool to grab the logos of companies and show them in a word cloud

// file is uploaded through POST request, handled here
export const handler: Handlers<UploadProps> = {
  // ignore get requests
  async GET(_req, ctx) {
    return await ctx.render({
      message: undefined,
    });
  },
  // we do want to handle POST however
  async POST(req, ctx) {
    const form = await req.formData();
    const files = form.getAll("user-file") as File[];

    // check if files exist
    if (!files || !files[0] || files.length === 0) {
      return ctx.render({
        message: `Please try again`,
      });
    }

    // handle file data
    let total_size = 0;
    let fileDataArray: FileData[] = [];
    for (const file of files) {
      console.log(`File name: ${file.name}, File size: ${file.size} bytes`);
      total_size += file.size;

      // enforce allowed file types
      if (file.name.endsWith(".zip") || file.type === "application/zip") {
        // Deno deploy only has 1/2 GB of ram, so we can't unzip large files :(
        if (file.size > MAX_ZIP_FILE_SIZE) {
          return ctx.render({
            message:
              `File size is greater than 200MB, please upload a smaller file`,
          });
        }

        fileDataArray = fileDataArray.concat(await unzipFile(file));
      } else if (
        !(file.type === "application/json" || file.type === "text/plain" ||
          file.type === "text/csv" || file.type === "text/html")
      ) {
        return ctx.render({
          message: `Only json, txt, csv, html and zip files are supported. Please try again`,
        });
      } else {
        fileDataArray.push({
          text: await file.text(),
          name: file.name,
          type: file.type,
        });
      }
    }

    const totalSizeMB = (total_size / (1024 * 1024)).toFixed(2);
    console.log(`Total size of files: ${totalSizeMB} MB (${total_size} bytes)`);

    return ctx.render({
      message: `Files uploaded!`,
      uploadData: fileDataArray,
    });
  },
};

export default function InstagramAnalytics(
  { data }: PageProps<UploadProps>,
) {
  const { message, uploadData } = data;

  console.log(message);

  let instaData = null;
  if (uploadData) {
    instaData = new InstagramData(uploadData);
  }

  return (
    <div class="min-h-screen bg-light-blue-50">
      <div class="px-4 py-8 mx-auto bg-white">
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
    </div>
  );
}
