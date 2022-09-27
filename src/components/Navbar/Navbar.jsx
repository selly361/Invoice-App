import { Logo, MoonIcon, SunIcon } from "../../assets/icons";

import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 15vh;
  background-color: ${({ theme }) => theme.colors.bgHeader};
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
`;
const LogoWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100px;
  height: 100%;
  border-radius: 0px 20px 20px 0px;
  background: rgb(124, 93, 250);

  &::before {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 50%;
    background: rgb(146, 119, 255);
    border-radius: 20px 0px;
    transition: 0.8s height ease;
  }

  &:hover {
    cursor: pointer;

    svg {
      transform: scale(1) rotate(360deg);
    }

    &::before {
      height: 75%;
    }
  }

  svg {
    transform: scale(1.5);
    transition: 0.8s transform ease;
  }
`;

const ProfilePicture = styled.img`
  height: 50px;
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 2.5rem;
`;
const Divider = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;


const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
const Navbar = ({ theme, setTheme }) => {
  return (
    <StyledNavbar>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Container>
        <ThemeButton onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </ThemeButton>

        <Divider />
        <ProfilePicture src="https://avatars.githubusercontent.com/u/104414846?v=4" />
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
