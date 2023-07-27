// TODO:
// - Add more options for styling
// - Add more options for fonts and maybe import google fonts
// - Colors are awkwardly named

export const config = {
	branding: {
		name: 'Example Site',
		description: 'This is an example site, this is actually editable in the config file.',
		slogan: 'Providing better examples since 2023',
		mainDomain: 'https://example.com',
	},
	social: {
		tiktok: 'https://www.tiktok.com/@example',
		discord: 'https://discord.gg/example'
	},
	analytics: {
		gtmID: 'GTM-MW8JD9VB'
	},
	// Options: "hero", "main", "faq"
	// Order: top to bottom
	homeLayoutOrder: ['hero', 'faq', 'main'],
	features: {
		searchBar: true,
		accountCreation: true,
	},
	faq: [
		{
			question: 'What is this site?',
			answer: 'This site is an example site, it is meant to be used as a template for other sites.'
		},
		{
			question: 'What is this site?',
			answer: 'This site is an example site, it is meant to be used as a template for other sites.'
		},
	],
	styling: {
		// Options: "boxy", "rounded"
		contentBoxStyleType: 'rounded',
		daisyUITheme: {
			"primary": "#9df940",
			"secondary": "#8d76d3", 
			"accent": "#3c78c1",
			"neutral": "#251a28",
			"base-100": "#4c1d95",
			"info": "#2d86eb",
			"success": "#1ea46c",
			"warning": "#e28812", 
			"error": "#f91521",
			"--rounded-box": "0rem", // border radius rounded-box utility class, used in card and other large boxes
			"--rounded-btn": "0rem", // border radius rounded-btn utility class, used in buttons and similar element
			// "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
			// "--animation-btn": "0.25s", // duration of animation when you click on button
			// "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
			// "--btn-text-case": "uppercase", // set default text transform for buttons
			// "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
			// "--border-btn": "1px", // border width of buttons
			// "--tab-border": "1px", // border width of tabs
			// "--tab-radius": "0.5rem", // border radius of tabs
		}
	},
	fonts: {
		headingFont: ['Inter', 'sans'],
		bodyFont: ['Inter', 'sans'],
		googleFont: "Inter" // imports a single google font
	}
} as const;
