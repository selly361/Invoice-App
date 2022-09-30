import React, { useContext, useEffect } from "react";

import { InvoiceContextProvider } from "../../context/InvoiceProvider";
import { PlusIcon } from "../../assets/icons";
import styled from "styled-components";
import InvoicesItem from "../../components/Invoices/InvoiceItems/InvoicesItem";
import { CheckIcon } from "@mantine/core";
import DropDownFilter from "../../components/DropDownFilter/DropDownFilter";

const Container = styled.div`
  width: 750px;
  min-height: 80vh;
  margin: auto;
  display: flex;
  gap: 2rem;
  flex-flow: column;
  position: relative;

  @media (max-width: 753px) {
    & {
      width: 90vw;
    }
  }
`;

const InvoiceHeader = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 8rem;
  
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.btnPrimary};
  display: flex;
  gap: 0.4rem;
  border-radius: 25px;
  align-items: center;
  color: white;
  padding: 10px 15px;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnPrimaryHover};
  }
`;

const IconWrapper = styled.div`
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
`;
const InvoiceDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
`;

const InvoiceLength = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Wrap = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const HomePage = () => {
  const { setToggleForm, invoices, setEditInvoice, setFilter, filter } = useContext(InvoiceContextProvider);

  useEffect(() => {
    document.title = `Invoices (${invoices.length})`
  }, []);
  return (
    <Container>
      <InvoiceHeader>
        <InvoiceDetailWrapper>
          <Title>Invoices</Title>
          <InvoiceLength>
            {invoices.length
              ? `There are ${invoices.length} total invoices`
              : "No Invoices"}
          </InvoiceLength>
        </InvoiceDetailWrapper>
        <Wrap>
        <DropDownFilter setFilter={setFilter} filter={filter} />
          <StyledButton onClick={() =>{
             setToggleForm(true)
             setEditInvoice({})
          }}>
            <IconWrapper>
              <PlusIcon />
            </IconWrapper>
            New Invoice
          </StyledButton>
        </Wrap>
      </InvoiceHeader>
      <InvoicesItem invoices={invoices} />
    </Container>
  );
};

export default HomePage;
