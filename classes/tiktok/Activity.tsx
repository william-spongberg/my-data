import * as Text from "../../components/Text.tsx";
import { RenderType } from "../../types/global/types.ts";
import BrowsingHistory from "./BrowsingHistory.tsx";

export default class Activity implements RenderType {
  history: BrowsingHistory = new BrowsingHistory();
  // comments
  // fav effects
  // fav hashtags
  // fav sounds
  // fav videos
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

  render() {
    return (
      <>
        <Text.Heading>Activity</Text.Heading>
        <br />
        {this.history.render()}
      </>
    );
  }
}
