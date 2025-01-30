import { FileData } from "../../components/interfaces.tsx";
import { InstagramData } from "../../components/instagram/classes.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { instaFolders } from "../../components/instagram/constants.tsx";
import { InstagramAnalyticsProps } from "../../components/instagram/interfaces.tsx";
import { unzipFile } from "../../components/utils.tsx";

// file is uploaded through POST request, handled here
export const handler: Handlers<InstagramAnalyticsProps> = {
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
    let fileDataArray: FileData[] = [];
    for (const file of files) {
      // Deno deploy only has 1/2 GB of ram, so we can't unzip large files :(
      // fileDataArray = fileDataArray.concat(await unzipFile(file));
      // for now, just ignore zip files
      if (file.name.endsWith(".zip") || file.type === "application/zip") {
        return ctx.render({
          message: `Zip files are not supported`,
        });
        // enforce allowed file types
      } else if (
        !(file.type === "application/json" || file.type === "text/plain" ||
          file.type === "text/csv" || file.type === "text/html")
      ) {
        return ctx.render({
          message: `Only json, txt, csv, and html files are supported`,
        });
      } else {
        fileDataArray.push({
          text: await file.text(),
          name: file.name,
          type: file.type,
        });
      }
    }

    // parse fileData
    const instaData = new InstagramData(fileDataArray);

    // if no valid data, return error message
    if (!instaData) {
      return ctx.render({
        message: `Invalid file(s)`,
      });
    }

    const result: InstagramAnalyticsProps = {
      message: "Files uploaded",
      instaData: instaData,
    };

    return ctx.render(result);
  },
};

export default function InstagramAnalytics(
  { data }: PageProps<InstagramAnalyticsProps>,
) {
  const { message, instaData } = data;

  if (message) {
    console.log(message);
  }

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
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
                  accept=".json, .html, .txt, .csv"
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
                <p class="text-sm mt mb-4-4">
                  Sorry, due to Deno Deploy limitations only individual files
                  are allowed at this time. Zipped files are not supported.
                </p>
                <br />
                <pre class="mt-4 mb-4 overflow-x-auto max-w-full text-sm">
                  {instaFolders}
                </pre>
              </form>
            </>
          )}
        <a
          href="/"
          class="text-blue-500 hover:underline mt-4"
        >
          Go back Home
        </a>
      </div>
    </div>
  );
}

// TODO: drag and drop files instead - use package for this
// TODO: make file uploading a reusable component

// TODO: show graphs, tables, etc (word cloud? would be cool to grab the logos of companies and show them in a word cloud)
