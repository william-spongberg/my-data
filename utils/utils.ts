import { FileData } from "./types.ts";
import JSZip from "npm:jszip";
import { Handlers } from "$fresh/server.ts";
import { UploadProps } from "../utils/instagram/types.ts";
import { MAX_ZIP_FILE_SIZE } from "../utils/constants.ts";

export async function unzipFile(file: File): Promise<FileData[]> {
  const fileDataArray: FileData[] = [];
  const zip = await JSZip.loadAsync(file);
  const files = zip.files;

  for (const filename in files) {
    if (Object.hasOwn(files, filename)) {
      const zipEntry = files[filename];
      // allow json, txt, csv, html
      if (
        !zipEntry.dir &&
        (filename.endsWith(".json") || filename.endsWith(".txt") ||
          filename.endsWith(".csv") || filename.endsWith(".html"))
      ) {
        const text = await zipEntry.async("text");
        // ignore path
        const name = filename.split("/").pop();
        let type = "text/plain";
        if (filename.endsWith(".json")) {
          type = "application/json";
        } else if (filename.endsWith(".csv")) {
          type = "text/csv";
        } else if (filename.endsWith(".html")) {
          type = "text/html";
        }
        fileDataArray.push({
          text,
          name: name || filename,
          type,
        });
      }
    }
  }

  return fileDataArray;
}

export function convertUnixTimeToDate(timestamp: number): Date {
  return new Date(timestamp * 1000);
}

export function randColour(): string {
  return `rgba(${Math.floor(Math.random() * 255)}, ${
    Math.floor(Math.random() * 255)
  }, ${Math.floor(Math.random() * 255)}, 1)`;
}

// file is uploaded through POST request, handled here
export const fileUploadHandler: Handlers<UploadProps> = {
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
              `${file.name} is greater than 5MB, please upload a smaller file`,
          });
        }

        fileDataArray = fileDataArray.concat(await unzipFile(file));
      } else if (
        !(file.type === "application/json" || file.type === "text/plain" ||
          file.type === "text/csv" || file.type === "text/html")
      ) {
        return ctx.render({
          message:
            `Only json, txt, csv, html and zip files are supported. Please try again`,
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
