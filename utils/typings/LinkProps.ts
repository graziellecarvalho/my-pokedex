export interface LinkProps {
	text: string;
	href: string;
	target?: '' | '_blank' | '_self' | '_parent' | '_top';
	rel?: string | null;
}
