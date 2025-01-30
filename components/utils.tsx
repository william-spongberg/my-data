import { FileData } from "./interfaces.tsx";
import JSZip from "npm:jszip";

export async function unzipFile(file: File): Promise<FileData[]> {
  const fileDataArray: FileData[] = [];
  const zip = await JSZip.loadAsync(file);
  const files = zip.files;

  for (const filename in files) {
    if (Object.hasOwn(files, filename)) {
      const zipEntry = files[filename];
      // allow json, txt, csv, html
      if (!zipEntry.dir && (filename.endsWith(".json") || filename.endsWith(".txt") || filename.endsWith(".csv") || filename.endsWith(".html"))) {
        const text = await zipEntry.async("text");
        // ignore path
        const name = filename.split('/').pop();
        fileDataArray.push({
          text,
          name: name || filename,
          type: "application/json",
        });
      }
    }
  }

  return fileDataArray;
}

export function convertUnixTimeToDate(timestamp: number): Date {
  return new Date(timestamp * 1000);
}

// TODO: process timestamp number to Date object