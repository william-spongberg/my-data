import { RenderType } from "../../../../types/global/types.ts";
import AdImpressions from "./AdImpressions.tsx";
import PostImpressions from "./PostImpressions.tsx";
import VideoImpressions from "./VideoImpressions.tsx";

export default class Impressions implements RenderType {
  ads_viewed: AdImpressions = new AdImpressions();
  posts_viewed: PostImpressions = new PostImpressions();
  videos_watched: VideoImpressions = new VideoImpressions();

  render() {
    return (
      <>
        <p class="text-xl">Ads and Topics</p>
        {this.ads_viewed?.render()}
        <br />
        {this.posts_viewed?.render()}
        <br />
        {this.videos_watched?.render()}
      </>
    );
  }

  // for later if needed
  //posts_not_interested: PostsNotInterested;
  //profiles_not_interested: ProfilesNotInterested;
  //suggested_profiles: SuggestedProfiles;
}