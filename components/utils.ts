import { FileData } from "./types.ts";
import JSZip from "npm:jszip";

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
