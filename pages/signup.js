import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 2rem;
  video {
    position: relative;
    border: 2px solid #915f6d;
    height: 80vh;
    opacity: 0.7;
    object-fit: cover;
    width: 100%;
    z-index: 0;
  }
`;

const OverlayForm = styled.div`
  position: absolute;
  top: -60px;
  z-index: 9999999;
  width: 500px;

  h3{
    padding: 3rem;
    text-align:center;
    font-size: 3rem;
    text-shadow: 2px 2px #915f6d;
  }
`;


export default function Signup() {
  return (
    <>
      <Head>
        <title>weView | </title>
        <meta
          name="description"
          content="Create viewlists for movies and tv shows to share with other users."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
      
        <video layout="responsive" autoPlay loop muted>
          <source src="/filmturn.mp4" type="video/mp4" />
        </video>

      </Container>
      <Footer />
    </>
  );
}
