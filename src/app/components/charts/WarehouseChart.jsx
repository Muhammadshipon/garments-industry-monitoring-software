// components/WarehouseProgressChart.js
import React from 'react';

const warehouseData = [
  { name: 'Warehouse A', stock: 70, color: 'bg-blue-500' },
  { name: 'Warehouse B', stock: 40, color: 'bg-green-500' },
  { name: 'Warehouse C', stock: 90, color: 'bg-purple-500' },
  { name: 'Warehouse D', stock: 30, color: 'bg-red-500' },
];

const WarehouseProgressChart = () => {
  return (
    <div className=" space-y-2">
      {warehouseData.map((warehouse) => (
        <div key={warehouse.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold" style={{ color: warehouse.color }}>
              {warehouse.name}
            </span>
            <span className="text-sm" style={{ color: warehouse.color }}>
              {warehouse.stock}%
            </span>
          </div>
          <div className="relative w-full h-4 bg-gray-200 rounded-lg overflow-hidden">
            <div
              className={`${warehouse.color} h-full rounded-lg`}
              style={{ width: `${warehouse.stock}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WarehouseProgressChart;
