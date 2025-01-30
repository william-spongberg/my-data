import { FileData } from "./interfaces.tsx";
import JSZip from "jszip";

export async function unzipFile(file: File): Promise<FileData[]> {
  const fileDataArray: FileData[] = [];
  const zip = await JSZip.loadAsync(file);
  const files = zip.files;

  for (const filename in files) {
    if (Object.hasOwn(files, filename)) {
      const zipEntry = files[filename];
      if (!zipEntry.dir && filename.endsWith(".json")) {
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

// TODO: process timestamp number to Date object