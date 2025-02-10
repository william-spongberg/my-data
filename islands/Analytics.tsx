import { useEffect, useState } from "preact/hooks";
import { JSX } from "preact";
import { getFromIndexedDB } from "../utils/utils.ts";

interface SharedAnalyticsProps<T> {
  // class to be instantiated with data
  DataClass: new (data: any) => T;
  // method in data class to render data
  renderData: (data: T) => JSX.Element;
  title: string;
}

export default function Analytics<T>(
  { DataClass, renderData, title }: SharedAnalyticsProps<T>,
) {
  const [data, setData] = useState<T | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // make sure browser has been painted before loading data
  useEffect(() => {
    const handleStorageEvent = async () => {
      console.log("Storage event!");

      // load data from indexedDB
      const message = await getFromIndexedDB("message");
      const uploadData = await getFromIndexedDB("uploadData");

      if (message) {
        console.log(message);
        setMessage(message);
      } else {
        console.log("No message");
      }
      if (uploadData && uploadData.length > 0) {
        setData(new DataClass(uploadData));
        console.log("Data loaded!");
      } else {
        console.log("No upload data");
      }
    };

    // listen for storage events
    globalThis.addEventListener("storage", handleStorageEvent);

    // kill listener when finished
    return () => {
      globalThis.removeEventListener("storage", handleStorageEvent);
    };
  }, []);

  return (
    <div>
      {data ? renderData(data) : (
        <>
          <br />
          <p class="text-lg">
            {title}
          </p>
          <br />
          <p class="text-sm">
            {message}
          </p>
          <br />
        </>
      )}
    </div>
  );
}
