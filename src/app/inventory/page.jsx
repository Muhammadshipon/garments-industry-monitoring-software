'use client'
import React, { useContext, useState } from 'react';
import InventoryTable from '../components/inventory/InventoryTable';
import UpdateModal from '../components/inventory/updateItemModal';
import ViewDetailsModal from '../components/inventory/viewDetailsModal';
import { useRouter } from 'next/navigation';
import { MdAddCard } from 'react-icons/md';
import { DataContext } from '../provider/DataProvider';


const InventoryPage = () => {
  const router = useRouter();
  const {searchTerm,setSearchTerm,data} =useContext(DataContext);
  const [modalData, setModalData] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [inventoryData, setInventoryData] = useState(data);

  const handleViewDetails = (item) => {
    setModalData(item);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setModalData(null);
  };

  const handleUpdate = (item) => {
    setModalData(item);
    setIsUpdateModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setModalData(null);
  };

  const handleSave = (updatedItem) => {
    setInventoryData(prevData => 
      prevData.map(item => (item.id === updatedItem.id ? { ...item, ...updatedItem } : item))
    );
    setIsUpdateModalOpen(false);
    setModalData(null);
  };

  const handleDelete = (id) => {
    setInventoryData(prevData => prevData.filter(item => item.id !== id));
  };
  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Inventory Management</h1>
     <div className='flex justify-between gap-24'>
     <button
        onClick={() => router.push('/add-items')}
        className="bg-blue-500 flex items-center justify-center gap-2 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
      >
         <span><MdAddCard /></span>
        Add Item
      </button>
     <input
        type="text"
        placeholder="Search by Product Name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border outline-gray-500 p-2 rounded mb-4 w-[300px]"
      />
    
     </div>
      <InventoryTable
        inventoryData={inventoryData}
        searchTerm={searchTerm}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onViewDetails={handleViewDetails} 
      />
       {isUpdateModalOpen && (
        <UpdateModal
          item={modalData}
          onClose={handleCloseUpdateModal}
          onSave={handleSave} 
        />
      )}

      {isViewModalOpen && (
        <ViewDetailsModal
          item={modalData}
          onClose={handleCloseViewModal}
        />
      )}
    </div>
  );
};



export default InventoryPage;
