import { Config } from 'config/site';
import { PokemonInfoTyping } from 'typings/PokemonInfoTyping';

export async function getListPokemon(): Promise<PokemonInfoTyping[]>{
	const quantity = 24;
	let endpoint = `${Config.apiBaseUrl}/pokemon?limit=${quantity}`;

	let res = await fetch(endpoint)
		.then(res => res.json());

	let finalResult;

	try{
		finalResult = await Promise.all(
			res.results.map(async(item) => {
				const result = await fetch(`${Config.apiBaseUrl}/pokemon/${item.name}`).then(res => res.json());

				return {
					id: result.id,
					name: result.name,
					types: result.types,
					weight: result.weight,
					height: result.height,
					image: result.sprites.other.dream_world.front_default
				}
			})
		);
	} catch(err) {
		console.error(err);
	}

	return finalResult;
}
