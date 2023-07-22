// TODO:
// - Add more options for styling
// - Add more options for fonts and maybe import google fonts
// - Colors are awkwardly named

export const config = {
	branding: {
		name: 'Example Site',
		description: 'This is an example site, this is actually editable in the config file.',
		slogan: 'Providing better examples since 2023'
	},
	social: {
		tiktok: 'https://www.tiktok.com/@example',
		discord: 'https://discord.gg/example',
	},
	// Options: "hero", "main"
	// Order: top to bottom
	homeLayoutOrder: ['hero', 'main'],
	styling: {
		// Options: "boxy", "rounded"
		buttonStyleType: 'boxy',
		// Options: "boxy", "rounded"
		contentBoxStyleType: 'boxy'
	},
	fonts: {
		headingFont: ['Verdana', 'sans-serif'],
		bodyFont: ['Roboto', 'sans-serif']
	},
	colors: {
		// Background color
		primaryColor: 'green',
		// Content on top of primary color
		secondaryColor: 'white',
		// Content on top of secondary color
		primaryContentColor: 'black'
	}
} as const;
