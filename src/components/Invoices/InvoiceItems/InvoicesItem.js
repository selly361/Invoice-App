import { useContext } from "react";
import styled from "styled-components";
import { InvoiceContextProvider } from "../../../context/InvoiceProvider";
import InvoiceItem from "../InvoiceItem/InvoiceItem";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 1rem;
`

const InvoicesItem = () => {
  const { invoices } = useContext(InvoiceContextProvider)
  return (
    <Wrapper>
       {invoices?.map((invoice) => ( <InvoiceItem key={invoice.id} {...invoice} />))}
    </Wrapper>
  )
}

export default InvoicesItem