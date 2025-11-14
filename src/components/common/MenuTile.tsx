import styled from "styled-components";
import { Link } from "react-router-dom";

interface TileProps {
  title: string;
  icon: string;
  link: string;
}

const Tile = styled.div`
  background-color: #1f1f1f;
  width: 130px;
  height: 130px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #2a2a2a;
    transform: translateY(-5px);
  }

  @media (max-width: 600px) {
    width: 110px;
    height: 110px;
  }
`;

const Icon = styled.div`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.text};
`;

const IconWrapper = styled.div`
  background: ${({ theme }) =>
    theme.background === "#0d0d0d" ? "#2a2a2a" : "#ffffffda"};

  padding: 12px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: ${({ theme }) =>
    theme.background === "#0d0d0d"
      ? "0 0 0" // no shadow in dark mode
      : "0 4px 10px rgba(0,0,0,0.1)"}; // soft shadow in light mode
`;

const Label = styled.p`
  margin-top: 0.6rem;
  font-size: 0.9rem;
  color: #e5e7eb;
`;

const MenuTile = ({ title, icon, link }: TileProps) => {
  return (
    <Link to={link}>
      <Tile>
        <IconWrapper>
          <Icon>{icon}</Icon>
        </IconWrapper>
        <Label>{title}</Label>
      </Tile>
    </Link>
  );
};

export default MenuTile;
