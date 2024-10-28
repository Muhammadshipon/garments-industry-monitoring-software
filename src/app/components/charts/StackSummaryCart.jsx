// components/StackSummaryGauge.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

function StackSummaryGauge({ totalStack, soldStack, remainingStack }) {
  // Chart data, assigning distinct colors to each segment
  const data = {
    labels: ["Sold Stack", "Remaining Stack", "Unused Stack"],
    datasets: [
      {
        data: [soldStack, remainingStack, totalStack - soldStack - remainingStack],
        backgroundColor: ["#ff4d4d", "#4db8ff", "#e0e0e0"],
        hoverBackgroundColor: ["#e63946", "#1d9ceb", "#c0c0c0"],
        borderWidth: 0,
      },
    ],
  };

  // Chart options for a more spaced-out look
  const options = {
    cutout: "75%", // Hollow center
    rotation: -90,
    circumference: 180,
    plugins: {
      tooltip: { enabled: true },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 15,
          font: { size: 12 },
          padding: 20, // Adds padding to avoid overlapping
          color: "#333",
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="w-72 h-72 mx-auto relative">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h3 className="text-lg font-bold">Total Stack</h3>
        <p className="text-3xl font-semibold">{totalStack}</p>
        <p className="text-gray-500 text-sm mt-1">
          Sold: {soldStack} | Remaining: {remainingStack}
        </p>
      </div>
    </div>
  );
}

export default StackSummaryGauge;
