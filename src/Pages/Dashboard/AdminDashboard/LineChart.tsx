import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Income",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,

        borderColor: "#fb923c",
      },
    ],
  };
  const options = {
    responsive: true,
  };
  return <Line className="" data={data} options={options} />;
};

export default LineChart;
