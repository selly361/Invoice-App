import { ArrowRightIcon } from "../../../assets/icons";
import { Link } from "react-router-dom";
import React from "react";
import Status from "../../shared/Status/Status";
import styled from "styled-components";

const StyledInvoice = styled.div`
  width: 100%;
  padding: 1rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.bgInvoiceItem};
  border-radius: 10px;
  border: 1px solid transparent;
  display: grid;
  grid-template-columns: repeat(5, 1fr) 0.1fr;
  align-items: center;
  justify-content: space-between;
  transition: 1s ease;
  transition-property: background-color, border-color;
  &:hover {
    border-color: hsl(252, 94%, 67%);
    cursor: pointer;
  }

  &.mobile {
    display: none;
  }

  @media (max-width: 781px) {
    &.pc-styled-invoice {
      display: none;
    }

    &.mobile {
      display: flex;
      flex-flow: column;
      gap: 2rem;
    }
  }
`;
const Tag = styled.h4`
  color: ${({ theme }) => theme.colors.textPrimary};

  span {
    color: hsl(231, 36%, 63%);
  }
`;
const DuePayment = styled.h4`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-weight: 400;
`;

const ClientsName = styled.h4`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-weight: 400;
`;

const Total = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
`;


const IdAndClientNameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const PaymentWrap = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
width: 100%;
align-items: center;

`


const InvoiceItem = ({ paymentDue, id, total, status, clientName }) => {
  return (
    <Link to={`/invoice/${id}`}>
      <StyledInvoice className="pc-styled-invoice">
        <Tag>
          <span>#</span>
          {id}
        </Tag>
        <DuePayment>Due {paymentDue}</DuePayment>
        <ClientsName>{clientName}</ClientsName>
        <Total>£{total.toLocaleString()}</Total>
        <Status status={status} />
        <ArrowRightIcon />
      </StyledInvoice>
      <StyledInvoice className="mobile">
        <IdAndClientNameWrap>
          <Tag>
            <span>#</span>
            {id}
          </Tag>
          <ClientsName>{clientName}</ClientsName>
        </IdAndClientNameWrap>
        <Wrap>
          <PaymentWrap>
            <DuePayment>Due {paymentDue}</DuePayment>
            <Total>£{total.toLocaleString()}</Total>
          </PaymentWrap>
          <Status status={status} />
        </Wrap>
      </StyledInvoice>
    </Link>
  );
};

export default InvoiceItem;
