import { GlobalStyle, dark, light } from "../../global-styles/global";
import styled, { ThemeProvider } from "styled-components";
import React, { useContext, useEffect } from "react";

import { AnimatePresence } from "framer-motion";
import FormWrapper from "../shared/Form/FormWrapper";
import { InvoiceContextProvider } from "../../context/InvoiceProvider";
import Navbar from "../Navbar/Navbar";
import Overlay from "../shared/Overlay/Overlay";

const StyledWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.bgMain};
  display: grid;
  place-items: center;
`;

const Wrapper = ({ children }) => {
  const {
    themeData,
    toggleDelete,
    toggleForm,
    setToggleDelete,
    setToggleForm,
  } = useContext(InvoiceContextProvider);

  const handleOverlayClick = () => {
    setToggleDelete(false);
    setToggleForm(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden"
  }, [toggleDelete, toggleForm])

  return (
    <ThemeProvider theme={themeData.theme === "dark" ? dark : light}>
      <GlobalStyle />
      <StyledWrapper>
        <Navbar {...themeData} />
        <FormWrapper toggleForm={toggleForm} />
        {children}
      </StyledWrapper>
      <AnimatePresence>
        {toggleForm || toggleDelete ? <Overlay handleOverlayClick={handleOverlayClick} /> : null}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Wrapper;