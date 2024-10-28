// components/ProductSummaryPieChart.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Available', value: 400, color: '#4caf50' }, // green
  { name: 'Sold', value: 300, color: '#2196f3' }, // blue
  { name: 'Returned', value: 200, color: '#ff9800' }, // orange
  { name: 'Defective', value: 100, color: '#f44336' }, // red
];

const ProductSummaryPieChart = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6   shadow-lg w-[320px] lg:w-full rounded-3xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Product Summary</h2>
      <PieChart width={480} height={280}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={50} // Makes it a donut chart
          fill="#8884d8"
          paddingAngle={5}
          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => `${name}: ${value}`} />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
};

export default ProductSummaryPieChart;
