// src/contexts/NavigationContext.js
import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  console.log('NavigationProvider rendering');
  const [isExpanded, setIsExpanded] = useState(true);
  
  const value = {
    isExpanded,
    setIsExpanded
  };
  
  console.log('Provider value:', value);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  console.log('useNavigation hook called, context:', context);
  
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  
  return context;
}