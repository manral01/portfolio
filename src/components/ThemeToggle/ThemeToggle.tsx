import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextObject";

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.card};
  border: none;
  padding: 10px 12px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  transition: 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeToggle = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) return null;

  return (
    <ToggleButton onClick={ctx.toggleTheme}>
      {ctx.theme === "dark" ? "🌞" : "🌙"}
    </ToggleButton>
  );
};

export default ThemeToggle;
