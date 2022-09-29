import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 90%;
  margin: 2rem auto;
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.bgForm};
  display: flex;
  flex-flow: column;
  gap: 2.5rem;
  overflow-y: scroll;
  padding: 1.5rem 1rem 1.5rem 0;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.bgInput};
  border: 1px solid ${({ theme }) => theme.colors.bgInputBorder};
  width: 100%;
  padding: 13px 10px 13px 17px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledSelect = styled.select`
  background-color: ${({ theme }) => theme.colors.bgInput};
  border: 1px solid ${({ theme }) => theme.colors.bgInputBorder};
  padding: 13px 10px 13px 17px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;


`

export const InputField = styled.fieldset`
  display: flex;
  gap: 0.7rem;
  flex-flow: column;
`;

export const SenderAddressSection = styled.section`
  display: flex;
  gap: 1.5rem;
  flex-flow: column;
`;

export const InputsField = styled.fieldset`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const ItemsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
`

export const DatesField = styled.fieldset`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const ClientAddressSection = styled(SenderAddressSection)``;

export const BillText = styled.h5`
  color: ${({ theme }) => theme.colors.purple};
`;

export const CustomInput = styled.div`
  background-color: ${({ theme }) => theme.colors.bgInput};
  border: 1px solid ${({ theme }) => theme.colors.bgInputBorder};
  padding: 13px 10px 13px 17px;
  border-radius: 5px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
`;

export const ItemsSection = styled.section`
  display: flex;
  gap: 1.5rem;
  flex-flow: column;
  width: 100%;
`;

export const StyledItemsLabel = styled(StyledLabel)`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grayMedium};
`;

export const AddItemButton = styled.button`
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