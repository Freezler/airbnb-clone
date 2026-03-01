/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			height: {,
				'22': '5.5rem'
			},
			colors: {
				rausch: '#FF5A5F',
				babu: '#00A699',
				arches: '#FC642D',
				hof: '#484848',
				foggy: '#767676',
				transparent: 'transparent',
				midnight: '#121063'

			}
		},

	},


	plugins: []
};

module.exports = config;
