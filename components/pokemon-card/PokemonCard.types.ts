export interface PokemonCardProps {
	name: string;
	types: {
		type: {
			name: string;
		}
	}[];
	id: number;
	image: string;
}
