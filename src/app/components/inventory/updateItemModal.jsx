
import React, { useState, useEffect } from 'react';

const UpdateModal = ({ item, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    quantity: '',
    pricePerUnit: '',
    image: '',
  });

 
  useEffect(() => {
    if (item) {
      setFormData({
        productName: item.productName,
        category: item.category,
        quantity: item.quantity,
        pricePerUnit: item.pricePerUnit,
        image: item.image,
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Save the updated data
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full"> {/* Square modal */}
        <h2 className="text-lg font-bold mb-4">Update Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input fields for item details */}
          <div>
            <label className="block text-sm font-bold">Product Name:</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold">Category:</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold">Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold">Price per Unit:</label>
            <input
              type="number"
              name="pricePerUnit"
              value={formData.pricePerUnit}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold">Image URL:</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full p-2"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
