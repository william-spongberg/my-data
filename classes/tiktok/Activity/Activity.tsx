import * as Text from "../../../components/Text.tsx";
import { DataType, FileData } from "../../../global/types.ts";
import WatchHistory from "./WatchHistory.tsx";
import LoginHistory from "./LoginHistory.tsx";
import LikedTikToks from "./LikedTikToks.tsx";
import FavouriteTikToks from "./FavouriteTikToks.tsx";

export default class Activity implements DataType {
  watchHistory: WatchHistory = new WatchHistory();
  loginHistory: LoginHistory = new LoginHistory();
  likedTikToks: LikedTikToks = new LikedTikToks();
  favouriteTikToks: FavouriteTikToks = new FavouriteTikToks();

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  // followers
  // following
  // hashtag
  // like list
  // location reviews
  // login history
  // purchases
  // searches
  // share history
  // status

  parse(fileData: FileData): void {
    this.watchHistory.parse(fileData);
    this.loginHistory.parse(fileData);
    this.likedTikToks.parse(fileData);
    this.favouriteTikToks.parse(fileData);
  }

  render() {
    return (
      <>
        <Text.Heading>Activity</Text.Heading>
        <br />
        {this.watchHistory.render()}
        <br />
        {this.loginHistory.render()}
        <br />
        {this.likedTikToks.render()}
        <br />
        {this.favouriteTikToks.render()}
      </>
    );
  }
}
