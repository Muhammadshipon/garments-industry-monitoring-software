// components/ProductErrorChart.js
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProductErrorChart = ({height}) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Product Missing',
        data: [10, 15, 8, 6, 12, 10],
        backgroundColor: 'rgba(29, 78, 216, 0.7)', // Blue-700 color
        borderColor: 'rgba(29, 78, 216, 1)',
        borderRadius: 0, // No rounding for this part
        borderSkipped: false,
      },
      {
        label: 'Product Damage',
        data: [5, 7, 12, 10, 4, 6],
        backgroundColor: 'rgba(128, 128, 128, 0.7)', // Gray for Product Damage
        borderColor: 'rgba(128, 128, 128, 1)',
        borderRadius: { topLeft: 10, topRight: 10 }, // Rounded top only for Product Damage
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows height customization
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Product Error Chart (Missing vs Damage)',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Products',
        },
      },
    },
  };

  // Set the height of the chart here
  return (
    <div style={{ height: height }}> {/* Increase or decrease this value to adjust height */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProductErrorChart;
