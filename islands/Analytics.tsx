import { useEffect, useState } from "preact/hooks";
import { JSX } from "preact";
import { getFromIndexedDB } from "../global/utils.ts";
import * as Text from "../components/Text.tsx";
import { FileData } from "../global/types.ts";

interface SharedAnalyticsProps<T> {
  // class to be instantiated with data
  DataClass: new (data: FileData[]) => T;
  // method in data class to render data
  renderData: (data: T) => JSX.Element;
  subtitle: string;
}

export default function Analytics<T>(
  { DataClass, renderData, subtitle }: SharedAnalyticsProps<T>,
) {
  const [data, setData] = useState<T | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // make sure browser has been painted before loading data
  useEffect(() => {
    const handleStorageEvent = async () => {
      // load data from indexedDB
      const message = await getFromIndexedDB("message");
      const uploadData = await getFromIndexedDB("uploadData");

      if (message) {
        setMessage(message);
      } else {
        console.log("No message.");
      }
      if (uploadData && uploadData.length > 0) {
        setData(new DataClass(uploadData));
        console.log("Data loaded!");
      } else {
        console.log("No upload data.");
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
    <div class="w-full max-w-screen-md">
      {data ? renderData(data) : (
        <>
          <br />
          <Text.Small>
            {subtitle}
          </Text.Small>
          <br />
          <Text.Small textColour="text-orange-500">
            <i>
              {message}
            </i>
          </Text.Small>
          <br />
        </>
      )}
    </div>
  );
}
