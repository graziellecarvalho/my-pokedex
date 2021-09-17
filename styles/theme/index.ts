import { rem } from 'polished';
import { Breakpoints, Theme } from './theme.types';

const breakpoints: Breakpoints = {
	xs: { min: null, max: 575.8 },
	sm: { min: 576, max: 767.8 },
	md: { min: 768, max: 991.8 },
	lg: { min: 992, max: 1199.8 },
	xl: { min: 1200, max: null },
};

const min = {};
const max = {};
Object.entries(breakpoints).forEach(([breakpoint, value]) => {
	if (value.min)
		min[breakpoint] = (content) => `
			@media (min-width: ${value.min}px) {
				${content}
			}
		`;
	if (value.max)
		max[breakpoint] = (content) => `
			@media (max-width: ${value.max}px) {
				${content}
			}
		`;
});

export const themeColors = {
	primary: '#0073aa',
	secondary: '#6c757d',
	light: '#f8f9fa',
	medium: '#adb5bd',
};

export const pokemonColors = {
	normal: '#9099A1',
	fighting: '#CE4069',
	flying: '#92AADE',
	poison: '#AB6AC8',
	ground: '#D97746',
	rock: '#C7B78B',
	bug: '#90C12C',
	ghost: '#5269AC',
	steel: '#5A8EA1',
	fire: '#FF9C54',
	water: '#4D90D5',
	grass: '#63BB5B',
	electric: '#F3D23B',
	psychic: '#F97176',
	ice: '#74CEC0',
	dragon: '#096DC4',
	dark: '#5A5366',
	fairy: '#EC8FE6',
}

const colors = {
	// Theme colors
	...themeColors,
	white: '#FFF',
	black: '#000',
	success: '#28a745',
	info: '#17a2b8',
	warning: '#ffc107',
	danger: '#dc3545',
	// Social media colors
	instagram: '#f01874',
	youtube: '#ff0000',
	facebook: '#4167b2',
	twitter: '#1ca1f1',
	pinterest: '#ca212a',
	whatsapp: '#30d14d',
	linkedin: '#0b66c2',
};

const baseRem = 16;

const headings = {
	h1: {
		mobile: rem(40, baseRem),
		desktop: rem(48, baseRem),
	},
	h2: {
		mobile: rem(32, baseRem),
		desktop: rem(40, baseRem),
	},
	h3: {
		mobile: rem(26, baseRem),
		desktop: rem(32, baseRem),
	},
	h4: {
		mobile: rem(22, baseRem),
		desktop: rem(24, baseRem),
	},
	h5: {
		mobile: rem(18, baseRem),
		desktop: rem(18, baseRem),
	},
	h6: {
		mobile: rem(16, baseRem),
		desktop: rem(16, baseRem),
	},
};

const spacing = [
	rem(baseRem * 0.25, baseRem), // 4px
	rem(baseRem * 0.5, baseRem), // 8px
	rem(baseRem * 0.75, baseRem), // 12px
	rem(baseRem, baseRem), // 16px
	rem(baseRem * 1.5, baseRem), // 24px
	rem(baseRem * 2, baseRem), // 32px
	rem(baseRem * 2.75, baseRem), // 44px
	rem(baseRem * 3.5, baseRem), // 56px
	rem(baseRem * 5, baseRem), // 80px
];

const theme: Theme = {
	baseRem,
	colors,
	fonts: {
		heading: `'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		'Segoe UI Symbol', 'Noto Color Emoji'`,
	},
	headings,
	spacing,
	min,
	max,
};

export default theme;
