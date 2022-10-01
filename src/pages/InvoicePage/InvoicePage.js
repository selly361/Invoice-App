import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { ArrowLeftIcon } from "../../assets/icons";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { InvoiceContextProvider } from "../../context/InvoiceProvider";
import InvoiceInfo from "./InvoiceInfo/InvoiceInfo";
import InvoiceItem from "../../components/Invoices/InvoiceItem/InvoiceItem";
import Status from "../../components/shared/Status/Status";
import styled from "styled-components";

const Container = styled.main`
  width: 700px;
  min-height: 70vh;
  margin-top: 5rem;
  display: flex;
  gap: 1rem;
  flex-flow: column;

  @media (max-width: 750px) {
    width: 90vw;
  }
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

export const DeleteButton = styled(Button)`
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

const InvoiceDetailsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgInvoiceItem};
  width: 100%;
  padding: 1.5rem;
  min-height: 500px;
  border-radius: 10px;
`;

const StatusContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  h5 {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  @media (max-width: 700px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

const FooterButtons = styled.div`
  position: fixed;
  width: 100vw;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.bgInvoiceItem};
  display: none;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
  }
`;

export default function InvoicePage() {
  const { id } = useParams();
  const {
    handleEdit,
    handleDelete,
    invoices,
    setToggleDelete,
    setInvoices,
    toggleDelete,
    handleMarkPaid,
  } = useContext(InvoiceContextProvider);

  const selectedInvoice = invoices.find((invoice) => invoice.id === id);

  useEffect(() => {
    document.title = `Invoices | #${id}`;
  }, []);

  let buttons = (
    <>
      {selectedInvoice?.status === "Pending" ||
      selectedInvoice?.status === "Draft" ? (
        <EditButton onClick={() => handleEdit(id)}>Edit</EditButton>
      ) : null}
      <DeleteButton onClick={() => setToggleDelete(true)}>Delete</DeleteButton>
      {selectedInvoice?.status == "Pending" ? (
        <MarkPaidButton onClick={() => handleMarkPaid(id)}>
          Mark as Paid
        </MarkPaidButton>
      ) : null}
    </>
  );

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
          <Status status={selectedInvoice?.status} />
        </StatusContainer>
        <ButtonContainer>{buttons}</ButtonContainer>
      </InvoiceHeader>
      <InvoiceDetailsContainer>
        <InvoiceInfo invoice={selectedInvoice} />
      </InvoiceDetailsContainer>
      <AnimatePresence>
        {toggleDelete && (
          <DeleteModal
            setToggleDelete={setToggleDelete}
            id={id}
            handleDelete={handleDelete}
          />
        )}
      </AnimatePresence>
      <FooterButtons>{buttons}</FooterButtons>
    </Container>
  );
}
