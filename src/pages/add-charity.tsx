import Head from 'next/head'
import "@fontsource/poppins";
import 'react-popper-tooltip/dist/styles.css';

import Header from '../components/Header'

const AddCharity = () => {
  return (
    <div>
      <Head>
        <title>Add a Charity | Gorgeous BSC Token</title>
        <meta name="description" content="Want a charity to be considered and voted on by the Gorgeous community, apply here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

export default AddCharity;
