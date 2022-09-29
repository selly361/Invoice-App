import "react-datepicker/dist/react-datepicker.css";

import {
  AddItemButton,
  BillText,
  ClientAddressSection,
  Container,
  CustomInput,
  DatesField,
  InputField,
  InputsField,
  ItemsContainer,
  ItemsSection,
  SenderAddressSection,
  StyledForm,
  StyledInput,
  StyledItemsLabel,
  StyledLabel,
  StyledSelect,
  Title
} from "./form-styles";
import React, { Fragment, useContext, useState } from "react";

import { CalenderIcon } from "../../../assets/icons";
import DatePicker from "react-datepicker";
import FormButtons from "./Buttons";
import { InvoiceContextProvider } from "../../../context/InvoiceProvider";
import ItemsForm from "./ItemsForm";
import ShortUniqueId from "short-unique-id";
import styled from "styled-components";
import { useForm } from "@mantine/form";

const uid = new ShortUniqueId({ length: 6 });

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

const Form = () => {
  const { editInvoice, invoices, setInvoices, handleSubmit } = useContext(InvoiceContextProvider)

  const [items, setItems] = useState(editInvoice?.items || []);

  const [selectedOption, setSelectedOption] = useState(editInvoice?.paymentTerms || "30");

  let options = [
    { value: "1", label: "Net 1 Day" },
    { value: "7", label: "Net 7 Day" },
    { value: "14", label: "Net 14 Day" },
    { value: "30", label: "Net 30 day" },
  ];

  const form = useForm({
    initialValues: {
      senderAddress: {
        street: editInvoice?.senderAddress?.street || "",
        city: editInvoice?.senderAddress?.city || "",
        postCode: editInvoice?.senderAddress?.postCode || "",
        country: editInvoice?.senderAddress?.country || "",
    },
      clientName: editInvoice?.clientName || "",
      clientEmail: editInvoice?.clientEmail || "",
      clientAddress: {
        street: editInvoice?.clientAddress?.street || "",
        city: editInvoice?.clientAddress?.city || "",
        postCode: editInvoice?.clientAddress?.postCode || "",
        country: editInvoice?.clientAddress?.country || "",
      },
      createdAt: (editInvoice?.createdAt ? new Date(editInvoice?.createdAt) : new Date()),
      paymentDue: (new Date(editInvoice?.createdAt).addDays(+selectedOption) || new Date().addDays(+selectedOption)),
      paymentTerms: selectedOption,
      description: editInvoice?.description || "",
      status: "pending"
    },
  });



  return (
    <Container>
      <Title>New Invoice</Title>
      <StyledForm onSubmit={(e) => handleSubmit({ values: form.values, items, e, id: uid() })} id="add-invoice-form">
        <SenderAddressSection>
          <BillText>Bill from</BillText>
          <InputField>
            <StyledLabel>Street Address</StyledLabel>
            <StyledInput {...form.getInputProps("senderAddress.street")} />
          </InputField>

          <InputsField>
            <InputField>
              <StyledLabel>City</StyledLabel>
              <StyledInput {...form.getInputProps("senderAddress.city")} />
            </InputField>

            <InputField>
              <StyledLabel>Post Code</StyledLabel>
              <StyledInput {...form.getInputProps("senderAddress.postCode")} />
            </InputField>

            <InputField>
              <StyledLabel>Country</StyledLabel>
              <StyledInput {...form.getInputProps("senderAddress.country")} />
            </InputField>
          </InputsField>
        </SenderAddressSection>
        <ClientAddressSection>
          <BillText>Bill to</BillText>
          <InputField>
            <StyledLabel>Client's name</StyledLabel>
            <StyledInput {...form.getInputProps("clientName")} />
          </InputField>
          <InputField>
            <StyledLabel>Client's email</StyledLabel>
            <StyledInput
              placeholder="e.g. email@gmail.com"
              {...form.getInputProps("clientEmail")}
            />
          </InputField>
          <InputsField>
            <InputField>
              <StyledLabel>City</StyledLabel>
              <StyledInput {...form.getInputProps("senderAddress.city")} />
            </InputField>

            <InputField>
              <StyledLabel>Post Code</StyledLabel>
              <StyledInput {...form.getInputProps("senderAddress.postCode")} />
            </InputField>

            <InputField>
              <StyledLabel>Country</StyledLabel>
              <StyledInput {...form.getInputProps("senderAddress.country")} />
            </InputField>
          </InputsField>
          <DatesField>
            <InputField>
              <StyledLabel>Invoice Date</StyledLabel>
              <DatePicker
                {...form.getInputProps("createdAt")}
                selected={form.getInputProps("createdAt").value}
                customInput={
                  <CustomInput>
                    {form.getInputProps("createdAt").value.toLocaleDateString()}
                    <CalenderIcon />
                  </CustomInput>
                }
              />
            </InputField>
            <InputField>
              <StyledLabel>Payment Terms</StyledLabel>
              <StyledSelect value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </StyledSelect>
            </InputField>
          </DatesField>
          <InputField>
            <StyledLabel>Project Description</StyledLabel>
            <StyledInput
              placeholder="e.g. Graphic Design Service"
              {...form.getInputProps("description")}
            />
          </InputField>
        </ClientAddressSection>
        <ItemsSection>
          <StyledItemsLabel>Item List</StyledItemsLabel>
          <ItemsContainer>
            {items.map((item) => (
              <ItemsForm
                key={item.id}
                items={items}
                setItems={setItems}
                {...item}
              />
            ))}
          </ItemsContainer>
          <AddItemButton
            onClick={() =>
              setItems((prev) => [
                ...prev,
                {
                  name: "",
                  quantity: 0,
                  price: 0,
                  total: 0,
                  id: uid(),
                },
              ])
            }
            type="button"
          >
            + Add New Item
          </AddItemButton>
        </ItemsSection>
      </StyledForm>
      <FormButtons />
    </Container>
  );
};

export default Form;
