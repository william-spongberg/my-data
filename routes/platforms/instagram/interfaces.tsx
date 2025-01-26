// breaking up folder format into objects for now so user can choose what and what not to uplaod.
// platforms hopefully shouldn't change their data structures too much...

// while processing, if any data is broken, ignore it? allow null for unimportant stuff

export interface InstagramData {
  ads_information: AdsInformation;
  your_activity: YourActivity;
}

export interface YourActivity {
  activites: Activity[];
}

export interface Activity {
  name: string;
  events: ActivityEvent[];
}

export interface ActivityEvent {
  //id: number; // not sure if needed
  type: EventType;
  timestamp: string;
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
}

export interface AdsInformation {
  ads_and_topics: AdsAndTopics;
  instagram_ads: InstagramAds;
}

export interface AdsAndTopics {
  ads_viewed: AdsViewed;
  posts_viewed: PostsViewed;
  // TODOS for later if needed
  //posts_not_interested: PostsNotInterested;
  //profiles_not_interested: ProfilesNotInterested;
  //suggested_profiles: SuggestedProfiles;
  videos_watched: VideosWatched;
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

export interface AdsViewed {
  ad_impressions: Impression[];
}

export interface PostsViewed {
  post_impressions: Impression[];
}

export interface VideosWatched {
  video_impressions: Impression[];
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
