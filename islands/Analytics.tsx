import { useEffect, useState } from "preact/hooks";
import { JSX } from "preact";
import { getFromIndexedDB } from "../utils/utils.ts";

interface SharedAnalyticsProps<T> {
  DataClass: new (data: any) => T;
  renderData: (data: T) => JSX.Element;
  title: string;
}

export default function Analytics<T>(
  { DataClass, renderData, title }: SharedAnalyticsProps<T>,
) {
  const [data, setData] = useState<T | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleStorageEvent = async () => {
      console.log("Storage event!");

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

    globalThis.addEventListener("storage", handleStorageEvent);

    return () => {
      globalThis.removeEventListener("storage", handleStorageEvent);
    };
  }, []);

  return (
    <div>
      {data ? renderData(data) : (
        <>
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
