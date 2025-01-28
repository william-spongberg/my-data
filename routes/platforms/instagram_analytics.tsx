import { FileData } from "../../components/instagram/interfaces.tsx";
import { InstagramData } from "../../components/instagram/classes.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { convertFileData } from "../../components/instagram/utils.tsx";

interface InstagramAnalyticsProps {
  message?: string;
  instaData?: InstagramData;
}

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
    const file = form.get("user-file") as File;

    // check if file exists
    // TODO: enforce file types, max file size, etc
    if (!file) {
      return ctx.render({
        message: `Please try again`,
      });
    }

    // handle file data
    const fileData: FileData = {
      text: await file.text(),
      name: file.name,
      type: file.type,
    };

    // parse fileData
    const instagramData = convertFileData(fileData);

    if (!instagramData) {
      return ctx.render({
        message: `Invalid file`,
      });
    }

    const result: InstagramAnalyticsProps = {
      message: "File uploaded",
      instaData: instagramData,
    }
  
    return ctx.render(result);
  },
};

export default function InstagramAnalytics({ data } : PageProps<InstagramAnalyticsProps>) {
  const { message, instaData } = data;

  if (message) {
    console.log(message);
  }

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center w-full">
        <h1 class="text-4xl font-bold">Instagram Analytics</h1>
        {instaData?.activities ? (
          instaData.activities.render()
        ) : (
          <>
            <p class="text-lg mt mb-4-4">What data does Instagram have on you?</p>
            <form method="post" encType="multipart/form-data">
              <input type="file" name="user-file" class="mb-4"/>
              <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Upload</button>
              <p class="text-lg mt-4 mb-4">{message}</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// rename this file to something else? dont love /instagram/instagram tbh

// TODO: allow zip folder uploads using https://deno.land/x/zip@v1.2.5
// TODO: drag and drop files instead - use package for this
// TODO: make file uploading a reusable component

// TODO: move to new page after uploading file and processing data - show analytics
// TODO: show graphs, tables, etc (word cloud? would be cool to grab the logos of companies and show them in a word cloud)