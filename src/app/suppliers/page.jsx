"use client";
import React, { useContext } from "react";
import { DataContext } from "../provider/DataProvider";




const SupplierPage = () => {
  const {suppliersInfo} = useContext(DataContext);
  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">Supplier Information</h1>

      {/* Supplier Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg  shadow-2xl">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Supplier Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Address</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {suppliersInfo.map((supplier) => (
              <tr key={supplier.id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-150">
                <td className="py-3 px-6 text-left whitespace-nowrap font-medium">{supplier.name}</td>
                <td className="py-3 px-6 text-left">{supplier.email}</td>
                <td className="py-3 px-6 text-left">{supplier.phone}</td>
                <td className="py-3 px-6 text-left">{supplier.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierPage;
