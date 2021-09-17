import React from 'react';
import NextHead from 'next/head';

interface Props {
	titlePage: string;
	metaDescription: string;
}

export const Head = ({ titlePage }) => {
	return (
		<NextHead>
			<title>{titlePage}</title>
			<meta name="description" content="Pokemon description"></meta>
		</NextHead>
	);
};
