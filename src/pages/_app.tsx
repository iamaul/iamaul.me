import * as React from 'react';

import type { AppProps } from 'next/app';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';

import Router from 'next/router';
import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';

import NProgress from 'nprogress';

import { theme } from '@/theme';

import { SEO, SocialsProfileSEO } from '~/next-seo.config';
import siteConfig from '~/site.config';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} canonical={siteConfig.url + (router.asPath || '')} />
      <SocialProfileJsonLd {...SocialsProfileSEO} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;