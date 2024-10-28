"use client"
import { getInventoryItems, getSupplierInfo } from '@/services/fakeData';
import React, { createContext, useState } from 'react';

const SearchContext = createContext(null);
const SearchTermProvider = ({children}) => {
  const [searchTerm,setSearchTerm] = useState('');
  const inventoryData = getInventoryItems();
  const suppliersInfo = getSupplierInfo();
  const [data,setData] = useState(inventoryData);
  const value = {
    searchTerm,
    setSearchTerm,
    data,
    setData,
    suppliersInfo
  }
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchTermProvider, SearchContext };