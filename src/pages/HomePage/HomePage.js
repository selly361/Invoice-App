import React, { useContext, useEffect } from "react";

import { CheckIcon } from "@mantine/core";
import DropDownFilter from "../../components/DropDownFilter/DropDownFilter";
import { InvoiceContextProvider } from "../../context/InvoiceProvider";
import InvoicesItem from "../../components/Invoices/InvoiceItems/InvoicesItem";
import { PlusIcon } from "../../assets/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 750px;
  min-height: 80vh;
  margin: auto;
  padding: 6rem 0.3rem;
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

  @media (max-width: 700px){
    padding: 7px 12px;
    gap: 0.2rem;
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

  @media (max-width: 500px){
      font-size: 1.4rem;
  }
`;
const InvoiceDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
`;

const InvoiceLength = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: .9rem;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  justify-content: space-between;

  
`

const Hide = styled.span`


  @media (max-width: 700px){
    display: none;
  }
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
            New <Hide>Invoice</Hide>
          </StyledButton>
        </Wrap>
      </InvoiceHeader>
      <InvoicesItem invoices={invoices} />
    </Container>
  );
};

export default HomePage;
