import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function RevenueChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [20000, 40000, 60000, 50000, 90000],
        borderColor: "#4f46e5",
        tension: 0.4
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
      <h3 className="mb-4 font-semibold">Revenue Overview</h3>
      <Line data={data} />
    </div>
  );
}
