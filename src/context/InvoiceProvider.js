import React, { createContext, useEffect, useState } from "react";

import data from "../assets/data.json";
import { format } from "prettier";
import { useTheme } from "../hooks/useTheme";

export const InvoiceContextProvider = createContext({});

const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState(JSON.parse(localStorage.getItem("invoices")) || data);
  
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [editInvoice, setEditInvoice] = useState({});
  console.log(invoices)
  const handleDelete = (id) => {
    setInvoices(() => invoices.filter((invoice) => invoice.id !== id));
  };

  const handleMarkPaid = (id) => {
    let invoicesData = invoices;
    let foundedInvoice = invoicesData.find((invoice) => invoice.id === id);
    foundedInvoice.status = "paid";

    setInvoices(invoicesData);
  };

  const handleEdit = (id) => {
    setToggleForm(true);
    let invoiceData = invoices;
    let foundedInvoice = invoiceData.find((invoice) => invoice.id === id);
    setEditInvoice(foundedInvoice);
  };

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices))

  }, [invoices])



  const handleSubmit = ({ values, items, e, id }) => {
    e.preventDefault();

    let newInvoice = {
      id: id.toUpperCase(),
      createdAt: values.createdAt,
      paymentDue: values.paymentDue,
      description: values.description,
      paymentTerms: values.paymentTerms,
      clientName: values.clientName,
      clientEmail: values.clientEmail,
      status: values.status,
      senderAddress: values.senderAddress,
      clientAddress: values.clientAddress,
      items,
      total: items.length && items.reduce((prev, next) => prev.total + next.total)
    }
    
    let invoiceData = invoices;
    invoiceData.push(newInvoice)

    setInvoices(invoiceData)

    setToggleForm((e) => false);
  };

  return (
    <InvoiceContextProvider.Provider
      value={{
        themeData: useTheme(),
        toggleForm,
        setToggleForm,
        toggleDelete,
        setToggleDelete,
        handleDelete,
        handleEdit,
        handleMarkPaid,
        editInvoice,
        setEditInvoice,
        handleSubmit,
        invoices,
      }}
    >
      {children}
    </InvoiceContextProvider.Provider>
  );
};

export default InvoiceProvider;
