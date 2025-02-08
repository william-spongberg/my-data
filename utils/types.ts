import { JSX } from "preact/jsx-runtime";

export interface FileData {
  text: string;
  name: string;
  type: string;
}

export interface DataType {
  render(): JSX.Element;
  parse(fileData: FileData | FileData[]): void;
}

export interface RenderType {
  render(): JSX.Element;
}
