import '@fontsource/poppins';
import '@styles/globals.css';

import { AppProps } from 'next/app';
import { FC } from 'react';
import withDarkMode, { MODE } from 'next-dark-mode';

import { AuthProvider } from '@context/Session';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
);

export default withDarkMode(App, { defaultMode: MODE.DARK });
