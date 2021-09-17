// External dependencies
import React from 'react';
import { InferGetStaticPropsType } from 'next';

// Internal modules
import PageNotFoundLayout from 'layouts/page-not-found';

// Get data during buid to pass as props to the page
export async function getStaticProps(context) {
	const route = {
		permalink: '/404',
		title: 'Not found',
		layout: '404',
		content: {},
	};

	return {
		props: {
			route,
		},
	};
}

function PageNotFoundPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
	return <PageNotFoundLayout {...props} />;
}

export default PageNotFoundPage;
