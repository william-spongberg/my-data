import { Handlers } from "$fresh/server.ts";
import { FileData, UploadProps } from "../types/global/types.ts";
import { MAX_FILE_SIZE_B, MAX_FILE_SIZE_MB } from "../constants/global/constants.ts";

export function convertUnixTimeToDate(timestamp: number): Date {
  return new Date(timestamp * 1000);
}

export function bytesToMBFormatter(bytes: number): number {
  return (bytes / (1024 * 1024));
}

export function randColour(): string {
  return `rgba(${Math.floor(Math.random() * 255)}, ${
    Math.floor(Math.random() * 255)
  }, ${Math.floor(Math.random() * 255)}, 1)`;
}

export async function processFiles(
  files: File[],
): Promise<{ message: string; uploadData: FileData[] }> {
  // check if files exist
  if (!files || !files[0] || files.length === 0) {
    return {
      message: `No files uploaded. Please try again`,
      uploadData: [],
    };
  }

  // handle file data
  let total_size = 0;
  let fileDataArray: FileData[] = [];
  for (const file of files) {
    console.log(`File name: ${file.name}, File size: ${file.size} bytes`);
    total_size += file.size;

    // enforce allowed file types
    if (
      !(file.type === "application/json" || file.type === "text/plain" ||
        file.type === "text/csv" || file.type === "text/html" ||
        file.type === "application/zip" || file.name.endsWith(".zip"))
    ) {
      return {
        message:
          `Only json, txt, csv and html files are supported. Please try again`,
        uploadData: [],
      };
    } else {
      fileDataArray.push({
        text: await file.text(),
        name: file.name,
        type: file.type,
      });
    }
  }

  const totalSizeMB: number = bytesToMBFormatter(total_size);
  console.log(`Total size of files: ${totalSizeMB.toFixed(2)} MB (${total_size} bytes)`);

  if (total_size > MAX_FILE_SIZE_B) {
    return {
      message: `Total file size of ${totalSizeMB.toFixed(2)} MB is greater than ${MAX_FILE_SIZE_MB} MB. Please try again`,
      uploadData: []
    }
  }

  return {
    message: `Files uploaded!`,
    uploadData: fileDataArray,
  };
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

    const { message, uploadData } = await processFiles(files);

    return ctx.render({
      message: message,
      uploadData: uploadData,
    });
  },
};
