import Head from 'next/head';
import Navbar from '../components/Navbar';
import Jumbo from '../components/Jumbo';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const defaultEndPoint = 'https://api.themoviedb.org/3/movie/top_rated?api_key=07cd617617f682fcb671041a15fccda6';

export async function getServerSideProps() {
  const res = await fetch(defaultEndPoint);
  const data =await res.json()
  return {
    props: {
      data
    }
  }
}

export default function Home( {data} ) {
  console.log('data', data)
  return (
    <>
      <Head>
        <title>weView</title>
        <meta
          name="description"
          content="Create viewlists for movies and tv shows to share with other users."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <Jumbo />
      <Footer />
    </>
  );
}
