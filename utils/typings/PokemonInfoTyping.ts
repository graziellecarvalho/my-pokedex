export interface PokemonInfoTyping {
	name: string;
	id: number;
	height: number;
	weight: number;
	image: string;
	types: {
		slot: number;
		type: {
			name: string;
			url: string;
		}
	}[];
}
