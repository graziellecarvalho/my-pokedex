import React from 'react';
import Head from 'components/head';

type Props = {
	cssClass?: string;
	children?: React.ReactNode;
	titlePage: string;
};

export const Page = ({ cssClass, children, titlePage }: Props) => {
	return (
		<>
			<Head titlePage={titlePage} />

			<div id="page" className={cssClass}>
				<div id="content">{children}</div>
			</div>
		</>
	);
};
