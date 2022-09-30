import { DeleteButton } from "../../pages/InvoicePage/InvoicePage";
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Modal = styled(motion.div)`
  height: 250px;
  width: 450px;
  background-color: ${({ theme }) => theme.colors.bgDeleteModal};
  position: fixed;
  z-index: 100;
  inset: 0;
  margin: auto;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-flow: column;
  justify-content: space-around;

  @media (max-width: 550px){
    width: 90vw;
  }
`;

const CancelButton = styled.button`
  padding: 1.1rem 1.7rem;
  border-radius: 1.8rem;
  font-weight: bold;
  transition: 1s background-color ease;
  background-color: ${({ theme }) => theme.colors.btnSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnSecondaryHover};
  }

`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};

`
const Confirm = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};

`

const Wrap = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: end;
`

const DeleteModal = ({ id, handleDelete, setToggleDelete }) => {
    const Navigate = useNavigate()
  return (
    <Modal initial={{ scale: 0.3 }} animate={{scale: 1}} exit={{scale: 0, transition: { duration: .2 }}}>
      <Title>Confirm Deletion</Title>

      <Confirm>
        Are you sure you want to delete invoice {id}? This action cannot be
        undone.
      </Confirm>

      <Wrap>
        <DeleteButton onClick={() => {
            handleDelete(id)
            Navigate(-1)
        }}>Delete</DeleteButton>
        <CancelButton onClick={() => setToggleDelete(false)}>Cancel</CancelButton>
      </Wrap>
      
    </Modal>
  );
};

export default DeleteModal;
