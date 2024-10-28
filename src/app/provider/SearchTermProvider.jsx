"use client"
import { getInventoryItems } from '@/services/inventoryItems';
import React, { createContext, useState } from 'react';

const SearchContext = createContext(null);
const SearchTermProvider = ({children}) => {
  const [searchTerm,setSearchTerm] = useState('');
  const inventoryData = getInventoryItems();
  const [data,setData] = useState(inventoryData);
  const value = {
    searchTerm,
    setSearchTerm,
    data,
    setData
  }
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchTermProvider, SearchContext };