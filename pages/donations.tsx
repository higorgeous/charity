import Head from 'next/head'
import 'react-popper-tooltip/dist/styles.css';

import Header from '../components/Header'

const Donations = () => {
  return (
    <div>
      <Head>
        <title>Donations | Gorgeous BSC Token</title>
        <meta name="description" content="Charities that the Gorgeous community has helped support" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

export default Donations;
