// External dependencies
import React from 'react';
import Image from 'next/image';
import { Col, Row, Container} from 'react-bootstrap';

// Internal dependencies
import { Component, Hover } from './Sidebar.style';
import { SidebarProps } from './Sidebar.types'

// Types
interface Props extends SidebarProps {
	cssClass?: string;
}

export const Sidebar = ({ cssClass = '' }: Props) => {
	const pokemonTypes = ["bug", "dark", "dragon", "electric", "fairy", "fight", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];

	return (
		<Component className={`${cssClass}`}>
			<p className="text-center font-weight-bold mt-5">Sidebar for filter</p>
			<Container>
				<Row>
					{pokemonTypes.map((e) => (
						<Col md={3} key={e} className="p-0">
							<Image src={`/images/icons/${e}.png`} width={50} height={50} alt="teste" />
						</Col>
					))}
				</Row>
			</Container>
			<Hover>
				<p>Teste</p>
			</Hover>
		</Component>
	);
};
