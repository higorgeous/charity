import Head from 'next/head'
import 'react-popper-tooltip/dist/styles.css';

import Header from '../components/Header'

const About = () => {
  return (
    <div>
      <Head>
        <title>About Gorgeous | Gorgeous BSC Token</title>
        <meta name="description" content="Learn more about Gorgeous and their wonderful community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

export default About;
