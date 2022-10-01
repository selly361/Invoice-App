import {
    ClientAddress,
    ClientInfo,
    Container,
    CreatedDate,
    Email,
    Hashtag,
    Heading,
    Key,
    PaymentDue,
    SenderAddress,
    StyledInvoiceInfo,
    Text,
    Total,
    TotalHeading,
    TotalText,
    Uid,
} from './styles.js';

import InvoiceTable from '../Table/InvoiceTable.js';

const InvoiceInfo = ({ invoice }) => {


    return (
        <StyledInvoiceInfo
  
        >
            <Container>
                <Key>
                    <Uid>
                        <Hashtag>#</Hashtag>
                        {invoice.id}
                    </Uid>
                    <Heading>{invoice.description}</Heading>
                </Key>
                <SenderAddress>
                    <span>{invoice.senderAddress.street}</span>
                    <span>{invoice.senderAddress.city}</span>
                    <span>{invoice.senderAddress.postCode}</span>
                    <span>{invoice.senderAddress.country}</span>
                </SenderAddress>
                <CreatedDate>
                    <Heading>Invoice Date</Heading>
                    <Text>{(invoice.createdAt)}</Text>
                </CreatedDate>
                <ClientInfo>
                    <Heading>Bill to</Heading>
                    <Text>{invoice.clientName}</Text>
                    <ClientAddress>
                        <span>{invoice.clientAddress.street}</span>
                        <span>{invoice.clientAddress.city}</span>
                        <span>{invoice.clientAddress.postCode}</span>
                        <span>{invoice.clientAddress.country}</span>
                    </ClientAddress>
                </ClientInfo>
                <Email>
                    <Heading>Sent to</Heading>
                    <Text>{invoice.clientEmail}</Text>
                </Email>
                <PaymentDue>
                    <Heading>Payment Due</Heading>
                    <Text>{invoice.paymentDue}</Text>
                </PaymentDue>
            </Container>
            <InvoiceTable invoice={invoice} />
            <Total>
                <TotalHeading>Amount Due</TotalHeading>
                <TotalText>£ {(invoice.total).toLocaleString()}</TotalText>
            </Total>
        </StyledInvoiceInfo>
    );
};

export default InvoiceInfo;