module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '540px',
			md: '768px',
			lg: '1024px',
			xl: '1367px',
			'2xl': '1536px',
			'3xl': '2560px',
		},
		extend: {
			grayscale: ['hover', 'focus'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
