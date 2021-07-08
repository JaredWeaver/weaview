import Head from 'next/head';
import Navbar from '../components/Navbar';
import Jumbo from '../components/Jumbo';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>WeView</title>
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
