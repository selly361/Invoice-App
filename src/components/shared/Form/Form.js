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
import React, { Fragment, useContext, useState, useEffect } from "react";

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
  const { editInvoice, handleSubmit, setToggleForm, edit } = useContext(InvoiceContextProvider)

  const [items, setItems] = useState(editInvoice.invoice?.items || []);

  const [selectedOption, setSelectedOption] = useState(editInvoice.invoice?.paymentTerms || "30");

  let options = [
    { value: "1", label: "Net 1 Day" },
    { value: "7", label: "Net 7 Day" },
    { value: "14", label: "Net 14 Day" },
    { value: "30", label: "Net 30 day" },
  ];

  const form = useForm({
    initialValues: {
      senderAddress: {
        street: editInvoice.invoice?.senderAddress?.street || "",
        city: editInvoice.invoice?.senderAddress?.city || "",
        postCode: editInvoice.invoice?.senderAddress?.postCode || "",
        country: editInvoice.invoice?.senderAddress?.country || "",
    },
      clientName: editInvoice.invoice?.clientName || "",
      clientEmail: editInvoice.invoice?.clientEmail || "",
      clientAddress: {
        street: editInvoice.invoice?.clientAddress?.street || "",
        city: editInvoice.invoice?.clientAddress?.city || "",
        postCode: editInvoice.invoice?.clientAddress?.postCode || "",
        country: editInvoice.invoice?.clientAddress?.country || "",
      },
      createdAt: (editInvoice.invoice?.createdAt ? new Date(editInvoice.invoice?.createdAt) : new Date()),
      paymentDue: ((editInvoice.invoice?.createdAt ? new Date(editInvoice.invoice?.createdAt).addDays(+selectedOption) : false) || new Date().addDays(+selectedOption)),
      paymentTerms: selectedOption,
      description: editInvoice.invoice?.description || "",
      status: "Pending"
    }
  });


  useEffect(() => {
    form.setFieldValue("paymentDue", ((editInvoice.invoice?.createdAt ? new Date(editInvoice.invoice?.createdAt).addDays(+selectedOption) : false) || new Date().addDays(+selectedOption)))

    form.setFieldValue("paymentTerms", selectedOption)
  }, [selectedOption])


  return (
    <Container>
      <Title>New Invoice</Title>
      <StyledForm onSubmit={(e) => handleSubmit({ values: form.values, items, e, id: uid() })} id="add-invoice-form">
        <SenderAddressSection>
          <BillText>Bill from</BillText>
          <InputField>
            <StyledLabel>Street Address</StyledLabel>
            <StyledInput required {...form.getInputProps("senderAddress.street")} />
          </InputField>

          <InputsField>
            <InputField>
              <StyledLabel>City</StyledLabel>
              <StyledInput required {...form.getInputProps("senderAddress.city")} />
            </InputField>

            <InputField>
              <StyledLabel>Post Code</StyledLabel>
              <StyledInput required {...form.getInputProps("senderAddress.postCode")} />
            </InputField>

            <InputField>
              <StyledLabel>Country</StyledLabel>
              <StyledInput required {...form.getInputProps("senderAddress.country")} />
            </InputField>
          </InputsField>
        </SenderAddressSection>
        <ClientAddressSection>
          <BillText>Bill to</BillText>
          <InputField>
            <StyledLabel>Client's name</StyledLabel>
            <StyledInput required {...form.getInputProps("clientName")} />
          </InputField>
          <InputField>
            <StyledLabel>Client's email</StyledLabel>
            <StyledInput required
              placeholder="e.g. email@gmail.com"
              {...form.getInputProps("clientEmail")}
            />
          </InputField>
          <InputsField>
            <InputField>
              <StyledLabel>City</StyledLabel>
              <StyledInput required {...form.getInputProps("senderAddress.city")} />
            </InputField>

            <InputField>
              <StyledLabel>Post Code</StyledLabel>
              <StyledInput required {...form.getInputProps("senderAddress.postCode")} />
            </InputField>

            <InputField>
              <StyledLabel>Country</StyledLabel>
              <StyledInput required {...form.getInputProps("senderAddress.country")} />
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
              <StyledSelect defaultValue={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {options.map((option) => (
                  <option key={option.label} value={option.value}>{option.label}</option>
                ))}
              </StyledSelect>
            </InputField>
          </DatesField>
          <InputField>
            <StyledLabel>Project Description</StyledLabel>
            <StyledInput required
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
      <FormButtons setToggleForm={setToggleForm} />
    </Container>
  );
};

export default Form;
