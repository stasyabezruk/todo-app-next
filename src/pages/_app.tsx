/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import store from '../app/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === 'undefined') {
    return <></>;
  }
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
