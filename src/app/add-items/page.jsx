'use client';
import { v4 as uuidv4 } from 'uuid';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DataContext } from '../provider/DataProvider';

const AddItemPage = () => {
  const {data,setData} = useContext(DataContext);
  const router = useRouter();
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    quantity: '',
    price: '',
    supplier: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add item with unique ID
    const newItem = ({ id: uuidv4(), ...formData });
    setData([...data,newItem]);
    router.push('/inventory'); // Redirect to inventory page
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-10 px-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Add New Item</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-600 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              value={formData.productName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-600 mb-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-600 mb-1">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="price" className="block text-sm font-medium text-gray-600 mb-1">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="supplier" className="block text-sm font-medium text-gray-600 mb-1">
              Supplier
            </label>
            <input
              type="text"
              name="supplier"
              id="supplier"
              value={formData.supplier}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-600 mb-1">
              Upload Image
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItemPage;
