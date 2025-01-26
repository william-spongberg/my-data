// rename this file to something else? dont love /instagram/instagram tbh

// TODO: allow zip folder uploads using https://deno.land/x/zip@v1.2.5
// TODO: enforce file types, max file size, etc
// TODO: drag and drop files instead - use package for this
// TODO: make file uploading a reusable component

import { Handlers, PageProps } from "$fresh/server.ts";
import { FileData } from "../../../components/instagram/interfaces.tsx";
import { handleFileData } from "../../../components/instagram/utils.tsx";

interface Props {
  message: string | null;
}

// file is uploaded through POST request, handled here
export const handler: Handlers<Props> = {
  // ignore get requests
  async GET(_req, ctx) {
    return await ctx.render({
      message: null,
    });
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const file = form.get("user-file") as File;

    // check if file exists
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

    // do analytics and processing stuff
    handleFileData(fileData);

    return ctx.render({
      message: `[${fileData.name}] uploaded!`,
    });
  },
};

export default function Upload(props: PageProps<Props>) {
  const { message } = props.data;
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
        {message ? <p>{message}</p> : null}
      </div>
    </div>
  );
}
