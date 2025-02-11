import { RenderType } from "../../../../types/global/types.ts";
import Impressions from "./Impressions.tsx";
import * as Text from "../../../../components/Text.tsx";

export default class ImpressionsInfo implements RenderType {
  ads_viewed: Impressions = new Impressions(
    undefined,
    "Ad Impressions",
    "impressions_history_ads_seen",
  );
  posts_viewed: Impressions = new Impressions(
    undefined,
    "Post Impressions",
    "impressions_history_posts_seen",
  );
  videos_watched: Impressions = new Impressions(
    undefined,
    "Video Impressions",
    "impressions_history_videos_watched",
  );

  render() {
    return (
      <>
        <Text.Heading>Ads and Topics</Text.Heading>
        <br />
        {this.ads_viewed?.render()}
        <br />
        {this.posts_viewed?.render()}
        <br />
        {this.videos_watched?.render()}
        <br />
      </>
    );
  }

  // for later if needed
  //posts_not_interested: PostsNotInterested;
  //profiles_not_interested: ProfilesNotInterested;
  //suggested_profiles: SuggestedProfiles;
}
