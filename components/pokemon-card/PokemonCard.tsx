// External dependencies
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Internal dependencies
import { Component, Info, Title, Id, ImageEl } from './PokemonCard.style';
import { PokemonCardProps } from './PokemonCard.types'

// Types
interface Props extends PokemonCardProps {
	cssClass?: string;
}

export const PokemonCard = ({ cssClass = '', name, types, id, image }: Props) => {
	const newId = "" + id;
	const pad = "000"
	const formatId = pad.substring(0, pad.length - newId.length) + newId;

	const colorCard = types[0].type.name;

	return (
		<Component className={`${cssClass} text-black position-relative ${colorCard}`}>
			<Info className={`info d-flex justify-content-between align-items-center position-static ${colorCard} py-5 px-4`}>

				<Title className="text-black text-capitalize h4">
					<Link href={`/${encodeURIComponent(name)}/`}>
						<a className="stretched-link text-black" title={`Click to check ${name} info`}>
							{name}
						</a>
					</Link>
				</Title>

				<ImageEl>
					{id <= 24 ? (
						<Image src={image} alt={`${name} image`} width={100} height={100} priority />
					) : (
						<Image src={image} alt={`${name} image`} width={100} height={100} layout='intrinsic' />
					)}

				</ImageEl>

				<Id className={`text-${colorCard}`}>#{formatId}</Id>
			</Info>
			<div className="types d-flex justify-content-between w-50 py-2 mx-auto text-center">
				{types.map(({ type }, index) => (
					<span key={index} className="mx-auto text-capitalize pr-2">{type.name}</span>
				))}
			</div>
		</Component>
	);
};
