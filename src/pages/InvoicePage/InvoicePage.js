import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InvoiceItem from "../../components/Invoices/InvoiceItem/InvoiceItem";
import Status from "../../components/shared/Status/Status";

import { InvoiceContextProvider } from "../../context/InvoiceProvider";

export default function InvoicePage() {
  const { id } = useParams();

  const { handleEdit, handleDelete, invoices, setInvoices, handleMarkPaid } =
    useContext(InvoiceContextProvider);

  const selectedInvoice = invoices.find((invoice) => invoice.id === id);

  useEffect(() => {
    document.title = `Invoices | #${id}`;
  }, []);
  return (
    <div>
      <h1>
        <button onClick={() => handleEdit(id)}>Edit</button>
      </h1>
    </div>
  );
}
