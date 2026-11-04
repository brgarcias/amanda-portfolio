import type { AppProps } from 'next/app';
import '@fontsource-variable/dm-sans';
import '@fontsource-variable/fraunces/opsz.css';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
