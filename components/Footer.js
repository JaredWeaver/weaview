import styled from 'styled-components';
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube
} from 'react-icons/ai';

const Container = styled.div`
  flex: 1;
`;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: auto;
  bottom: 0px;
  background: linear-gradient(to bottom, #000000 0%, #915f6d 100%);
`;

const FootSection = styled.section`
  padding: 1.25rem 1.875rem;
  display: flex;
  /* flex-wrap: wrap; */
  @media only screen and (min-width: 29.8125rem /*477px*/) {
    justify-content: space-around;
  }
  @media only screen and (min-width: 77.5rem /*1240px*/) {
    justify-content: space-evenly;
  }
`;

const FootCol = styled.div`
display: flex;
justify-content: center;
align-items: center;
  padding: 1.25rem 1.875rem;
  min-width: 12.5rem;
  ul {
    list-style-type: none;
  }
`;

const FootTitle = styled.h2`
  font-size: 1.375rem;
  padding-bottom: 0.225rem;
`;

const FootSocialSection = styled.section`
display: flex;
justify-content: center;
  /* padding: 0 1.875rem 1.25rem; */
  ul {
    display: flex;
    justify-content: center;
    width: 100%;
    border-top: 1px #ffdae0 solid;
    padding-top: 1.25rem;
    list-style-type: none;
    li{
        margin: 0.5rem;
        font-size: 2rem;

    }
  }
`;

const FootLegalSection = styled.section`
  padding: 0 1.875rem 1.25rem;
  ul {
    display: flex;
    justify-content: center;
    border-top: 1px #ffdae0 solid;
    /* padding-top: 1.25rem; */
    list-style-type: none;
    li{
        margin: 0.5rem;
        font-size: .75rem;

    }
  }
`;

const Footer = () => {
  return (
    <>
      <Container />
      <FooterContainer>
        <FootSection>
          <FootCol>
            <FootTitle>About</FootTitle>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </FootCol>
          <FootCol>
            <FootTitle>Contact</FootTitle>
            <ul>
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">eBooks</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
            </ul>
          </FootCol>
          <FootCol>
            <FootTitle>Resources</FootTitle>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
            </ul>
          </FootCol>
        </FootSection>
        <FootSocialSection>
          <ul>
            <li>
              <a href="#">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillTwitterCircle />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillYoutube />
              </a>
            </li>
          </ul>
        </FootSocialSection>
        <FootLegalSection>
          <ul>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li>&copy; 2021 Copyright Kish Inc.</li>
          </ul>

        </FootLegalSection>
      </FooterContainer>
    </>
  );
};

export default Footer;
