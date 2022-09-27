import React, { createContext, useState } from "react";

import { useTheme } from "../hooks/useTheme";

export const InvoiceContextProvider = createContext({});

const InvoiceProvider = ({ children }) => {
  const themeData = useTheme();

  return (
    <InvoiceContextProvider.Provider
      value={{
        themeData
      }}
    >
      {children}
    </InvoiceContextProvider.Provider>
  );
};

export default InvoiceProvider;
