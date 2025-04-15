import React from 'react'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AppQueryProvider, AppWidthProvider } from 'context'
import Loader from 'components/Loader'
import logosApi from 'data/logos'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 600000,
            cacheTime: 900000,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      })
  )
  const [loading, setLoading] = React.useState(true)

  const fetchLogos = () => logosApi
  const prefetchLogos = async () => {
    await queryClient.prefetchQuery('logos', fetchLogos, {
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    })
  }

  React.useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 3000)
    }
  }, [])
  React.useEffect(() => {
    prefetchLogos()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      {/* Google Analytics */}
      <Script
        id="gtag-js"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-EPNK6PHMPW"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EPNK6PHMPW');
          `,
        }}
      />
      {/* SalesIQ Initialization */}
      <Script id="salesiq-init" strategy="afterInteractive">
        {`
          window.$zoho = window.$zoho || {};
          $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
        `}
      </Script>
      <Script
        id="zsiqscript"
        src="https://salesiq.zohopublic.com/widget?wc=siq1d987b3e8d606e8cc9439a9455f015d12a2ed8a02b14274fe91bf7206d034b70"
        defer
      />
      <Hydrate state={pageProps.dehydratedState}>
        <AppWidthProvider>
          <AppQueryProvider>
            {loading ? <Loader /> : <Component {...pageProps} />}
          </AppQueryProvider>
        </AppWidthProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp