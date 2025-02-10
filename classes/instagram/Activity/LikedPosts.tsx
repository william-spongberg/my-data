import { DataType, FileData } from "../../../types/global/types.ts";
import { Post } from "../../../types/instagram/types.ts";
import { convertUnixTimeToDate } from "../../../utils/utils.ts";
import LineChart from "../../../islands/LineChart.tsx";

export default class LikedPosts implements DataType {
  posts: Post[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.posts.length === 0) {
      return <p>
        No liked posts found.
      </p>;
    }
    return (
      <>
        <p>Liked Posts</p>
        {`You have liked ${this.posts.length} posts between ${
          convertUnixTimeToDate(this.posts[this.posts.length - 1].timestamp)
        } and ${convertUnixTimeToDate(this.posts[0].timestamp)}`}

        <LineChart
          id="LikedPosts"
          datasets={[{
            label: "Liked Posts",
            data: this.posts.reverse(),
            color: "rgba(75, 192, 192, 1)",
          }]}
        />
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.posts = jsonData.likes_media_likes.map((post: any) => {
      const stringMapData = post.string_list_data[0];
      return {
        author: post.title || "Unknown",
        href: stringMapData.href || "Unknown",
        timestamp: stringMapData.timestamp || 0,
      } as Post;
    });
  }
}
