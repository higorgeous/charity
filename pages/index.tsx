import Head from 'next/head'
import "@fontsource/poppins";
import 'react-popper-tooltip/dist/styles.css';

import Header from '../components/Header'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Charity voting platform for Gorgeous donations | Gorgeous BSC Token</title>
        <meta name="description" content="Vote on the charities you want Gorgeous to donate to." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

export default Index;
