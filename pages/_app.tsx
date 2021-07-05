import '@fontsource/poppins';
import '@styles/globals.css';
import 'react-popper-tooltip/dist/styles.css';
import 'react-tabs/style/react-tabs.css';

import { AppProps } from 'next/app';
import { FC } from 'react';
import withDarkMode, { MODE } from 'next-dark-mode';
import { FlagsProvider } from '@atlaskit/flag';

import { AuthProvider } from '@context/Session';
import { Web3Provider } from '@context/Web3Connect';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <FlagsProvider>
    <Web3Provider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Web3Provider>
  </FlagsProvider>
);

export default withDarkMode(App, { defaultMode: MODE.DARK });
