import React, { useContext, useEffect } from "react";

import { InvoiceContextProvider } from "../../context/InvoiceProvider";
import { PlusIcon } from "../../assets/icons";
import styled from "styled-components";
import InvoicesItem from "../../components/Invoices/InvoiceItems/InvoicesItem";

const Container = styled.div`
  width: 750px;
  min-height: 80vh;
  margin: auto;
  padding: 8rem 0.3rem;
  display: flex;
  gap: 2rem;
  flex-flow: column;

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

const HomePage = () => {
  const { setToggleForm, invoices, setEditInvoice } = useContext(InvoiceContextProvider);

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
        <div>
          <StyledButton onClick={() =>{
             setToggleForm(true)
             setEditInvoice({})
          }}>
            <IconWrapper>
              <PlusIcon />
            </IconWrapper>
            New Invoice
          </StyledButton>
        </div>
      </InvoiceHeader>
      <InvoicesItem invoices={invoices} />
    </Container>
  );
};

export default HomePage;
