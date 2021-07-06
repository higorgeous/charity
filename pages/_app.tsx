import '@fontsource/poppins';
import '@styles/globals.css';
import 'react-popper-tooltip/dist/styles.css';
import 'react-tabs/style/react-tabs.css';
import 'react-modal-video/css/modal-video.min.css';

import { AppProps } from 'next/app';
import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import withDarkMode, { MODE } from 'next-dark-mode';
import { FlagsProvider } from '@atlaskit/flag';

import { AuthProvider } from '@context/Session';
import { Web3Provider } from '@context/Web3Connect';
import isClientSide from '@utils/isClientSide';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      if (isClientSide) (window as any).analytics.page(url);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlagsProvider>
      <Web3Provider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Web3Provider>
    </FlagsProvider>
  );
};

export default withDarkMode(App, { defaultMode: MODE.DARK });
