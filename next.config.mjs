import {setupDevPlatform} from '@cloudflare/next-on-pages/next-dev'

if (process.env.NODE_ENV === 'development') {
	await setupDevPlatform()
}
/** @type {import('next').NextConfig} */
const nextConfig = {
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
	loader: 'custom',            // usa loaderFile
    loaderFile: './cloudinary-loader.js',
}

// next.config.js
export default nextConfig
