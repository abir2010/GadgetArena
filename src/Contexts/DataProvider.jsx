import React, { createContext } from "react";
import useProducts from "../Hooks/useProducts";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const context = useProducts();
  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
