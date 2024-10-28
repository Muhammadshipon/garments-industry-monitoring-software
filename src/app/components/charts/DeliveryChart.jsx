// components/DeliveryAreaChart.js
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  defs,
} from 'recharts';

// Sample data for delivery areas
const data = [
  { name: 'Area 1', avgDelivery: 15, totalDelivery: 50 },
  { name: 'Area 2', avgDelivery: 20, totalDelivery: 60 },
  { name: 'Area 3', avgDelivery: 10, totalDelivery: 45 },
  { name: 'Area 4', avgDelivery: 25, totalDelivery: 80 },
  { name: 'Area 5', avgDelivery: 30, totalDelivery: 70 },
  { name: 'Area 6', avgDelivery: 15, totalDelivery: 55 },
];

const DeliveryAreaChart = ({height}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        {/* Background grid */}
        <CartesianGrid strokeDasharray="3 3" />

        {/* Gradient definitions for Average Delivery and Total Delivery */}
        <defs>
          <linearGradient id="avgGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#dc2626" stopOpacity={0.8} /> {/* Red */}
            <stop offset="95%" stopColor="#dc2626" stopOpacity={0.3} />
          </linearGradient>
          <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} /> {/* Green */}
            <stop offset="95%" stopColor="#22c55e" stopOpacity={0.3} />
          </linearGradient>
        </defs>

        {/* X and Y axes */}
        <XAxis dataKey="name" />
        <YAxis />

        {/* Tooltip and Legend */}
        <Tooltip />
        <Legend />

        {/* Area for Average Delivery */}
        <Area
          type="monotone"
          dataKey="avgDelivery"
          stroke="#dc2626"
          fill="url(#avgGradient)"
          fillOpacity={1}
        />

        {/* Area for Total Delivery */}
        <Area
          type="monotone"
          dataKey="totalDelivery"
          stroke="#22c55e"
          fill="url(#totalGradient)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DeliveryAreaChart;
