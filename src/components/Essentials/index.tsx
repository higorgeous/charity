import Head from 'next/head';
import { FC, ReactNode } from 'react';

import 'react-popper-tooltip/dist/styles.css';
import 'react-tabs/style/react-tabs.css';

import Top from '../Top';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Breadcrumbs from '@components/Breadcrumbs';
import CTA from '@components/CTA';

type Props = {
  title: string;
  description: string;
  children: ReactNode;
  isCharity?: boolean;
};

const Essentials: FC<Props> = ({ title, description, children, isCharity }) => {
  return (
    <div>
      <Top />
      <Head>
        <title>{title} | Gorgeous BSC Token</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <Main>{children}</Main>
      <CTA />
      <Breadcrumbs title={title} isCharity={isCharity} />
      <Footer />
    </div>
  );
};

export default Essentials;
