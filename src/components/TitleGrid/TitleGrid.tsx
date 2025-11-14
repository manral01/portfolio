import styled from "styled-components";
import MenuTile from "../common/MenuTile";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 1rem 3rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
    box-shadow: ${({ theme }) =>
  theme.background === "#e7e9ef"
    ? "0 4px 12px rgba(0,0,0,0.08)"
    : "none"};

`;

const TileGrid = () => {
  const tiles = [
    { title: "About Me", icon: "ℹ️", link: "/about" },
    { title: "Work Experience", icon: "💼", link: "/experience" },
    { title: "Technical Skills", icon: "⚙️", link: "/skills" },
    { title: "Projects", icon: "💻", link: "/projects" },
    { title: "Profiles", icon: "📊", link: "/profiles" },
    { title: "Resume", icon: "🪪", link: "/resume" },
  ];

  return (
    <Container>
      {tiles.map((t) => (
        <MenuTile key={t.title} icon={t.icon} title={t.title} link={t.link} />
      ))}
    </Container>
  );
};

export default TileGrid;
