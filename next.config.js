import {setupDevPlatform} from '@cloudflare/next-on-pages/next-dev'

if (process.env.NODE_ENV === 'development') {
	await setupDevPlatform()
}

// next.config.js
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/**', // Permite todas las rutas dentro de este dominio
			},
		],
	},
}
