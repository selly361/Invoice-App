import React, { useContext } from "react";

import { InvoiceContextProvider } from "../../context/InvoiceProvider";
import { PlusIcon } from "../../assets/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 700px;
  min-height: 600px;
  margin: auto;
  padding: 8rem .3rem;
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
  color: ${({theme}) => theme.colors.textPrimary};
  font-weight: bold;
`
const InvoiceDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
`

const InvoiceLength = styled.p`
  color: ${({theme}) => theme.colors.textSecondary};
`

const HomePage = () => {
const { setToggleForm } = useContext(InvoiceContextProvider)
  return (
    <Container>
      <InvoiceHeader>
        <InvoiceDetailWrapper>
          <Title>Invoices</Title>
          <InvoiceLength>No Invoices</InvoiceLength>
        </InvoiceDetailWrapper>
        <div>
          <StyledButton onClick={() => setToggleForm(e => !e)}>
            <IconWrapper>
              <PlusIcon />
            </IconWrapper>
            New Invoice
          </StyledButton>
        </div>
      </InvoiceHeader>
    </Container>
  );
};

export default HomePage;