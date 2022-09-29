import { GlobalStyle, dark, light } from "../../global-styles/global";
import styled, { ThemeProvider } from "styled-components";
import { useContext, useEffect } from "react";

import { AnimatePresence } from "framer-motion";
import FormWrapper from "../shared/Form/FormWrapper";
import { InvoiceContextProvider } from "../../context/InvoiceProvider";
import Navbar from "../Navbar/Navbar";
import Overlay from "../shared/Overlay/Overlay";

const StyledWrapper = styled.main`
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.bgMain};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = ({ children }) => {
  const {
    themeData,
    toggleDelete,
    toggleForm,
    setToggleDelete,
    setToggleForm,
    editInvoice,
    setEditInvoice
  } = useContext(InvoiceContextProvider);

  const handleOverlayClick = () => {
    setToggleDelete(false);
    setToggleForm(false);
    setEditInvoice(prev => ({...prev, edit: false}))
  };

  useEffect(() => {
    if(toggleForm || toggleDelete){
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [toggleDelete, toggleForm])

  return (
    <ThemeProvider theme={themeData.theme === "dark" ? dark : light}>
      <GlobalStyle />
      <StyledWrapper>
        <Navbar {...themeData} />
        <FormWrapper editInvoice={editInvoice} toggleForm={toggleForm} />
        {children}
      </StyledWrapper>
      <AnimatePresence>
        {toggleForm || toggleDelete || editInvoice.edit ? <Overlay handleOverlayClick={handleOverlayClick} /> : null}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Wrapper;
