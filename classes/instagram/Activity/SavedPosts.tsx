import { DataType, FileData } from "../../../types/global/types.ts";
import { Post } from "../../../types/instagram/types.ts";
import { convertUnixTimeToDate } from "../../../utils/utils.ts";
import LineChart from "../../../islands/LineChart.tsx";

export default class SavedPosts implements DataType {
  posts: Post[] = [];

  constructor(fileData?: FileData) {
    if (fileData) {
      this.parse(fileData);
    }
  }

  render() {
    if (this.posts.length === 0) {
      return <p></p>;
    }
    return (
      <>
        <p>Saved Posts</p>
        {`You have saved ${this.posts.length} posts between ${
          convertUnixTimeToDate(this.posts[this.posts.length - 1].timestamp)
        } and ${convertUnixTimeToDate(this.posts[0].timestamp)}`}
        <LineChart
          id="SavedPosts"
          datasets={[{
            label: "Saved Posts",
            data: this.posts.reverse(),
            color: "rgba(75, 192, 192, 1)",
          }]}
        />
      </>
    );
  }

  parse(fileData: FileData) {
    const jsonData = JSON.parse(fileData.text);

    this.posts = jsonData.saved_saved_media.map((post: any) => {
      const stringMapData = post.string_map_data["Saved on"];
      return {
        author: post.title || "Unknown",
        href: stringMapData.href || "Unknown",
        timestamp: stringMapData.timestamp || 0,
      } as Post;
    });
  }
}
