export interface Login {
  timestamp: number;
  IP: string;
  DeviceModel: string;
  DeviceSystem: string;
  NetworkType: string;
  Carrier: string;
}

////////////////////////////////////////////

interface RootObject {
  Activity: Activity;
  'Ads and data': AdsAndData;
  'App Settings': AppSettings;
  Comment: Comment;
  'Direct Messages': DirectMessages;
  'Income Plus Wallet Transactions': IncomePlusWalletTransactions;
  'Poi Review': PoiReview;
  Profile: Profile;
  'Tiktok Live': TiktokLive;
  'Tiktok Shopping': TiktokShopping;
  Video: Video;
}

interface Video {
  RecentlyDeletedPosts: RecentlyDeletedPosts;
  Videos: Videos;
}

interface Videos {
  VideoList: VideoList[];
}

interface VideoList {
  Date: string;
  Link: string;
  Likes: string;
  WhoCanView: string;
  AllowComments: string;
  AllowStitches: string;
  AllowDuets: string;
  AllowStickers: string;
  AllowSharingToStory: string;
  ContentDisclosure: string;
  AIGeneratedContent: string;
  Sound: string;
  Location: string;
  Title: string;
  AddYoursText: string;
}

interface RecentlyDeletedPosts {
  PostList: null;
}

interface TiktokShopping {
  'Communication History': CommunicationHistory;
  'Current Payment Information': CurrentPaymentInformation;
  'Customer Support History': CustomerSupportHistory;
  'Order Dispute History': OrderDisputeHistory;
  'Order History': OrderHistory;
  'Product Browsing History': ProductBrowsingHistory;
  'Product Review History': ProductReviewHistory;
  'Return and Refund History': ReturnAndRefundHistory;
  'Saved Address Information': SavedAddressInformation;
  'Shopping Cart List': ShoppingCartList;
  Vouchers: Vouchers;
}

interface Vouchers {
  Vouchers: null;
}

interface ShoppingCartList {
  ShoppingCart: null;
}

interface SavedAddressInformation {
  SavedAddress: null;
}

interface ReturnAndRefundHistory {
  ReturnAndRefundHistories: null;
}

interface ProductReviewHistory {
  ProductReviewHistories: null;
}

interface ProductBrowsingHistory {
  ProductBrowsingHistories: null;
}

interface OrderHistory {
  OrderHistories: null;
}

interface OrderDisputeHistory {
  OrderDisputeHistories: null;
}

interface CustomerSupportHistory {
  CustomerSupportHistories: null;
}

interface CurrentPaymentInformation {
  PayCard: null;
}

interface CommunicationHistory {
  CommunicationHistories: null;
}

interface TiktokLive {
  'Go Live History': GoLiveHistory;
  'Go Live Settings': GoLiveSettings;
  'Watch Live History': WatchLiveHistory;
  'Watch Live Settings': WatchLiveSettings;
}

interface WatchLiveSettings {
  WatchLiveSettingsMap: WatchLiveSettingsMap;
  MostRecentModificationTimeInApp: string;
  MostRecentModificationTimeInWeb: string;
}

interface WatchLiveSettingsMap {
  app: string;
  web: string;
}

interface WatchLiveHistory {
  WatchLiveMap: WatchLiveMap;
}

interface WatchLiveMap {
  '7404828493579684628': _7404828493579684628;
  '7404831826866326290': _7404828493579684628;
  '7404834704769256199': _7404828493579684628;
  '7408659936743279406': _7404828493579684628;
  '7408673187006778119': _7404828493579684628;
  '7420680927859460870': _7404828493579684628;
  '7422935253372717832': _7404828493579684628;
  '7422940730013928199': _7404828493579684628;
  '7427055646060661522': _7404828493579684628;
  '7432508651366992645': _7404828493579684628;
  '7442033636215950136': _7404828493579684628;
  '7443052055476079416': _7404828493579684628;
  '7451940433686727470': _7404828493579684628;
  '7459763331956558624': _7404828493579684628;
  '7461881543168838407': _7404828493579684628;
  '7461888671064836871': _7404828493579684628;
  '7467532052575718152': _7404828493579684628;
}

interface _7404828493579684628 {
  Comments: Comment2[];
  Questions: null;
  WatchTime: string;
  Link: string;
}

interface Comment2 {
  CommentTime: string;
  CommentContent: string;
  RawTime: number;
}

interface GoLiveSettings {
  SettingsMap: SettingsMap2;
}

interface SettingsMap2 {
  'Allow agencies to find and invite you': string;
  'Allow others to invite you to co-host in LIVE': string;
  'Allow people to send and receive comments during your LIVE': string;
  'Allow suggested LIVE hosts to invite you to co-host in LIVE': string;
  'Allow viewers to request to go LIVE with you': string;
  'Allow viewers to see and send questions and answers in your LIVE': string;
  'Allow viewers to send you gifts during your LIVE': string;
  'Hide comments that contain the following keywords from your LIVE': any[];
  'Hide potential spam or offensive comments from your LIVE': string;
  'People you assigned to moderate your LIVE': any[];
  'Show your username and gift information in features with ranking lists': string;
}

interface GoLiveHistory {
  GoLiveList: null;
}

interface Profile {
  AIMoji: AIMoji;
  'Auto Fill': AutoFill;
  'Profile Information': ProfileInformation;
}

interface ProfileInformation {
  App: number;
  ProfileMap: ProfileMap;
}

interface ProfileMap {
  PlatformInfo: any[];
  bioDescription: string;
  birthDate: string;
  emailAddress: string;
  likesReceived: string;
  profilePhoto: string;
  profileVideo: string;
  telephoneNumber: string;
  userName: string;
}

interface AutoFill {
  PhoneNumber: string;
  Email: string;
  FirstName: string;
  LastName: string;
  Address: string;
  ZipCode: string;
  Unit: string;
  City: string;
  State: string;
  Country: string;
}

interface AIMoji {
  CreateDate: string;
  AIMojiList: null;
}

interface PoiReview {
  'POI Review': POIReview;
}

interface POIReview {
  ReviewsList: null;
}

interface IncomePlusWalletTransactions {
  'Income Plus Wallet Transaction': IncomePlusWalletTransaction;
}

interface IncomePlusWalletTransaction {
  TransactionsList: null;
}

interface DirectMessages {
  'Chat History': ChatHistory2;
}

interface ChatHistory2 {
  ChatHistory: ChatHistory;
}

interface ChatHistory {
  'Chat History with albasneezy:': ChatHistoryWithAlbasneezy[];
  'Chat History with declan.aaaaaaa:': ChatHistoryWithAlbasneezy[];
  'Chat History with feralmogul:': ChatHistoryWithAlbasneezy[];
  'Chat History with freyacate:': ChatHistoryWithAlbasneezy[];
  'Chat History with karli.q_2002:': ChatHistoryWithAlbasneezy[];
  'Chat History with livlivlivlivlivliv5000:': ChatHistoryWithAlbasneezy[];
  'Chat History with microwave1012:': ChatHistoryWithAlbasneezy[];
  'Chat History with str4wberryfieldsf0r3ver:': ChatHistoryWithAlbasneezy[];
  'Chat History with superficialswirls:': ChatHistoryWithAlbasneezy[];
}

interface ChatHistoryWithAlbasneezy {
  Date: string;
  From: string;
  Content: string;
}

interface Comment {
  Comments: Comments;
}

interface Comments {
  App: number;
  CommentsList: CommentsList[];
}

interface CommentsList {
  date: string;
  comment: string;
  photo: string;
  url: string;
}

interface AppSettings {
  Block: Block;
  Settings: Settings;
}

interface Settings {
  App: number;
  SettingsMap: SettingsMap;
}

interface SettingsMap {
  'Allow DownLoad': string;
  'Allow Others to Find Me': string;
  'App Language': string;
  'Content Preferences': ContentPreferences;
  'Family Content Preferences': FamilyContentPreferences;
  'Filter Comments': string;
  Interests: string;
  'Personalized Ads': string;
  'Private Account': string;
  'Push Notification': PushNotification;
  'Suggest your account to Facebook friends': string;
  'Suggest your account to contacts': string;
  'Suggest your account to people who open or send links to you': string;
  'Web Language': string;
  'Who Can Duet With Me': string;
  'Who Can Post Comments': string;
  'Who Can Send Me Message': string;
  'Who Can Stitch with your videos': string;
  'Who Can View Videos I Liked': string;
}

interface PushNotification {
  'Desktop notification': string;
  'New Comments on My Video': string;
  'New Fans': string;
  'New Likes on My Video': string;
}

interface FamilyContentPreferences {
}

interface ContentPreferences {
  'Keyword filters for videos in Following feed': null;
  'Keyword filters for videos in For You feed': null;
  'Video Languages Preferences': null;
}

interface Block {
  App: number;
  BlockList: FansList[];
}

interface AdsAndData {
  'Instant Form Ads Responses': InstantFormAdsResponses;
  'Off TikTok Activity': OffTikTokActivity;
}

interface OffTikTokActivity {
  OffTikTokActivityDataList: OffTikTokActivityDataList[];
}

interface OffTikTokActivityDataList {
  TimeStamp: string;
  Source: string;
  Event: string;
}

interface InstantFormAdsResponses {
  ResponsesList: null;
}

interface Activity {
  'Favorite Effects': FavoriteEffects;
  'Favorite Hashtags': FavoriteHashtags;
  'Favorite Sounds': FavoriteSounds;
  'Favorite Videos': FavoriteVideos;
  'Follower List': FollowerList;
  'Following List': FollowingList;
  Hashtag: Hashtag;
  'Like List': LikeList;
  'Login History': LoginHistory;
  'Purchase History': PurchaseHistory;
  'Search History': SearchHistory;
  'Share History': ShareHistory;
  Status: Status;
  'Video Browsing History': VideoBrowsingHistory;
}

interface VideoBrowsingHistory {
  VideoList: FavoriteSoundList[];
}

interface Status {
  'Status List': StatusList[];
}

interface StatusList {
  Resolution: string;
  'App Version': string;
  IDFA: string;
  GAID: string;
  'Android ID': string;
  IDFV: string;
  'Web ID': string;
}

interface ShareHistory {
  ShareHistoryList: ShareHistoryList[];
}

interface ShareHistoryList {
  Date: string;
  SharedContent: string;
  Link: string;
  Method: string;
}

interface SearchHistory {
  SearchList: SearchList[];
}

interface SearchList {
  Date: string;
  SearchTerm: string;
}

interface PurchaseHistory {
  SendGifts: SendGifts;
  BuyGifts: BuyGifts;
}

interface BuyGifts {
  BuyGifts: null;
}

interface SendGifts {
  SendGifts: null;
}

interface LoginHistory {
  LoginHistoryList: LoginHistoryList[];
}

interface LoginHistoryList {
  Date: string;
  IP: string;
  DeviceModel: string;
  DeviceSystem: string;
  NetworkType: string;
  Carrier: string;
}

interface LikeList {
  App: number;
  ItemFavoriteList: ItemFavoriteList[];
}

interface ItemFavoriteList {
  date: string;
  link: string;
}

interface Hashtag {
  HashtagList: null;
}

interface FollowingList {
  App: number;
  IsFastLane: boolean;
  Following: FansList[];
}

interface FollowerList {
  App: number;
  IsFastLane: boolean;
  FansList: FansList[];
}

interface FansList {
  Date: string;
  UserName: string;
}

interface FavoriteVideos {
  App: number;
  FavoriteVideoList: FavoriteSoundList[];
}

interface FavoriteSounds {
  FavoriteSoundList: FavoriteSoundList[];
}

interface FavoriteSoundList {
  Date: string;
  Link: string;
}

interface FavoriteHashtags {
  FavoriteHashtagList: null;
}

interface FavoriteEffects {
  FavoriteEffectsList: FavoriteEffectsList[];
}

interface FavoriteEffectsList {
  Date: string;
  EffectLink: string;
}