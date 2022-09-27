import { GlobalStyle, dark, light } from "../../global-styles/global";
import styled, { ThemeProvider } from "styled-components";

import { InvoiceContextProvider } from "../../context/InvoiceProvider";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";

const StyledWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.bgMain};
`;

const Wrapper = ({ children }) => {
  const { themeData } = useContext(InvoiceContextProvider);

  return (
    <ThemeProvider theme={themeData.theme === "dark" ? dark : light}>
      <GlobalStyle />
      <StyledWrapper>
        <Navbar { ...themeData } />
        {children}
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default Wrapper;
