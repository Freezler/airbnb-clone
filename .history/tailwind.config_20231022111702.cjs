/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			height: {
				colors: {
					rausch: '#FF5A5F',
					babu: '#00A699',
					arches: '#FC642D',
					hof: '#484848',
					foggy: '#767676',
					transparent: 'transparent',
					midnight: '#121063'

				},
				'22': '5.5rem'
			}
		},

	},


	plugins: []
};

module.exports = config;
