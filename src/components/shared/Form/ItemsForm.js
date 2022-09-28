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
`;

const ItemName = styled(defaultInput)`
  width: 180px;
`;

const ItemQuantity = styled(defaultInput)`
  width: 50px;
`;

const ItemPrice = styled(defaultInput)`
  width: 100px;
  overflow-x: auto;
`;

const ItemTotal = styled.h5`
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemsField = styled.fieldset`
  display: flex;
  justify-content: space-around;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const InputField = styled.fieldset`
  display: flex;
  gap: 0.7rem;
  flex-flow: column;
`;

const ItemsForm = ({ data, items, setItems, id }) => {
  const [nameValue, setNameValue] = useState(data.name || "");
  const [quantityValue, setQuantityValue] = useState(data.quantity || 1);
  const [priceValue, setPriceValue] = useState(data.price || 0);

  if (!data.length) {
    let copy = items;
    copy[copy.length - 1] = {
      name: nameValue,
      quantity: quantityValue,
      price: priceValue,
      total: priceValue * quantityValue,
    };
    setItems(copy);
  }

  const handleDelete = () => {
    setItems(items.filter((item, index) => index - 1 !== id - 1))
  };

  return (
    <Fragment>
      <ItemsField>
        <InputField>
          <StyledLabel>Item Name</StyledLabel>
          <ItemName
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </InputField>
        <InputField>
          <StyledLabel>Qty</StyledLabel>
          <ItemQuantity
            value={quantityValue}
            onChange={(e) => setQuantityValue(+e.target.value)}
          />
        </InputField>
        <InputField>
          <StyledLabel>Price</StyledLabel>
          <ItemPrice onChange={(e) => setPriceValue(+e.target.value)} />
        </InputField>
        <InputField>
          <StyledLabel>Total</StyledLabel>
          <ItemTotal>
            {(priceValue * quantityValue).toLocaleString()} <DeleteIcon onClick={handleDelete} />
          </ItemTotal>
        </InputField>
      </ItemsField>
      <br />
    </Fragment>
  );
};

export default ItemsForm;
