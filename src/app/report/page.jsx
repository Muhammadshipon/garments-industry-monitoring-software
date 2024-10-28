"use client";
import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts";
import { FaBoxOpen, FaTag } from "react-icons/fa";
import { SearchContext } from "../provider/SearchTermProvider";

// Sample color scheme for the Pie Chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const ReportPage = () => {
  // Aggregate data for the charts
  const {data} = useContext(SearchContext);
  const categoryData = data?.reduce((acc, item) => {
    const existingCategory = acc.find((cat) => cat.name === item.category);
    if (existingCategory) {
      existingCategory.value += item.quantity;
    } else {
      acc.push({ name: item.category, value: item.quantity });
    }
    return acc;
  }, []);

  const priceData = data.map((item) => ({
    name: item.productName,
    price: item.pricePerUnit,
  }));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Inventory Report</h1>

      {/* Summary Cards */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6 justify-center items-center">
        <div className="p-6 w-[300px] bg-white shadow-md rounded-lg text-center">
          <FaBoxOpen size={30} className="text-blue-500 mx-auto mb-2" />
          <p className="text-sm text-gray-500">Total Items</p>
          <h3 className="text-xl font-semibold">{data.length}</h3>
        </div>
        <div className="p-6 w-[300px] bg-white shadow-md rounded-lg text-center">
          <FaTag size={30} className="text-green-500 mx-auto mb-2" />
          <p className="text-sm text-gray-500">Total Categories</p>
          <h3 className="text-xl font-semibold">{categoryData.length}</h3>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart for Quantity Distribution */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4 text-center">Quantity Distribution by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8">
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart for Price Comparison */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4 text-center">Price Comparison by Product</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={priceData}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(value) => `$${value}`} />
              <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
              <Legend />
              <Bar dataKey="price" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
