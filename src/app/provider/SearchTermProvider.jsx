"use client"
import React, { createContext, useState } from 'react';

const SearchContext = createContext(null);
const SearchTermProvider = ({children}) => {
  const [searchTerm,setSearchTerm] = useState('')
  const value = {
    searchTerm,
    setSearchTerm
  }
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchTermProvider, SearchContext };