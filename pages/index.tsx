// External dependencies
import React from 'react';
import { InferGetStaticPropsType } from 'next';

// Internal dependencies
import { getListPokemon } from 'data/pokemons';
import HomeLayout from 'layouts/home';

// Get data during buid to pass as props to the page
export async function getStaticProps() {
	const listPokemon = await getListPokemon();

	return {
		props: {
			listPokemon
		},
	};
}

export default function HomePage(props: InferGetStaticPropsType<typeof getStaticProps>) {

	return <HomeLayout {...props} />
}
