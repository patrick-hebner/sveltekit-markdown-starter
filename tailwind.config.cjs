const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		colors: {
			primary: colors.cyan,
			secondary: colors.indigo,
			base: colors.slate,
			body: colors.black,
			'body-inverse': colors.white
		},
		extend: {}
	},
	plugins: []
};
