import { RenderType } from "../../../types/global/types.ts";
import LikedPosts from "./LikedPosts.tsx";
import SavedPosts from "./SavedPosts.tsx";
import * as Text from "../../../components/Text.tsx";

export default class Activity implements RenderType {
  likedPosts: LikedPosts = new LikedPosts();
  savedPosts: SavedPosts = new SavedPosts();

  render() {
    return (
      <>
        <Text.Heading>
          User Activity
        </Text.Heading>
        <br />
        {this.likedPosts.render()}
        <br />
        {this.savedPosts.render()}
        <br />
      </>
    );
  }
}
