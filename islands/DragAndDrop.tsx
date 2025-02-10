import { processFiles, storeInIndexedDB } from "../utils/utils.ts";

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
    } else {
      await storeInIndexedDB("uploadData", []);
    }

    globalThis.dispatchEvent(new Event("storage"));
  };

  const handleFolderUpload = async (event: any) => {
    const files: File[] = Array.from(event.target.files) as File[];
    const fileNames = files.map((file: File) => file.name).join(", ");
    console.log(`Selected files: ${fileNames}`);

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

  return (
    <>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border-2 border-dashed border-gray-300 rounded p-14 text-center w-full"
        >
          Drag and drop files here
        
        <input
          type="file"
          multiple
          onChange={handleFolderUpload}
          className="hidden"
          id="fileInput"
          ref={(input) => {
            if (input) {
              input.setAttribute("webkitdirectory", "true");
              input.setAttribute("directory", "true");
            }
          }}
        />
        <br />
        <label
          htmlFor="fileInput"
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          Select Folder
        </label>
        </div>
    </>
  );
}