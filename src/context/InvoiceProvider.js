import React, { createContext, useEffect, useMemo, useState } from "react";

import data from "../assets/data.json";
import { format } from "prettier";
import { useTheme } from "../hooks/useTheme";
import { CopyButton } from "@mantine/core";

export const InvoiceContextProvider = createContext({});

const InvoiceProvider = ({ children }) => {
  const [invoicesData, setInvoicesData] = useState(
    JSON.parse(localStorage.getItem("invoices")) || data
  );
  const [invoices, setInvoices] = useState(invoicesData);
  const [filter, setFilter] = useState({
    pending: false,
    paid: false,
    draft: false,
  });

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

  const handleFilter = (filtering) => {
    if (filtering.length) {
      setFilter((prev) => ({ ...prev, filtering }));
    } else {
      setFilter({});
    }
  };

  const handleDelete = (id) => {
    setInvoices(invoices.filter((invoice) => invoice.id !== id));
  };

  const handleMarkPaid = (id) => {
    let copy = invoices;
    let foundedInvoice = copy.find((invoice) => invoice.id === id);
    foundedInvoice.status = "Paid";
    setInvoices((prev) => [...copy]);
  };

  const handleEdit = (id) => {
    let invoice = invoices.find((invoice) => invoice.id === id);
    setEditInvoice((prev) => ({ ...prev, edit: true, id, invoice }));
  };



  useEffect(() => {
    let filtered = invoices;
    const filterInvoice = (status, invoiceArr) =>
      invoiceArr.filter((invoice) => invoice.status === status);

    if (filter.paid) {
      filtered = filterInvoice("Paid", filtered);
    } else if (filter.pending) {
      filtered = filterInvoice("Pending", filtered);
    } else if (filter.draft) {
      filtered = filterInvoice("Draft", filtered);
    } else {
      filtered = invoicesData;
    }



    setInvoices(filtered);
  }, [filter]);

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [JSON.stringify(invoices)]);

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
      setInvoices((prev) => [...copy]);
    } else {
      const totalValue = items.length
        ? items.reduce((prev, next) => prev.total + next.total)
        : 0;
      setInvoices((prev) => [
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
        handleFilter
      }}
    >
      {children}
    </InvoiceContextProvider.Provider>
  );
};

export default InvoiceProvider;
