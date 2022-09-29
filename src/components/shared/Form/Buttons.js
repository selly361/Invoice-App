import React from "react";
import styled from "styled-components";

const Button = styled.button`
    padding: 1rem 2rem;
    font-size: 1.3rem;
    
    `

const DiscardButton = styled.button`
  padding: 1.1rem 0;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.btnSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
  transition: 1s background-color ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnSecondaryHover};
  }
`

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
const FormButtons = ({ }) => {
  return (
    <Container>
      <DiscardButton>Discard</DiscardButton>
      <div>
        <Button>Save as Draft</Button>
        <Button type="submit" form="add-invoice-form">Save & Send</Button>
      </div>
    </Container>
  );
};

export default FormButtons;
