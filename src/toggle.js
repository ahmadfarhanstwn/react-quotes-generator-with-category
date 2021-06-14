import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { ReactComponent as DarkIcon } from "./icons/darkicon.svg";
import { ReactComponent as LightIcon } from "./icons/lighticon.svg";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 6rem;
  height: 3.5rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ DarkMode }) =>
        DarkMode ? "translateY(0)" : "translateY(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ DarkMode }) =>
        DarkMode ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";
  return (
    <ToggleContainer DarkMode={isDark} onClick={toggleTheme}>
      <LightIcon />
      <DarkIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
