// TODO: 
// - Add more options for styling
// - Add more options for fonts and maybe import google fonts
// - Colors are awkwardly named

export const config = {
	branding: {
		name: 'Example Site',
		description: 'This is an example site, this is actually editable in the config file.'
	},
    // Options: "nav", "hero", "main", "footer"
    // Order: top to bottom
    homeLayoutOrder: ['nav', 'hero', 'main', 'footer'],
	styling: {
        // Options: "boxy", "rounded"
		buttonStyleType: "rounded",
	},
	fonts: {
		headingFont: ['Verdana', 'sans-serif'],
		bodyFont: ['Roboto', 'sans-serif']
	},
	colors: {
        // Background color
		primaryColor: 'blue',
        // Content on top of primary color
		secondaryColor: 'white',
        // Content on top of secondary color
        onSecondary: 'black',
	}
} as const;