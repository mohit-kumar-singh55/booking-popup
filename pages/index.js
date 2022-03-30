import Head from 'next/head';
import PopUp from '../components/PopUp';

const Home = () => {
  return (
    <div className='flex w-full min-h-screen justify-center items-center bg-[#E5E5E5]'>
      <Head>
        <title>Skilly Tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PopUp />

    </div>
  )
}

export default Home;