import styled from 'styled-components';
import { pokemonColors } from 'styles/theme';

const backgrounds = `
	&.normal {
		background: ${pokemonColors.normal}7F;
	}
	&.fighting {
		background: ${pokemonColors.fighting}7F;
	}
	&.flying {
		background: ${pokemonColors.flying}7F;
	}
	&.poison {
		background: ${pokemonColors.poison}7F;
	}
	&.ground {
		background: ${pokemonColors.ground}7F;
	}
	&.rock {
		background: ${pokemonColors.rock}7F;
	}
	&.bug {
		background: ${pokemonColors.bug}7F;
	}
	&.ghost {
		background: ${pokemonColors.ghost}7F;
	}
	&.steel {
		background: ${pokemonColors.steel}7F;
	}
	&.fire {
		background: ${pokemonColors.fire}7F;
	}
	&.water {
		background: ${pokemonColors.water}7F;
	}
	&.grass {
		background: ${pokemonColors.grass}7F;
	}
	&.electric {
		background: ${pokemonColors.electric}7F;
	}
	&.psychic {
		background: ${pokemonColors.psychic}7F;
	}
	&.ice {
		background: ${pokemonColors.ice}7F;
	}
	&.dragon {
		background: ${pokemonColors.dragon}7F;
	}
	&.dark {
		background: ${pokemonColors.dark}7F;
	}
	&.fairy {
		background: ${pokemonColors.fairy}7F;
	}
`;


export const Component = styled.div`
	${backgrounds}
	border-radius: 12px;
	margin-top: 46px;
	opacity: 0.8;
	transition: all .3s ease;

	&:hover {
		opacity: 1;

		a {
			text-decoration: none;
		}


		img {
			width: 100%;
		}
	}
`;

export const Info = styled.div`
	${backgrounds}
	border-radius: 12px;
`;

export const Title = styled.h2`
	z-index: 2;
	text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
`;

export const Id = styled.div`
	position: absolute;
	top: 50%;
	left: 10px;
	font-weight: bold;
	font-size: 60px;
	z-index: 1;
	opacity: .5;
	transform: translateY(-70%);
	margin-top: 4px;
`;

export const ImageEl = styled.div`
	position: absolute;
	right: 0;
	transform: translateY(-30%);

	img {
		width: 85%;
		transition: all .3s ease;
	}
`;
