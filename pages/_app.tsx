import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Auth0Provider } from '@auth0/auth0-react';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_BASE_URL}
    >
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default MyApp;
