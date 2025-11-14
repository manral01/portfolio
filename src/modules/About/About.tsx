import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4rem 1rem;
  max-width: 1100px;
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
  color: #e4919e;
  font-weight: 700;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    font-size: 2.3rem;
  }
`;

const Intro = styled.p`
  color: #d1d5db;
  font-size: 1.2rem;
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

const Card = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 0;
  overflow: hidden;
  margin-top: 1rem;
`;

const ButtonBar = styled.div`
  background: #3b82f6;
  padding: 1rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const CardText = styled.div`
  padding: 2rem;
  text-align: left;
  color: #d1d5db;
  line-height: 1.7;

  li {
    margin-bottom: 1.5rem;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <SmallTitle>A little</SmallTitle>
      <Title>About Me</Title>

      <Intro>
        A Frontend Developer with a keen eye for clean design and smooth user
        experiences. I occasionally work on backend development as well, which
        helps me understand the full flow of applications. Outside of tech, I’m
        deeply interested in sports and geopolitics — they keep me active,
        aware, and constantly learning.
      </Intro>

      <Divider />

      <Card>
        <ButtonBar>Explore More About Me</ButtonBar>

        <CardText>
          <ul>
            <li>
              • Building and maintaining a scalable React component library for
              enterprise teams, ensuring design consistency and reusability
              across projects.
            </li>

            <li>
              • Creating accessible, responsive, and high-performance UI using
              React, TypeScript, and Material UI, aligned with WCAG 2.1
              standards.
            </li>

            <li>
              • Improving development quality with Storybook documentation and
              robust test coverage using Jest and React Testing Library.
            </li>

            <li>
              Staying active and curious through sports, geopolitics, trekking,
              and hiking, which help maintain balance, broaden perspective, and
              fuel creativity.
            </li>
          </ul>
        </CardText>
      </Card>
    </Wrapper>
  );
};

export default About;
