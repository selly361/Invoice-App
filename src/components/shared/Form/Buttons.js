import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 1.2rem;
  border-radius: 10px;
`;

const DiscardButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.btnSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
  transition: 1s background-color ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnSecondaryHover};
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 100px;
  align-items: center;

  &.editing {
    justify-content: flex-end;
  }
`;

const CancelButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.btnSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
  transition: 1s background-color ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnSecondaryHover};
  }
`;

const DraftButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.btnSave};
  color: ${({ theme }) => theme.colors.textTertiary};
  font-weight: bold;
  transition: 1s background-color ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnSaveHover};
  }
`

const SaveButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.btnPrimary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  transition: 1s background-color ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnPrimaryHover};
  }

`

const FormButtons = ({ setToggleForm, onSubmit, editInvoice, setEditInvoice }) => {
  const handleToggle = () => setToggleForm(false);
  return (
    <Container className={editInvoice.edit ? "editing" : ""}>
      {!editInvoice.edit && (
        <DiscardButton onClick={handleToggle}>Discard</DiscardButton>
      )}
      <ButtonsWrapper>  
        {!editInvoice.edit && <DraftButton onClick={onSubmit}>Save as Draft</DraftButton>}
        {editInvoice.edit && (
          <CancelButton onClick={() => setEditInvoice(prev => ({...prev, edit: false }))}>Cancel</CancelButton>
        )}
        <SaveButton type="submit" form="add-invoice-form">
          {editInvoice.edit ? "Save Changes" : "Save & Send"}
        </SaveButton>
      </ButtonsWrapper>
    </Container>
  );
};

export default FormButtons;
