interface Breakpoint {
	min: null | number;
	max: null | number;
}

export interface Breakpoints {
	xs: Breakpoint;
	sm: Breakpoint;
	md: Breakpoint;
	lg: Breakpoint;
	xl: Breakpoint;
}

export interface Theme {
	baseRem: number;
	colors: {
		// Theme colors
		white: string;
		black: string;
		primary: string;
		secondary: string;
		success: string;
		info: string;
		warning: string;
		danger: string;
		light: string;
		medium: string;
		dark: string;
		// Social media colors
		instagram: string;
		youtube: string;
		facebook: string;
		twitter: string;
		pinterest: string;
		whatsapp: string;
		linkedin: string;
	};
	fonts: {
		heading: string;
	};
	headings: {
		h1: {
			mobile: string;
			desktop: string;
		};
		h2: {
			mobile: string;
			desktop: string;
		};
		h3: {
			mobile: string;
			desktop: string;
		};
		h4: {
			mobile: string;
			desktop: string;
		};
		h5: {
			mobile: string;
			desktop: string;
		};
		h6: {
			mobile: string;
			desktop: string;
		};
	};
	spacing: string[];
	min: {
		xs?: (content: string) => string;
		sm?: (content: string) => string;
		md?: (content: string) => string;
		lg?: (content: string) => string;
		xl?: (content: string) => string;
	};
	max: {
		xs?: (content: string) => string;
		sm?: (content: string) => string;
		md?: (content: string) => string;
		lg?: (content: string) => string;
		xl?: (content: string) => string;
	};
}
