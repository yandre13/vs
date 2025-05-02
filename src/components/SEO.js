import Head from 'next/head'

export default function SEO({ config }) {
  return (
    <Head>
      <title>{config.title} | Visualiza</title>
      <meta name="description" content={config.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={config.open_graph.url} />
      <meta property="og:url" content={config.open_graph.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content={config.open_graph.image} />
      <meta name="twitter:card" content="summary" />
      <meta property="og:site_name" content="Visualiza" />

      {/* Meta Pixel Code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '657089467110889');
fbq('track', 'PageView');`
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=657089467110889&ev=PageView&noscript=1" />`
        }}
      />
      {/* End Meta Pixel Code */}

      <link rel="icon" href="/favicon.ico" />

      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M4H3KJC');`
        }}
      />
    </Head>
  )
}
