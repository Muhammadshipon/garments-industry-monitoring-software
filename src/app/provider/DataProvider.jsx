"use client"
import { getInventoryItems, getSupplierInfo } from '@/services/fakeData';
import React, { createContext, useState } from 'react';

const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inventoryData = getInventoryItems();
  const suppliersInfo = getSupplierInfo();
  const [data, setData] = useState(inventoryData);
  const value = {
    searchTerm,
    setSearchTerm,
    data,
    setData,
    suppliersInfo
  }
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };