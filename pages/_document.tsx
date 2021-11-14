import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html className='dark:bg-green-500' lang='en'>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link rel='manifest' href='/manifest.json' />
          <link
            href='/icons/apple-touch-icon.png'
            rel='icon'
            type='image/png'
            sizes='16x16'
          />
          <link
            href='/icons/apple-touch-icon.png'
            rel='icon'
            type='image/png'
            sizes='32x32'
          />
          <link
            rel='apple-touch-icon'
            href='/icons/apple-touch-icon.png'
          ></link>
          <meta name='theme-color' content='#5e4ee9' />
          <meta charSet='utf-8' />
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#2e2e2e"
          /> */}
          {/* <link rel="manifest" href="/favicon/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#2e2e2e" />
          <meta name="theme-color" content="#2e2e2e" /> */}

          {/* <!-- Facebook Pixel Code --> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '138715444746902');
              fbq('track', 'PageView');
              `,
            }}
          /> */}

          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(){var e=window.rudderanalytics=window.rudderanalytics||[];e.methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],e.factory=function(t){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(t),e.push(r),e}};for(var t=0;t<e.methods.length;t++){var r=e.methods[t];e[r]=e.factory(r)}e.loadJS=function(e,t){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a)},e.loadJS(),
              e.load("${process.env.NEXT_PUBLIC_RUDDER_WRITE_KEY}","${process.env.NEXT_PUBLIC_RUDDER_DATAPLANE_URL}"),
              e.ready(() => {
                  console.log("We are set!!!")
              })
          }();
          `,
            }}
          /> */}

          {/* <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <img
                height="1"
                width="1"
                style="display:none"
                src="https://www.facebook.com/tr?id=138715444746902&ev=PageView&noscript=1"
              />
              `,
            }}
          /> */}
          {/* <!-- End Facebook Pixel Code --> */}

          {/* <!-- Google Tag Manager --> */}
          {/* <script
            async
            dangerouslySetInnerHTML={{
              __html: `(function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-W938996');`,
            }}
          /> */}
          {/* <!-- End Google Tag Manager --> */}
        </Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          {/* <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W938996"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          /> */}
          {/* <!-- End Google Tag Manager (noscript) --> */}
          {/* <div id="modal" /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
