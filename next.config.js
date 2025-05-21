// next.config.js
module.exports = {
	output: 'export',
	images: {
		unoptimized: true,
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
