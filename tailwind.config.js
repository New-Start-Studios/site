import { config } from './src/lib/config.ts';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			main: config.fonts.bodyFont,
			heading: config.fonts.headingFont
		},
		extend: {
			colors: {
				primary: config.colors.primaryColor,
				secondary: config.colors.secondaryColor,
				onSecondary: config.colors.onSecondary,
			}
		}
	},
	plugins: []
};
