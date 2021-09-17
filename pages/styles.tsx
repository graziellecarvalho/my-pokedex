import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import StyleGuide from 'components/style-guide';
function Styles({ skip }) {
	const router = useRouter();
	useEffect(() => {
		if (skip) router.push('/');
	}, []);

	return (
		<>
			<StyleGuide />
		</>
	);
}

Styles.getInitialProps = async ({ req }) => {
	if (req && req.headers.host.includes('localhost')) {
		return { skip: false };
	}
	return { skip: true };
};

export default Styles;
