import React from 'react';
import Link from 'next/link';

export default function Profile({ post }) {
	console.log(post);

	return (
		<>
			<Link href="/">
				<a>Back</a>
			</Link>
			<h2>{post.name}</h2>
		</>
	)
}

export async function getServerSideProps({ params }) {

	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
	const post = await res.json();

	return { props: { post } };
}
