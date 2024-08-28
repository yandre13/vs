import Head from 'next/head'

export default function SEO({config}) {
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

			{/* {config?.acf?.site_config?.fb_domain && (
				<meta
					name="facebook-domain-verification"
					content={config.acf.site_config.fb_domain}
				/>
			)} */}

			<link rel="icon" href="/favicon.ico" />

			<script dangerouslySetInner={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-M4H3KJC');`}}></script>
		</Head>
	)
}
