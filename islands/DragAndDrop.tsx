import { storeFiles } from "../global/utils.ts";
import * as Text from "../components/Text.tsx";

export default function DragAndDrop() {
  // called after dropping files into drag area
  const handleDrop = async (event: any) => {
    event.preventDefault();
    const items = Array.from(event.dataTransfer.items);
    const files: File[] = [];

    // loop through all items and get files
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

    await storeFiles(files);
  };

  // called after clicking on the drag area
  const handleFolderUpload = async (event: any) => {
    const files: File[] = Array.from(event.target.files) as File[];

    await storeFiles(files);
  };

  // recursively read directory and get files
  const readDirectory = (directory: any, files: File[]) => {
    return new Promise<void>((resolve, reject) => {
      const reader = directory.createReader();
      reader.readEntries(async (entries: any[]) => {
        try {
          for (const entry of entries) {
            // if is file, add to files array
            if (entry.isFile) {
              files.push(await getFile(entry));
              // else if is directory, recursively read directory
            } else if (entry.isDirectory) {
              await readDirectory(entry, files);
            }
          }
          // yay resolved promise
          resolve();
        } catch (error) {
          // if error, reject the promise we made
          console.error("Error reading directory:", error);
          reject(error);
        }
      });
    });
  };

  // try to get file from entry
  const getFile = (entry: any) => {
    return new Promise<File>((resolve, reject) => {
      entry.file((file: File) => {
        // yay resolved promise
        resolve(file);
      }, (error: any) => {
        // if error, reject the promise we made
        console.error("Error getting file:", error);
        reject(error);
      });
    });
  };

  // log when dragging over
  const handleDragOver = (event: any) => {
    event.preventDefault();
    console.log("dragging over");
  };

  // drag area acts also as button for folder upload
  return (
    <>
      <label
        htmlFor="fileInput"
        class="border-2 border-dashed border-gray-300 rounded p-14 text-center w-full cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Text.Paragraph textColour="text-gray-300">
          Drag and drop files here or click to select a folder
        </Text.Paragraph>
        <input
          type="file"
          multiple
          onChange={handleFolderUpload}
          class="hidden"
          id="fileInput"
          ref={(input) => {
            if (input) {
              input.setAttribute("webkitdirectory", "true");
              input.setAttribute("directory", "true");
            }
          }}
        />
      </label>
    </>
  );
}
