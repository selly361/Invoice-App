import "react-datepicker/dist/react-datepicker.css";

import React, { Fragment, useState } from "react";

import { CalenderIcon } from "../../../assets/icons";
import DatePicker from "react-datepicker";
import ItemsForm from "./ItemsForm";
import styled from "styled-components";
import { useForm } from "@mantine/form";

const Container = styled.div`
  height: 100%;
  width: 90%;
  margin: 2rem auto;
`;

const StyledForm = styled.form`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.bgForm};
  display: flex;
  flex-flow: column;
  gap: 2.5rem;
  overflow-y: scroll;
  padding: 1.5rem 1rem 1.5rem 0;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.bgInput};
  border: 1px solid ${({ theme }) => theme.colors.bgInputBorder};
  width: 100%;
  padding: 13px 10px 13px 17px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const InputField = styled.fieldset`
  display: flex;
  gap: 0.7rem;
  flex-flow: column;
`;

const SenderAddressSection = styled.section`
  display: flex;
  gap: 1.5rem;
  flex-flow: column;
`;

const InputsField = styled.fieldset`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const DatesField = styled.fieldset`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ClientAddressSection = styled(SenderAddressSection)``;

const BillText = styled.h5`
  color: ${({ theme }) => theme.colors.purple};
`;

const CustomInput = styled.div`
  background-color: ${({ theme }) => theme.colors.bgInput};
  border: 1px solid ${({ theme }) => theme.colors.bgInputBorder};
  width: 200%;
  padding: 13px 10px 13px 17px;
  border-radius: 5px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;

  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const ItemsSection = styled.section`
  display: flex;
  gap: 1.5rem;
  flex-flow: column;
`;

const StyledItemsLabel = styled(StyledLabel)`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grayMedium};
`;

const AddItemButton = styled.button`
  width: 100%;
  padding: 1.1rem 0;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.btnSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
  transition: 1s background-color ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnSecondaryHover};
  }
`;

const Form = () => {
  const form = useForm({
    initialValues: {
      senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      clientName: "",
      clientEmail: "",
      clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      createdAt: new Date(),
      paymentTerms: "30",
      description: "",
    },
  });

  const [items, setItems] = useState([{
    name: "nameValue",
    quantity: 12,
    price: 12,
  }]);

console.log(items)
  
  return (
    <Container>
      <Title>New Invoice</Title>
      <StyledForm>
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
              <StyledInput {...form.getInputProps("paymentTerms")} />
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
          <div>
            {items.map((data, i) => (
              <ItemsForm id={i} key={i} data={data} items={items} setItems={setItems} />
            ))}
          </div>
          <AddItemButton
            onClick={() =>
              setItems((prev) => [
                ...prev,
                {}
              ])
            }
            type="button"
          >
            + Add New Item
          </AddItemButton>
        </ItemsSection>
      </StyledForm>
    </Container>
  );
};

export default Form;

// onClick={() => {
//   let items = form.getInputProps("items").value;
//   items = items.filter((item, index) => index !== i);
//   form.setFieldValue("items", items);
// }}
