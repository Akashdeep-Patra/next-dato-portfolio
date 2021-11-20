import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../styles/globals.scss';
function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

  }, [])
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_BASE_URL}
    >
      {
        isMounted && (
          <ThemeProvider attribute='class'>
            <Component {...pageProps} />
          </ThemeProvider>
        )
      }
    </Auth0Provider>
  );
}

export default MyApp;
