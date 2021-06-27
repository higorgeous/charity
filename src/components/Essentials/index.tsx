import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { FlagsProvider } from '@atlaskit/flag';

import 'react-popper-tooltip/dist/styles.css';

import Top from '../Top';
import Header from '../Header';
import Main from '../Main';

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

const Essentials: FC<Props> = ({ title, description, children }) => {
  return (
    <FlagsProvider>
      <div>
        <Top />
        <Head>
          <title>{title} | Gorgeous BSC Token</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Main>{children}</Main>
      </div>
    </FlagsProvider>
  );
};

export default Essentials;
