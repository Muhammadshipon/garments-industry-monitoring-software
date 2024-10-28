
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { FcViewDetails } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
const InventoryTable = ({ inventoryData, searchTerm, onUpdate, onDelete, onViewDetails }) => {
  const filteredData = inventoryData.filter(item => 
    item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="border px-4 py-2">Image</th>
          <th className="border px-4 py-2">Product Name</th>
          <th className="border px-4 py-2">Category</th>
          <th className="border px-4 py-2">Quantity</th>
          <th className="border px-4 py-2">Price</th>
          <th className="border px-4 py-2">Supplier</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map(item => (
          <tr key={item.id}>
            <td className="border px-4 py-2">
              <img src={item.image} alt={item.productName} className="w-16 h-16 object-cover" />
            </td>
            <td className="border px-4 py-2">{item.productName}</td>
            <td className="border px-4 py-2">{item.category}</td>
            <td className="border px-4 py-2">{item.quantity}</td>
            <td className="border px-4 py-2">${item.pricePerUnit.toFixed(2)}</td>
            <td className="border px-4 py-2">{item.supplier}</td>
            <td className="border px-4 py-2">
            <div className='flex'>
            <button 
                onClick={() => onViewDetails(item)} 
                className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 mr-1"
              >
              <FcViewDetails />
              </button>
              <button 
                onClick={() => onUpdate(item)} 
                className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
              >
                <FaEdit />
              </button>
              <button 
                onClick={() => onDelete(item.id)} 
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 ml-1"
              >
               <AiFillDelete />
              </button>
            </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
