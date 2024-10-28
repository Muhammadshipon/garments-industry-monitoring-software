
import React from 'react';

const ViewDetailsModal = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full"> {/* Square modal */}
        <h2 className="text-lg font-bold mb-4">Item Details</h2>
        {item && (
          <div className="space-y-4">
            <img src={item.image} alt={item.productName} className="w-full h-32 object-cover mb-2" />
            <p className="font-bold">Product Name: <span className="font-normal">{item.productName}</span></p>
            <p className="font-bold">Category: <span className="font-normal">{item.category}</span></p>
            <p className="font-bold">Quantity: <span className="font-normal">{item.quantity}</span></p>
            <p className="font-bold">Price: <span className="font-normal">${item.pricePerUnit.toFixed(2)}</span></p>
            <p className="font-bold">Supplier: <span className="font-normal">{item.supplier}</span></p>
          </div>
        )}
        <div className="flex justify-end mt-4">
          <button 
            onClick={onClose} 
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsModal;
