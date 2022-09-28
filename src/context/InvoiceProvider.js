import React, { createContext, useState } from "react";

import data from '../assets/data.json'
import { useLocalStorage } from "@mantine/hooks";
import { useTheme } from "../hooks/useTheme";

export const InvoiceContextProvider = createContext({});

const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useLocalStorage({ key: "invoices", defaultValue: data })
  const [toggleForm, setToggleForm] = useState(false)
  const [toggleDelete, setToggleDelete] = useState(false)

  return (
    <InvoiceContextProvider.Provider
      value={{
        themeData: useTheme(),
        toggleForm,
        setToggleForm,
        toggleDelete,
        setToggleDelete
      }}
    >
      {children}
    </InvoiceContextProvider.Provider>
  );
};

export default InvoiceProvider;
