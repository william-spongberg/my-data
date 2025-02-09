// breaking up folder format into objects for now so user can choose what and what not to uplaod.
// platforms hopefully shouldn't change their data structures too much...
// while processing, if any data is broken, ignore it? allow null for unimportant stuff

// *NOTE: timestamps are in unix time (milliseconds)

import { FileData } from "../global/types.ts";

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

export interface Log {
  name: string;
  events: LogEvent[];
}

export interface LogEvent {
  type: EventType;
  timestamp: number;
}

export interface Impression {
  author: string;
  timestamp: number;
}

export interface Avertiser {
  name: string;
  has_data_file_on_you: boolean;
  has_remarketing: boolean;
  has_in_person_store_visit: boolean;
}

export interface Category {
  name: string;
}

export interface Post {
  author: string;
  href: string;
  timestamp: number;
}

export interface Device {
  name: string;
  timestamp: number;
}
