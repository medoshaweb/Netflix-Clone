import React, { createContext, useContext, useState, useMemo } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('Home');

  const value = useMemo(() => ({
    selectedCategory,
    setSelectedCategory
  }), [selectedCategory]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

