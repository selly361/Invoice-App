import React from "react";
import styled from "styled-components";

const Button = styled.button`
    padding: 1rem 2rem;
    font-size: 1.3rem;
  border-radius: 10px;
    
    `



const DiscardButton = styled(Button)`
  padding: 1.1rem 0;
  background-color: ${({ theme }) => theme.colors.btnSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
  transition: 1s background-color ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnSecondaryHover};
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 100px;
    align-items: center;
`
const FormButtons = ({ setToggleForm }) => {
  return (
    <Container>
      <DiscardButton onClick={() => setToggleForm(e => !e)}>Discard</DiscardButton>
      <ButtonsWrapper>
        <Button>Save as Draft</Button>
        <Button type="submit" form="add-invoice-form">Save & Send</Button>
      </ButtonsWrapper>
    </Container>
  );
};

export default FormButtons;
