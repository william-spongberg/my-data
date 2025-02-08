import { Chart } from "https://esm.sh/stable/chart.js/auto";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface BarDataset {
  label: string;
  data: number[];
  color: string;
}

interface BarChartProps {
  id: string;
  datasets: BarDataset[];
}

export default function BarChart(
  { id, datasets }: BarChartProps,
) {
  // if (!IS_BROWSER) {
  //   return <div></div>
  // }

  const chartData = datasets.map((dataset) => ({
    label: dataset.label,
    data: dataset.data,
    backgroundColor: dataset.color,
  }));

  const label = [""];

  new Chart(id, {
    type: "bar",
    data: {
      labels: label,
      datasets: chartData,
    },
  });

  return (
    <>
      <canvas id={id} style="max-w-screen-md mx-auto flex flex-col"></canvas>
    </>
  );
}
