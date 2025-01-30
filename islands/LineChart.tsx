import { Chart } from "https://esm.sh/stable/chart.js@4.4.7/auto";

interface Dataset {
  label: string;
  data: { timestamp: number }[];
  borderColor: string;
}

interface MultiChartIslandProps {
  id: string;
  datasets: Dataset[];
}

export default function LineChartIsland(
  { id, datasets }: MultiChartIslandProps,
) {
  const chartData = datasets.map(dataset => {
    const reduced_data = dataset.data.reduce((acc, post) => {
      const date = new Date(post.timestamp * 1000).toISOString().split("T")[0];
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      label: dataset.label,
      data: Object.values(reduced_data),
      borderColor: dataset.borderColor,
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
      <canvas id={id} style="width:100%;max-width:700px"></canvas>
    </>
  );
}