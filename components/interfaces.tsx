import { JSX } from "preact/jsx-runtime";

// interfaces to be used by all platforms and components

// simplify file data, should only need this for now
export interface FileData {
  text: string;
  name: string;
  type: string;
}

export interface DataType {
  render(): JSX.Element;
  parse(fileData: FileData | FileData[]): void;
}