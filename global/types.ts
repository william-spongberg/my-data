import { ComponentChildren } from "preact";
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

export interface UploadProps {
  message?: string;
  uploadData?: FileData[];
}

export interface ChildrenProps {
  children: ComponentChildren
}

export interface Log {
  data: string;
  timestamp: number;
}

export interface ExternalLog {
  name: string;
  events: ExternalEvent[];
}

export interface ExternalEvent {
  type: EventType;
  timestamp: number;
}

export enum EventType {
  PAGE_VIEW = "PAGE_VIEW",
  CUSTOM = "CUSTOM",
  ACTIVATE_APP = "ACTIVATE_APP",
  AD_REQUEST = "AD_REQUEST",
  AD_IMPRESSION = "AD_IMPRESSION",
  VIEW_CONTENT = "VIEW_CONTENT",
  SEARCH = "SEARCH",
  PURCHASE = "PURCHASE",
  TOSIMPRESSION = "TOSIMPRESSION",
  IMPRESSION = "IMPRESSION",
  RESULT_SENT = "RESULT_SENT",
  LEAD = "LEAD",
  ADD_TO_CART = "ADD_TO_CART",
  TUTORIAL_COMPLETION = "TUTORIAL_COMPLETION",
  LEVEL_ACHIEVED = "LEVEL_ACHIEVED",
  ACHIEVEMENT_UNLOCKED = "ACHIEVEMENT_UNLOCKED",
  INITIATE_CHECKOUT = "INITIATE_CHECKOUT",
  GEN_RESPONSE = "GEN_RESPONSE",
  COMPLETE_REGISTRATION = "COMPLETE_REGISTRATION",
  ADD_TO_WISHLIST = "ADD_TO_WISHLIST",
  FIND_LOCATION = "FIND_LOCATION",
  SUBSCRIBE = "SUBSCRIBE",
}