import React, { createContext, useEffect, useMemo, useState } from "react";

import { CopyButton } from "@mantine/core";
import data from "../assets/data.json";
import { format } from "prettier";
import { useTheme } from "../hooks/useTheme";

export const InvoiceContextProvider = createContext({});

const InvoiceProvider = ({ children }) => {
  const [invoicesData, setInvoicesData] = useState(
    JSON.parse(sessionStorage.getItem("invoices")) || data
  );
  const [invoices, setInvoices] = useState(invoicesData);
  const [filter, setFilter] = useState({});

  const [toggleForm, setToggleForm] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [editInvoice, setEditInvoice] = useState({
    edit: false,
    id: "",
    invoice: {},
  });

  const calcTotal = (arr) => {
    let sum = 0;

    for (let a of arr) {
      sum += +a.total;
    }

    return sum.toLocaleString();
  };

  const handleDelete = (id) => {
    let copy = [...invoicesData]
    copy = copy.filter((invoice) => invoice.id !== id)
    setInvoicesData(copy);
    setInvoices(invoicesData);
    setToggleDelete(false)
  };

  const handleMarkPaid = (id) => {
    let copy = invoices;
    let foundedInvoice = copy.find((invoice) => invoice.id === id);
    foundedInvoice.status = "Paid";
    setInvoicesData((prev) => [...copy]);
  };

  const handleEdit = (id) => {
    let invoice = invoices.find((invoice) => invoice.id === id);
    setEditInvoice((prev) => ({ ...prev, edit: true, id, invoice }));
  };

  const handleFilter = () => {
    let whatToFilter = [];
    filter.paid && whatToFilter.push("Paid");
    filter.pending && whatToFilter.push("Pending");
    filter.draft && whatToFilter.push("Draft");

    let items = invoicesData;

    items = items.filter((invoice) => whatToFilter.includes(invoice.status));
    
    if(!filter.paid && !filter.pending && !filter.draft){
      items = invoicesData
    }

    setInvoices(items);
  }

  useEffect(() => {
    handleFilter()
  }, [JSON.stringify(filter)]);

  useEffect(() => {
    sessionStorage.setItem("invoices", JSON.stringify(invoicesData));
    handleFilter()
  }, [JSON.stringify(invoicesData)]);

  const handleSubmit = ({ values, items, e, id, draft }) => {
    e.preventDefault();

    if (editInvoice.edit) {
      let copy = invoices;
      let index = copy.findIndex((item) => item.id === editInvoice.id);

      copy[index] = {
        id: editInvoice.id,
        createdAt: values.createdAt.toLocaleDateString(),
        paymentDue: values.paymentDue.toLocaleDateString(),
        description: values.description,
        paymentTerms: values.paymentTerms,
        clientName: values.clientName,
        clientEmail: values.clientEmail,
        status: "Pending",
        senderAddress: values.senderAddress,
        clientAddress: values.clientAddress,
        items,
        total: calcTotal(items),
      };
      setEditInvoice({});
      setInvoicesData((prev) => [...copy]);
    } else {

        setInvoicesData((prev) => [
        {
          id: id.toUpperCase(),
          createdAt: values.createdAt.toLocaleDateString(),
          paymentDue: values.paymentDue.toLocaleDateString(),
          description: values.description,
          paymentTerms: values.paymentTerms,
          clientName: values.clientName,
          clientEmail: values.clientEmail,
          status: draft ? "Draft" : values.status,
          senderAddress: values.senderAddress,
          clientAddress: values.clientAddress,
          items,
          total: calcTotal(items),
        },
        ...prev,
      ]);
      setToggleForm(false);
    }
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
        filter,
        setFilter,
      }}
    >
      {children}
    </InvoiceContextProvider.Provider>
  );
};

export default InvoiceProvider;
