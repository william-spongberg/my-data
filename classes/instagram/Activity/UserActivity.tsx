import { RenderType } from "../../../types/global/types.ts";
import LikedPosts from "./LikedPosts.tsx";
import SavedPosts from "./SavedPosts.tsx";

export default class Activity implements RenderType {
  likedPosts: LikedPosts = new LikedPosts();
  savedPosts: SavedPosts = new SavedPosts();

  render() {
    return (
      <>
        <p class="text-2xl">
          User Activity
        </p>
        <br />
        {this.likedPosts.render()}
        <br />
        {this.savedPosts.render()}
      </>
    );
  }
}