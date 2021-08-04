import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: auto;
  padding: 2rem;
`;


const defaultEndPoint = 'https://api.themoviedb.org/3/movie/top_rated?api_key=07cd617617f682fcb671041a15fccda6';

export async function getServerSideProps() {
  const res = await fetch(defaultEndPoint);
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>WeView | Dash</title>
        <meta
          name="description"
          content="Create viewlists for movies and tv shows to share with other users."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </>
  );
}