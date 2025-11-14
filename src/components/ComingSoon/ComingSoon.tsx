import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #d1d5db;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #f9a8d4;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.7;
  color: #9ca3af;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Emoji = styled.div`
  font-size: 4rem;
  margin-top: 1.5rem;
`;

const ComingSoonPage = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>
        This section is currently under development.  
        New updates and features are on the way.
      </Subtitle>
      <Emoji>🚧</Emoji>
    </Wrapper>
  );
};

export default ComingSoonPage;
