import { Chart } from "https://esm.sh/stable/chart.js/auto";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface LineDataset {
  label: string;
  data: { timestamp: number }[];
  color: string;
}

interface LineChartProps {
  id: string;
  datasets: LineDataset[];
}

export default function LineChart(
  { id, datasets }: LineChartProps,
) {
  // if (!IS_BROWSER) {
  //   return <div></div>
  // }

  const chartData = datasets.map((dataset) => {
    const reduced_data = dataset.data.reduce((acc, post) => {
      const date = new Date(post.timestamp * 1000).toISOString().split("T")[0];
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      label: dataset.label,
      data: Object.values(reduced_data),
      borderColor: dataset.color,
      fill: false,
    };
  });

  const labels = Object.keys(datasets[0].data.reduce((acc, post) => {
    const date = new Date(post.timestamp * 1000).toISOString().split("T")[0];
    acc[date] = true;
    return acc;
  }, {} as Record<string, boolean>));

  new Chart(id, {
    type: "line",
    data: {
      labels,
      datasets: chartData,
    },
  });

  return (
    <>
      <canvas id={id} style="max-w-screen-md mx-auto flex flex-col"></canvas>
    </>
  );
}
