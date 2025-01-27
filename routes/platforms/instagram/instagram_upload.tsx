// rename this file to something else? dont love /instagram/instagram tbh

// TODO: allow zip folder uploads using https://deno.land/x/zip@v1.2.5
// TODO: drag and drop files instead - use package for this
// TODO: make file uploading a reusable component

// TODO: move to new page after uploading file and processing data - show analytics
// TODO: show graphs, tables, etc (word cloud? would be cool to grab the logos of companies and show them in a word cloud)

import { Handlers } from "$fresh/server.ts";
import { FileData } from "../../../components/instagram/interfaces.tsx";
import { convertFileData } from "../../../components/instagram/utils.tsx";

// file is uploaded through POST request, handled here
export const handler: Handlers = {
  // ignore get requests
  async GET(_req, ctx) {
    return await ctx.render({
      fileName: null,
    });
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const file = form.get("user-file") as File;

    // check if file exists
    // TODO: enforce file types, max file size, etc
    if (!file) {
      return ctx.render({
        fileName: `Please try again`,
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
        fileName: `Invalid file`,
      });
    }

    // using session storage - sec vulnerability to just pass data through URL
    // TODO: may change to KV store later
    sessionStorage.setItem("instagramData", JSON.stringify(instagramData));
    
    // go to new page to show analytics
    const url = new URL(req.url);
    url.pathname = "/platforms/instagram/instagram_analytics";

    // 303 status code to redirect to new page (POST-redirect-GET pattern)
    return Response.redirect(url.toString(), 303);
  },
};

export default function Upload() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold mb-4">Instagram</h1>
        <p class="text-lg mt mb-4
        -4">
          What data does Instagram have on you?
        </p>
        <form method="post" encType="multipart/form-data">
          <input type="file" name="user-file" class="mb-4"/>
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Upload</button>
        </form>
      </div>
    </div>
  );
}
