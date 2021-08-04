import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Signup() {
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
    </>
  );
}
