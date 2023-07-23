import { config } from './src/lib/config.ts';

// This customizes TailwindCSS based on the values in src/lib/config.ts

// Pre-process the config.styling.daisyui object
const custom = Object.entries(config.styling.daisyUITheme).reduce((theme, [key, value]) => {
	theme[key] = value;
	return theme;
}, {});

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
		themes: [
			'light',
			'dark',
			'black',
			'night',
			'luxury',
			{
				custom: custom,
			},
		],
	},
};
