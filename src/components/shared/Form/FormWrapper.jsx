import { AnimatePresence, motion } from "framer-motion";

import Form from "./Form";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 660px;
  background-color: ${({ theme }) => theme.colors.bgForm};
  left: 0;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  z-index: 100;

  @media (max-width: 800px){
    width: 100vw;
    border-radius: 0px;
    overflow: hidden;
  }
`;

const FormWrapper = ({ toggleForm, editInvoice }) => {
  const animation = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", duration: 1, bounce: 0.05},
    },
    exit: {
      x: "-100vw",
      transition: { duration: 1 },
    },
  };
  return (
    <AnimatePresence mode="wait">
      {(toggleForm || editInvoice.edit) && (
        <StyledWrapper variants={animation} initial="hidden" animate="visible" exit="exit">
          <Form />
        </StyledWrapper>
      )}
    </AnimatePresence>
  );
};

export default FormWrapper;
