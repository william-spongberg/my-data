import { Chart } from "https://esm.sh/stable/chart.js@4.4.7/auto";

interface Dataset {
  label: string;
  data: number[];
  color: string;
}

interface MultiChartIslandProps {
  id: string;
  datasets: Dataset[];
}

export default function BarChartIsland(
  { id, datasets }: MultiChartIslandProps,
) {
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
