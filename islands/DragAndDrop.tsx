import { processFiles } from "../utils/utils.ts";

export default function DragAndDrop() {
  const handleDrop = async (event: any) => {
    event.preventDefault();
    const items = Array.from(event.dataTransfer.items);
    const files: File[] = [];

    for (const item of items) {
      if (item.kind === "file") {
        const entry = item.webkitGetAsEntry();
        if (entry.isFile) {
          files.push(item.getAsFile());
        } else if (entry.isDirectory) {
          await readDirectory(entry, files);
        }
      }
    }

    const fileNames = files.map((file: File) => file.name).join(", ");
    console.log(`Dropped files: ${fileNames}`);

    const { message, uploadData } = await processFiles(files);

    console.log("Message:", message);
    console.log("Upload data:", uploadData);

    await storeInIndexedDB("message", message);
    if (uploadData.length > 0) {
      await storeInIndexedDB("uploadData", uploadData);
    }

    console.log("Message + Storage updated!");

    globalThis.dispatchEvent(new Event("storage"));
  };

  const readDirectory = (directory: any, files: File[]) => {
    return new Promise<void>((resolve, reject) => {
      const reader = directory.createReader();
      reader.readEntries(async (entries: any[]) => {
        try {
          for (const entry of entries) {
            if (entry.isFile) {
              files.push(await getFile(entry));
            } else if (entry.isDirectory) {
              await readDirectory(entry, files);
            }
          }
          resolve();
        } catch (error) {
          console.error("Error reading directory:", error);
          reject(error);
        }
      });
    });
  };

  const getFile = (entry: any) => {
    return new Promise<File>((resolve, reject) => {
      entry.file((file: File) => {
        resolve(file);
      }, (error: any) => {
        console.error("Error getting file:", error);
        reject(error);
      });
    });
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    console.log("dragging over");
  };

  const storeInIndexedDB = (key: string, value: any) => {
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
  };

  return (
    <>
      <form
        action=""
        method="post"
        className="dropzone"
      >
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          class="border-2 border-dashed border-gray-300 rounded p-10 text-center"
        >
          Drag and drop files here
        </div>
      </form>
    </>
  );
}