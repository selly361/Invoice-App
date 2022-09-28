import React, { Fragment, useEffect, useState } from "react";

import { DeleteIcon } from "../../../assets/icons";
import styled from "styled-components";

let defaultInput = styled.input`
  background-color: ${({ theme }) => theme.colors.bgInput};
  border: 1px solid ${({ theme }) => theme.colors.bgInputBorder};
  padding: 13px 10px 13px 17px;
  border-radius: 5px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
  margin: 1rem 0;
`;

const ItemName = styled(defaultInput)`
  width: 120px;
`;

const MobileItemName = styled(defaultInput)`
  width: 100%;
`;

const ItemQuantity = styled(defaultInput)`
  width: 50px;
`;

const ItemPrice = styled(defaultInput)`
  width: 70px;
  overflow-x: auto;
`;

const ItemTotal = styled.h5`
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 0;

  p {
    overflow-x: scroll;
    width: 60px;
  }
`;

const ItemsField = styled.fieldset`
  display: flex;
  justify-content: space-between;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: .4rem 0;
`;

const InputField = styled.fieldset`
  display: flex;
  gap: 0.7rem;
  flex-flow: column;
  align-items: start;

  &.mob-item-container {
    display: none;
  }

  @media (max-width: 507px) {
    &.item-name-container {
      display: none;
    }

    &.mob-item-container {
      display: block;
      gap: 1.3rem;
    }
  }
`;

const ItemsForm = ({ items, setItems, id, name, quantity, price, total }) => {
  const [nameInput, setNameInput] = useState(name || "");
  const [quantityInput, setQuantityInput] = useState(quantity || 0);
  const [priceInput, setPriceInput] = useState(price || 0);
  const [totalInput, setTotalInput] = useState(priceInput * quantityInput);

  const handleDelete = () => {
    let itemsCop = items;
    itemsCop = itemsCop.filter((item) => item.id !== id);
    setItems(itemsCop);
  };

  console.log(items.find((item) => item.id === id).total);

  useEffect(() => {
    setTotalInput(priceInput * quantityInput);

    let copy = items;
    let item = copy.find((item) => item.id === id);
    item.name = nameInput;
    item.quantity = quantityInput;
    item.price = priceInput;
    item.total = totalInput;

    setItems(copy);
  }, [nameInput, quantityInput, priceInput, totalInput]);

  return (
    <Fragment>
      <InputField className="mob-item-container">
        <StyledLabel>Item Name</StyledLabel>
        <MobileItemName onChange={(e) => setNameInput(e.target.value)} />
      </InputField>
      <ItemsField>
        <InputField className="item-name-container">
          <StyledLabel>Item Name</StyledLabel>
          <ItemName onChange={(e) => setNameInput(e.target.value)} />
        </InputField>
        <InputField>
          <StyledLabel>Qty</StyledLabel>
          <ItemQuantity onChange={(e) => setQuantityInput(+e.target.value)} />
        </InputField>
        <InputField>
          <StyledLabel>Price</StyledLabel>
          <ItemPrice onChange={(e) => setPriceInput(+e.target.value)} />
        </InputField>
        <InputField>
          <StyledLabel>Total</StyledLabel>
          <ItemTotal>
            <p>{totalInput}</p> <DeleteIcon onClick={handleDelete} />
          </ItemTotal>
        </InputField>
      </ItemsField>
      <br />
    </Fragment>
  );
};

export default ItemsForm;
