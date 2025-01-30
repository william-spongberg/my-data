import { Chart } from "https://esm.sh/stable/chart.js@4.4.7/auto"
import { PostsChartIslandProps } from "../components/instagram/interfaces.tsx";

export default function SavedPostsChartIsland(
  { posts }: PostsChartIslandProps,
) {
  const data = posts.reduce((acc, post) => {
    const date = new Date(post.timestamp * 1000).toISOString().split("T")[0];
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const labels = Object.keys(data);
  const values = Object.values(data);

  new Chart("savedPostsChart", {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Posts Saved Per Day",
        data: values,
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      }],
    },
  });

  return (
    <>
    <canvas id="savedPostsChart" style="width:100%;max-width:700px"></canvas>
    </>
  );
}
