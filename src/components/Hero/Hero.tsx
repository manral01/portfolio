import styled from "styled-components";

const Wrapper = styled.section`
  text-align: center;
  padding: 4rem 1rem;
`;

const Greeting = styled.p`
  color: #9ca3af;
  font-size: 1.2rem;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(90deg, #ef4444, #f97316);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 3s infinite linear;

  @keyframes shine {
    0% {
      filter: brightness(0.9);
    }
    50% {
      filter: brightness(1.3);
    }
    100% {
      filter: brightness(0.9);
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 0.3rem;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Greeting>Greetings from</Greeting>
      <Name>Abhishek Manral</Name>
      <Subtitle>I am</Subtitle>
      <p style={{ marginTop: "0.3rem", color: "#d1d5db" }}>
        a Software Engineer in Global Logic
      </p>
    </Wrapper>
  );
};

export default Hero;
