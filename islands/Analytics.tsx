import { useEffect, useState } from "preact/hooks";
import { JSX } from "preact";

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

  const getFromIndexedDB = (key: string): Promise<any> => {
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
  };

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