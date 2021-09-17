// External dependencies
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import _c from 'classnames';
import Image from 'next/image';

// Internal modules
import { Layout, Header, FilterButton, FilterSection, FilterTypeCol, GenerationButton } from './HomeLayout.styles';
import { PokemonInfoTyping } from 'typings/PokemonInfoTyping';
import PokemonCard from 'components/pokemon-card';
import Sidebar from 'components/sidebar';
import Loading from 'components/loading';

export const HomeLayout = ({ listPokemon }) => {
   const [pokemonList, setPokemonList] = useState<PokemonInfoTyping[]>(listPokemon);
   const [offset, setOffset] = useState(24);
	const [loading, setLoading] = useState(false);
	const [filter, setFilter] = useState(false);

   const loadPokemon = async () => {
         setLoading(true);
         const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=${offset}`).then(res => res.json());

         const finalResult: PokemonInfoTyping[] = await Promise.all(
            res.results.map(async(item) => {
               const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`).then(res => res.json());

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

         setPokemonList((post) => [...post, ...finalResult]);
         setOffset(offset+24);
         setLoading(false);
	 }

	 const openFilter = () => {
		 setFilter(!filter);
	 }

	 const pokemonTypes = ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fight", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"];

	 const [selectedType, setSelectedType] = useState('');

	 console.log(selectedType);

   return (
      <Layout titlePage="Pokemon List">
         <Container>
				<Header className="d-flex align-items-center justify-content-center py-4">
					<Image src="/images/pokeball.png" alt="pokeball image" width={150} height={150} priority />
					<div className="text-center">
						<Image src="/images/pokemon-logo.png" alt="pokemon image" width={300} height={100} priority />
						<h1 className="ml-4 h2 text-secondary">Pokedéx</h1>
					</div>
					<FilterButton className="btn btn-secondary mr-4 position-absolute" onClick={openFilter}>Open Filter</FilterButton>
				</Header>
			</Container>

			<FilterSection className={`${filter ? 'filter-open' : 'filter-closed'}`}>
				<Container>
					<Row>
						<Col md={4} className="pt-5">
							<h2 className="m-0">Filter by Type</h2>
							<span>One at a time</span>
							<Row className="pt-2">
								{pokemonTypes.map((e) => (
									<FilterTypeCol key={e} className={`p-0 text-center col-md-2 ${selectedType == e && 'active-filter'}`} onClick={() => setSelectedType(e)}>
										<Image src={`/images/icons/${e.toLowerCase()}.png`} width={50} height={50} alt="teste" />
									</FilterTypeCol>
								))}
							</Row>
						</Col>
						<Col md={4} className="pt-5">
							<h2 className="m-0">Filter by Generation</h2>
							<div className="d-flex flex-wrap">
								<GenerationButton className="btn btn-primary mr-2 px-6 font-weight-bold">I</GenerationButton>
								<GenerationButton className="btn btn-primary mr-2 px-6 font-weight-bold">II</GenerationButton>
								<GenerationButton className="btn btn-primary mr-2 px-6 font-weight-bold">III</GenerationButton>
								<GenerationButton className="btn btn-primary mr-2 px-6 font-weight-bold">IV</GenerationButton>
								<GenerationButton className="btn btn-primary mr-2 px-6 font-weight-bold">V</GenerationButton>
								<GenerationButton className="btn btn-primary mr-2 px-6 font-weight-bold">VI</GenerationButton>
								<GenerationButton className="btn btn-primary mr-2 px-6 font-weight-bold">VII</GenerationButton>
								<GenerationButton className="btn btn-primary mr-2 px-6 font-weight-bold">VIII</GenerationButton>
							</div>
						</Col>
						<Col md={4} className="pt-5">
							<h2 className="m-0">Search by name</h2>
						</Col>
					</Row>
				</Container>
			</FilterSection>

			<Container>
				<div className={filter ? 'filter-open' : ''}>
					<Row>
						{pokemonList && pokemonList.map(( { name, types, id, image } ) => (
							<Col lg={3} xs={6} key={id}>
								<PokemonCard name={name} types={types} id={id} image={image} />
							</Col>
						))}
					</Row>

					<div className="text-center py-3 d-flex align-items-center justify-content-center">
							<button className="btn btn-secondary mr-4" onClick={loadPokemon}>Click to load more</button>
							{loading && <Loading />}
					</div>
				</div>
         </Container>
      </Layout>
   );
};
