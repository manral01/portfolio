import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4rem 1rem;
  max-width: 1000px;
  margin: auto;
  color: #d1d5db;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #f9a8d4;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #9ca3af;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 80vh;
  border-radius: 12px;
  border: 2px solid #1f1f1f;

  @media (max-width: 600px) {
    height: 60vh;
  }
`;

const DownloadBtn = styled.a`
  display: inline-block;
  margin-top: 2rem;
  background: #3b82f6;
  padding: 0.9rem 2rem;
  border-radius: 10px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    background: #2563eb;
    transform: translateY(-3px);
  }
`;

const Resume = () => {
  return (
    <Wrapper>
      <Title>My Resume</Title>
      <Subtitle>
        Here is my updated resume. You can preview or download it.
      </Subtitle>

      <PDFViewer src="/resume.pdf" title="resume" />

      <DownloadBtn href="/resume.pdf" download>
        ⬇ Download Resume
      </DownloadBtn>
    </Wrapper>
  );
};

export default Resume;
