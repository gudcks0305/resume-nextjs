import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/resume.css';

import { AppProps } from 'next/app';

export default function YosumeApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
