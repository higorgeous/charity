import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';

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
  pageImage?: string;
  isCharity?: boolean;
};

const Essentials: FC<Props> = ({
  title,
  description,
  children,
  isCharity,
  pageImage = 'https://charity.higorgeous.io/page-image.png',
}) => {
  const router = useRouter();

  const pageUrl = `https://charity.higorgeous.io/${router.pathname}`;
  console.log(pageUrl);

  const schemaOrgJSONLD = [
    {
      '@context': `http://schema.org`,
      '@type': `WebSite`,
      url: pageUrl,
      name: `${title} | Gorgeous BSC Token`,
    },
  ];

  schemaOrgJSONLD.push({
    '@context': `http://schema.org`,
    '@type': `WebPage`,
    url: pageUrl,
    name: `${title} | Gorgeous BSC Token`,
  });

  return (
    <div>
      <Top />
      <Head>
        <meta charSet="utf-8" />
        <title>{title} | Gorgeous BSC Token</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="image" content={pageImage} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:title" content={`${title} | Gorgeous BSC Token`} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:description" content={description} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@GorgeousToken" />
        <meta name="twitter:title" content={`${title} | Gorgeous BSC Token`} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:description" content={description} />
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
