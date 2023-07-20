export const config = {
	branding: {
		name: 'Example Site',
		description: 'This is an example site, this is actually editable in the config file.'
	},
	styling: {
		buttonStyle: `rounded-lg bg-secondary px-4 py-2 text-white transition-transform ease-in-out hover:scale-110`
	},
	fonts: {
		headingFont: 'Roboto',
		bodyFont: 'Arial, sans-serif'
	},
	colors: {
		primaryColor: '#FF5733',
		secondaryColor: '#1ABC9C'
	}
} as const;
