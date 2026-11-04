import type { AppProps } from 'next/app';
import '@fontsource-variable/dm-sans';
import '@fontsource-variable/fraunces';
import '@fontsource/dm-mono/400.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
