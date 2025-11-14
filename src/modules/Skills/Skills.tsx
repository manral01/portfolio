import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const SmallTitle = styled.p`
  color: #9ca3af;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(to right, #a78bfa, #f9a8d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    font-size: 2.3rem;
  }
`;

const Intro = styled.p`
  color: #d1d5db;
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Divider = styled.div`
  width: 90%;
  height: 2px;
  margin: 2rem auto;
  background-color: #1f1f1f;
`;

const SectionTitle = styled.h2`
  margin: 2rem 0 1.5rem;
  font-size: 1.4rem;
  color: #9ca3af;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 2rem;
  justify-items: center;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: #1f1f1f;
  width: 130px;
  height: 130px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  transition: 0.3s ease;

  &:hover {
    background: #2a2a2a;
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.6rem;
`;

const Label = styled.p`
  color: #e5e7eb;
  margin-bottom: 0.4rem;
`;

const Stars = styled.div`
  color: gold;
  font-size: 1rem;
`;

const Skills = () => {
  return (
    <Wrapper>
      <SmallTitle>My array of</SmallTitle>
      <Title>Technical Skills</Title>

      <Intro>
        I possess a strong blend of both technical and soft skills. With
        hands-on experience across modern web technologies such as React, Vue,
        TypeScript and FastAPI, I have worked on scalable, accessible, and
        responsive applications. My understanding of databases like MySQL, along
        with version control using Git, has helped me deliver clean,
        maintainable, and production-ready solutions. These skills, along with
        problem-solving experience, enable me to build high-quality applications
        and tackle real-world challenges effectively.
      </Intro>

      <Divider />

      {/* Programming Languages */}
      <SectionTitle>Programming Languages</SectionTitle>
      <Grid>
        <Card>
          <Icon><img></img></Icon>
          <Label>JavaScript</Label>
          <Stars>⭐⭐⭐⭐⭐</Stars>
        </Card>

        <Card>
          <Icon>🔷</Icon>
          <Label>TypeScript</Label>
          <Stars>⭐⭐⭐⭐</Stars>
        </Card>

        <Card>
          <Icon>💻</Icon>
          <Label>C++</Label>
          <Stars>⭐⭐⭐⭐</Stars>
        </Card>

        <Card>
          <Icon>🧪</Icon>
          <Label>SQL</Label>
          <Stars>⭐⭐⭐</Stars>
        </Card>
      </Grid>

      <Divider />

      {/* Frameworks */}
      <SectionTitle>Frameworks</SectionTitle>
      <Grid>
        <Card>
          <Icon>⚛️</Icon>
          <Label>React</Label>
          <Stars>⭐⭐⭐⭐</Stars>
        </Card>

        <Card>
          <Icon>🖼️</Icon>
          <Label>Vue</Label>
          <Stars>⭐⭐⭐</Stars>
        </Card>

        <Card>
          <Icon>🎨</Icon>
          <Label>TailwindCSS</Label>
          <Stars>⭐⭐⭐⭐</Stars>
        </Card>

        <Card>
          <Icon>🚀</Icon>
          <Label>FastAPI</Label>
          <Stars>⭐⭐⭐</Stars>
        </Card>
      </Grid>

      <Divider />

      {/* Database & Tools */}
      <SectionTitle>Tools & Databases</SectionTitle>
      <Grid>
        <Card>
          <Icon>🗄️</Icon>
          <Label>MySQL</Label>
          <Stars>⭐⭐⭐⭐</Stars>
        </Card>

        <Card>
          <Icon>🔧</Icon>
          <Label>Git</Label>
          <Stars>⭐⭐⭐⭐</Stars>
        </Card>
      </Grid>
    </Wrapper>
  );
};

export default Skills;
