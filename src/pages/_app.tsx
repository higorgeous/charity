import '../styles/globals.css'
import type { AppProps } from 'next/app'
import withDarkMode, { MODE } from 'next-dark-mode'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default withDarkMode(App, { defaultMode: MODE.DARK })
