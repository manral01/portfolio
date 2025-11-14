import styled from "styled-components";

// IMPORT YOUR ICON FILES
import GmailIcon from "../../assets/icons/gmail.png";
import LinkedInIcon from "../../assets/icons/linkedin.png";
import InstaIcon from "../../assets/icons/instagram.png";

const Wrapper = styled.footer`
  padding: 2rem 0;
  text-align: center;
  color: #d1d5db;
`;

const Icons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  img {
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      opacity: 0.8;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>Connect With Me</p>

      <Icons>
        {/* EMAIL */}
        <a href="mailto:manralabishek@gmail.com">
          <img src={GmailIcon} alt="email" />
        </a>

        {/* LINKEDIN */}
        <a href="https://www.linkedin.com/in/abhishek-manral/" target="_blank">
          <img src={LinkedInIcon} alt="linkedin" />
        </a>

        {/* INSTAGRAM */}
        <a href="https://www.instagram.com/manral.abhishekkk/" target="_blank">
          <img src={InstaIcon} alt="instagram" />
        </a>
      </Icons>
    </Wrapper>
  );
};

export default Footer;
