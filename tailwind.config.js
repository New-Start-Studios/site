import { config } from './src/lib/config.ts';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
    colors: {
      secondary: config.colors.secondaryColor,
    },
		extend: {}
	},
	plugins: []
};
