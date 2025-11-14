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
  color: #2ee9e9;
  font-weight: 700;
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
  margin: 2rem auto 3rem;
  background-color: #1f1f1f;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  width: 550px;
  max-width: 95%;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CardHeader = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  padding: 1rem;
  font-weight: 600;
  color: #ffffff;
`;

const CardBody = styled.div`
  padding: 1.7rem;
  text-align: left;
  color: #d1d5db;
  font-size: 1.05rem;
  line-height: 1.7;

  li {
    margin-bottom: 1.2rem;
  }
`;

const WorkExperience = () => {
  return (
    <Wrapper>
      <SmallTitle>Closer look at my</SmallTitle>
      <Title>Work Experience</Title>

      <Intro>
        I have worked with some of the well-known organizations as well as a startup. These
        experiences helped me grow in development, testing, accessibility, and large-scale UI
        engineering. They shaped my technical mindset and gave me exposure to industry-level
        standards and collaboration.
      </Intro>

      <Divider />

      <CardsWrapper>

        {/* GLOBAL LOGIC CARD */}
        <Card>
          <CardHeader color="#4ade80">Associate Software Engineer @GlobalLogic</CardHeader>

          <CardBody>
            <ul>
              <li>• Constructed and maintained a custom React component library for an enterprise client ensuring consistency and reusability across projects.</li>
              <li>• Built WCAG 2.1 compliant, responsive UI components using React.js, TypeScript, and Material UI.</li>
              <li>• Integrated components with Storybook, reducing UI inconsistencies by 30%.</li>
              <li>• Achieved 85% unit test coverage using Jest and React Testing Library.</li>
              <li>• Implemented critical UI modules ensuring high performance and strict design adherence.</li>
              <li>• Collaborated with backend, QA, DevOps, and UX teams in Agile workflows.</li>
              <li>• Managed translations across 35 languages in custom repositories.</li>
              <li>• Fixed numerous accessibility issues, improving WCAG compliance.</li>
              <li>• Led R&D to refactor a legacy module into micro-frontend based architecture, improving performance by 15%.</li>
            </ul>

            <p style={{ marginTop: "1.2rem" }}>• Duration: Feb 2023 – Present</p>
          </CardBody>
        </Card>

        {/* TRAVELEXIC CARD */}
        <Card>
          <CardHeader color="#d97706">QA Trainee @Travelexic</CardHeader>

          <CardBody>
            <ul>
              <li>• Executed 150+ manual test cases per month across multiple modules of a custom MICE-travel platform.</li>
              <li>• Performed functional, UI, and cross-browser testing across mobile and web applications.</li>
              <li>• Managed and resolved defects via JIRA, resulting in a 20% reduction in post-release customer issues.</li>
              <li>• Conducted manual API testing using Postman, identifying and resolving 22+ integration bugs.</li>
            </ul>

            <p style={{ marginTop: "1.2rem" }}>• Duration: Aug 2022 – Jan 2023</p>
          </CardBody>
        </Card>

      </CardsWrapper>
    </Wrapper>
  );
};

export default WorkExperience;
