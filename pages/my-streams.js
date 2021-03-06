import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StreamListContainer from '../components/StreamListContainer';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
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

export default function MyStreams({data}) {
  console.log('???', data);
  return (
    <>
      <Head>
        <title>WeView | Streams</title>
        <meta
          name="description"
          content="Create viewlists for movies and tv shows to share with other users."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <StreamListContainer
          title="Currently Streaming"
          streams={data.results} />
      </Container>
      <Footer />
    </>
  );
}