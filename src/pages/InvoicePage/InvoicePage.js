import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowLeftIcon } from "../../assets/icons";
import InvoiceItem from "../../components/Invoices/InvoiceItem/InvoiceItem";
import Status from "../../components/shared/Status/Status";

import { InvoiceContextProvider } from "../../context/InvoiceProvider";

const Container = styled.main`
  width: 700px;
  min-height: 70vh;
  margin-top: 5rem;
  display: flex;
  gap: 1rem;
  flex-flow: column;
`;

const Button = styled.button`
  padding: 1.1rem 1.7rem;
  border-radius: 1.8rem;
  font-weight: bold;
  transition: 1s background-color ease;
`;

const EditButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.btnSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnSecondaryHover};
  }
`;

const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.btnDelete};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnDeleteHover};
  }
`;

const MarkPaidButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.btnPrimary};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnPrimaryHover};
  }
`;

const BackButton = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  transition: 1s gap ease;

  &:hover {
    gap: 2rem;
  }

  h3 {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const InvoiceHeader = styled.div`
  width: 100%;
  padding: 1rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.bgInvoiceItem};
  border-radius: 10px;
  transition: 1s ease;
  transition-property: background-color;
  display: flex;
  justify-content: space-between;
`;

const StatusContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  h5 {
    color: ${({theme}) => theme.colors.textSecondary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export default function InvoicePage() {
  const { id } = useParams();
  const { handleEdit, handleDelete, invoices, setInvoices, handleMarkPaid } =
    useContext(InvoiceContextProvider);

  const selectedInvoice = invoices.find((invoice) => invoice.id === id);

  useEffect(() => {
    document.title = `Invoices | #${id}`;
  }, []);
  return (
    <Container>
      <Link to="/">
        <BackButton>
          <ArrowLeftIcon />
          <h3>Go Back</h3>
        </BackButton>
      </Link>
      <InvoiceHeader>
        <StatusContainer>
          <h5>Status </h5>
          <Status status={selectedInvoice.status} />
        </StatusContainer>
        <ButtonContainer>
          {selectedInvoice.status === "Pending" ||
          selectedInvoice.status === "Draft" ? (
            <EditButton onClick={() => handleEdit(id)}>Edit</EditButton>
          ) : null}
          <DeleteButton>Delete</DeleteButton>
          {selectedInvoice.status == "Pending" ? (
            <MarkPaidButton onClick={() => handleMarkPaid(id)}>
              Mark as Paid
            </MarkPaidButton>
          ) : null}
        </ButtonContainer>
      </InvoiceHeader>
    </Container>
  );
}
