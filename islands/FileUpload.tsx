import { useState } from "preact/hooks";

// TODO: allow zip folder uploads using https://deno.land/x/zip@v1.2.5

export interface FileUploadProps {
  handleSubmit: (file: File) => Promise<void>;
}

// allow to handle file submission whatever way you like
export function FileUpload({ handleSubmit }: Readonly<FileUploadProps>) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      setFile(target.files[0]);
    }
  };

  // FIXME: why is this never logging??
  const onSubmit = async (e: Event) => {
    e.preventDefault();
    console.log("submitting");
    
    if (!file) return;
    console.log("file", file);
    await handleSubmit(file);
  };

  return (
    <form onSubmit={onSubmit} class="w-full max-w-sm">
      <input type="file" onChange={handleFileChange} class="mb-4" />
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">
        Upload
      </button>
    </form>
  );
}
