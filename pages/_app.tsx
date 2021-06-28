import '@fontsource/poppins';
import '@styles/globals.css';

import { AppProps } from 'next/app';
import { FC } from 'react';
import withDarkMode, { MODE } from 'next-dark-mode';
import { FlagsProvider } from '@atlaskit/flag';

import { AuthProvider } from '@context/Session';
import { Web3Provider } from '@context/Web3Connect';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Web3Provider>
    <AuthProvider>
      <FlagsProvider>
        <Component {...pageProps} />
      </FlagsProvider>
    </AuthProvider>
  </Web3Provider>
);

export default withDarkMode(App, { defaultMode: MODE.DARK });
