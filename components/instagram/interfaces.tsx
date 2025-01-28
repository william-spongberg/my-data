// breaking up folder format into objects for now so user can choose what and what not to uplaod.
// platforms hopefully shouldn't change their data structures too much...
// while processing, if any data is broken, ignore it? allow null for unimportant stuff

import { JSX } from "preact/jsx-runtime";

// TODO: convert to classes

// *NOTE: timestamps are in unix time

// simplify file data, should only need this for now
export interface FileData {
  text: string;
  name: string;
  type: string;
}

export interface InstagramDataType {
  render(): JSX.Element;
  parse(fileData: FileData): void;
}

export interface Activity {
  name: string;
  events: ActivityEvent[];
}

export interface ActivityEvent {
  //id: number; only needed if timestamp and event type both overlap somehow. doubtful
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
  SUBSCRIBE = "SUBSCRIBE"
}

export interface AdsInformation {
  ads_and_topics: AdsAndTopics;
  instagram_ads: InstagramAds;
}

export interface AdsAndTopics {
  ads_viewed: Impression[];
  posts_viewed: Impression[];
  // TODOS for later if needed
  //posts_not_interested: PostsNotInterested;
  //profiles_not_interested: ProfilesNotInterested;
  //suggested_profiles: SuggestedProfiles;
  videos_watched: Impression[];
}

export interface InstagramAds {
  //ads_about_meta: AdsAboutMeta;
  advertisers_using_your_data: AdvertisersUsingData;
  categories_used_to_reach_you: CategoriesUsedToReachYou;
}

export interface Impression {
  author: string;
  timestamp: string;
}

export interface AdvertisersUsingData {
  advertisers: AvertiserInfo[];
}

export interface AvertiserInfo {
  name: string;
  has_data_file_on_you: boolean;
  has_remarketing: boolean;
  has_in_person_store_visit: boolean;
}

export interface CategoriesUsedToReachYou {
  categories: Category[];
}

export interface Category {
  name: string;
}
