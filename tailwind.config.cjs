/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

const shade = 'slate'

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,json}'],
	theme: {
		extend: {
			colors: {
				text: {
					dim: colors[shade]['500'],
					DEFAULT: colors[shade]['700'],
					active: colors[shade]['900'],
				},
				bg: colors[shade]['100'],
				dark: {
					text: {
						dim: colors[shade]['600'],
						DEFAULT: colors[shade]['300'],
						active: colors[shade]['100'],
					},
					bg: colors[shade]['900'],
				}
			},
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans], // Set default font to Inter
			},
		},
	},
	plugins: [],
}
