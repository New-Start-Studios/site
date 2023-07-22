import { config } from './src/lib/config.ts';

// This customizes TailwindCSS based on the values in src/lib/config.ts

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			main: config.fonts.bodyFont,
			heading: config.fonts.headingFont
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light', 'dark', 'black', 'night', 'luxury']
	}
};
