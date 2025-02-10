import { Handlers } from "$fresh/server.ts";
import { FileData, UploadProps } from "../types/global/types.ts";
import {
  MAX_FILE_SIZE_B,
  MAX_FILE_SIZE_MB,
} from "../constants/global/constants.ts";

export function convertUnixTimeToDate(timestamp: number): Date {
  return new Date(timestamp * 1000);
}

export function bytesToMBFormatter(bytes: number): number {
  return (bytes / (1024 * 1024));
}

// bright random colours
export function randColour(): string {
  const h = Math.floor(Math.random() * 360); // 0-359
  const s = Math.floor(Math.random() * 50) + 50; // 50-100%
  const l = Math.floor(Math.random() * 40) + 50; // 50-89%
  return `hsl(${h}, ${s}%, ${l}%)`;
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
    // enforce allowed file types
    if (
      !(file.type === "application/json" || file.type === "text/plain" ||
        file.type === "text/csv" || file.type === "text/html")
    ) {
      console.error(
        `${file.name} was not uploaded. Only json, txt, csv and html files are supported.`,
      );
    } else {
      fileDataArray.push({
        text: await file.text(),
        name: file.name,
        type: file.type,
      });

      console.log(`File name: ${file.name}, File size: ${file.size} bytes`);
      total_size += file.size;
    }
  }

  const totalSizeMB: number = bytesToMBFormatter(total_size);
  console.log(
    `Total size of files: ${totalSizeMB.toFixed(2)} MB (${total_size} bytes)`,
  );

  if (total_size > MAX_FILE_SIZE_B) {
    return {
      message: `Total file size of ${
        totalSizeMB.toFixed(2)
      } MB is greater than ${MAX_FILE_SIZE_MB} MB. Please try again`,
      uploadData: [],
    };
  }

  if (fileDataArray.length === 0) {
    return {
      message: `No files uploaded. Make sure to unzip your folder first`,
      uploadData: [],
    };
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

export function storeInIndexedDB(key: string, value: any) {
  return new Promise<void>((resolve, reject) => {
    const request = indexedDB.open("myDatabase", 1);

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("myStore")) {
        db.createObjectStore("myStore");
      }
    };

    request.onsuccess = (event: any) => {
      const db = event.target.result;
      const transaction = db.transaction("myStore", "readwrite");
      const store = transaction.objectStore("myStore");
      store.put(value, key);

      transaction.oncomplete = () => {
        resolve();
      };

      transaction.onerror = (error: any) => {
        console.error("Error storing data in IndexedDB:", error);
        reject(error);
      };
    };

    request.onerror = (error: any) => {
      console.error("Error opening IndexedDB:", error);
      reject(error);
    };
  });
}

export function getFromIndexedDB(key: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("myDatabase", 1);

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("myStore")) {
        db.createObjectStore("myStore");
      }
    };

    request.onsuccess = (event: any) => {
      const db = event.target.result;
      const transaction = db.transaction("myStore", "readonly");
      const store = transaction.objectStore("myStore");
      const getRequest = store.get(key);

      getRequest.onsuccess = () => {
        resolve(getRequest.result);
      };

      getRequest.onerror = (error: any) => {
        console.error("Error getting data from IndexedDB:", error);
        reject(error);
      };
    };

    request.onerror = (error: any) => {
      console.error("Error opening IndexedDB:", error);
      reject(error);
    };
  });
}
