// External dependencies
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { stripUnit } from 'polished';

// Internal dependencies
import { Component, Anchors, Section, Color, Button } from './StyleGuide.styles';
import theme, { themeColors, pokemonColors } from 'styles/theme';

export const StyleGuide = () => {
	const [showTooltip, setShowTooltip] = useState('');

	const copyToClipboard = (e) => {
		navigator.clipboard.writeText(e.target.innerText);

		setShowTooltip(e.target.innerText);

		setTimeout(() => {
			setShowTooltip('');
		}, 2000);
	};

	return (
		<Component>
			<Anchors className="position-fixed w-100">
				<Container className="py-5 bg-white">
					<Row className="d-flex justify-content-between">
						<a href="#colors">Colors</a>
						<a href="#buttons">Buttons</a>
						<a href="#headers">Headers</a>
						<a href="#content">Content</a>
						<a href="#spacings">Spacings</a>
						<a href="#mixins">Mixins</a>
					</Row>
				</Container>
			</Anchors>
			<Container>
				{/* Colors */}
				<Section id="colors" className="mb-9">
					<span className="font-weight-bold text-black pt-9 d-block">Colors</span>
					<small>Click on text to copy it to clipboard</small>
					<hr className="mt-0" />
					<span className="text-black d-block">Theme Colors</span>
					<Row>
						{Object.entries(themeColors).map(([color, hex], i) => {
							return (
								<Col md={3} className={color} key={i}>
									<Color className={`bg-${color} d-flex align-items-end`}>
										<p className="text-white font-weight-bold mb-0">{hex}</p>
									</Color>
									<div className="d-flex flex-column">
										<Button onClick={copyToClipboard} className="text-left">
											<small>
												bg-{color} {showTooltip == `bg-${color}` && '- copied'}
											</small>
										</Button>

										<Button onClick={copyToClipboard} className="text-left">
											<small>
												text-{color} {showTooltip == `text-${color}` && '- copied'}
											</small>
										</Button>
									</div>
								</Col>
							);
						})}
					</Row>
					<span className="text-black d-block mt-6">Pokemon Colors</span>
					<Row>
						{Object.entries(pokemonColors).map(([color, hex], i) => {
							return (
								<Col md={2} className={`${color} p-0`} key={i}>
									<div className={`bg-${color} d-flex align-items-end pt-7 m-1`}>
										<p className="text-white font-weight-bold mb-0">{hex}</p>
									</div>
									<div className="d-flex flex-column">
										<Button onClick={copyToClipboard} className="text-left">
											<small>
												bg-{color} {showTooltip == `bg-${color}` && '- copied'}
											</small>
										</Button>

										<Button onClick={copyToClipboard} className="text-left">
											<small>
												text-{color} {showTooltip == `text-${color}` && '- copied'}
											</small>
										</Button>
									</div>
								</Col>
							);
						})}
					</Row>
				</Section>

				{/* Buttons */}
				<Section id="buttons" className="mb-9">
					<span className="font-weight-bold text-black">Buttons</span>
					<hr className="mt-0" />
					<Row>
						<Col md={6} className="text-right">
							<small>Small</small>
							<br />

							<div className="mb-3">
								<a href="#" className="btn btn-primary btn-sm">
									Join Now
								</a>
								<br />
								<small>btn btn-primary btn-sm</small>
							</div>

							<div className="mb-3">
								<a href="#" className="btn btn-white btn-sm">
									Click
								</a>
								<br />
								<small>btn btn-white btn-sm</small>
							</div>

							<div className="mb-3">
								<a href="#" className="btn btn-secondary btn-sm">
									Click
								</a>
								<br />
								<small>btn btn-secondary btn-sm</small>
							</div>
						</Col>
						<Col md={6}>
							<small>Large</small>
							<br />

							<div className="mb-3">
								<a href="#" className="btn btn-primary">
									Join Now
								</a>
								<br />
								<small>btn btn-primary</small>
							</div>

							<div className="mb-3">
								<a href="#" className="btn btn-white">
									Click
								</a>
								<br />
								<small>btn btn-white</small>
							</div>

							<div className="mb-3">
								<a href="#" className="btn btn-secondary">
									Click
								</a>
								<br />
								<small>btn btn-secondary</small>
							</div>
						</Col>
					</Row>
				</Section>

				{/* Headers */}
				<Section id="headers" className="mb-9">
					<span className="font-weight-bold text-black">Headings</span>
					<hr className="mt-0" />

					{Object.entries(theme.headings).map(([heading, { mobile, desktop }], i) => (
						<Row className="align-items-center d-flex" key={i}>
							<Col md={2} className="text-right d-flex flex-column">
								<small className="m-0">Heading {i + 1}</small>
								<small className="m-0">
									Desktop: {desktop} - {+stripUnit(desktop) * theme.baseRem}px
								</small>
								<small className="m-0">
									Mobile: {mobile} - {+stripUnit(mobile) * theme.baseRem}px
								</small>
								<hr className="w-100" />
							</Col>
							<Col md={10}>
								{heading == 'h1' && <h1>Lorem ipsum dolor sit amet. </h1>}
								{heading == 'h2' && <h2>Lorem ipsum dolor sit amet. </h2>}
								{heading == 'h3' && <h3>Lorem ipsum dolor sit amet. </h3>}
								{heading == 'h4' && <h4>Lorem ipsum dolor sit amet. </h4>}
								{heading == 'h5' && <h5>Lorem ipsum dolor sit amet. </h5>}
								{heading == 'h6' && <h6>Lorem ipsum dolor sit amet. </h6>}
							</Col>
						</Row>
					))}
				</Section>

				{/* Content */}
				<Section id="content" className="mb-9">
					<span className="font-weight-bold text-black">Content</span>
					<br />
					<small>Example of how the elements of the content will be displayed.</small>
					<hr className="mt-0" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur tellus
						quis nunc pretium, quis volutpat orci ultricies. In tincidunt rhoncus urna, non
						lacinia nisi suscipit sed. Proin egestas lacus quam, at sollicitudin enim interdum
						at. Nulla vitae condimentum velit, ut dignissim sapien.{' '}
						<a href="#">Nam nec purus eu massa fermentum</a> suscipit dignissim vel ante.
						Etiam facilisis felis finibus, malesuada diam vel, mollis ex. Pellentesque
						habitant morbi tristique senectus et netus et malesuada{' '}
						<strong>fames ac turpis egestas</strong>. Cras tempor ligula in accumsan
						venenatis.
					</p>
					<p>
						Morbi at felis nec libero <i>interdum rhoncus</i>. Fusce id nisl sem. Fusce
						suscipit ultrices enim, quis aliquam lectus tristique non. Nam consectetur purus
						lacinia placerat fermentum. Integer at consectetur purus, eget consectetur purus.
						Curabitur scelerisque dui sed leo tempus posuere. Suspendisse rhoncus, sapien id
						consectetur sollicitudin, nulla risus sagittis nisl, vitae fringilla velit dui id
						odio. Nulla tempus sed augue dapibus molestie. Proin iaculis eu ante a euismod.
						Pellentesque non facilisis lectus. Maecenas rutrum faucibus odio, eget vulputate
						est condimentum non. Curabitur tempor, nunc et convallis vehicula, massa dui
						porttitor enim, porta aliquet arcu tellus a magna. Sed consectetur enim vel eros
						placerat, sit amet lobortis quam semper.
					</p>
				</Section>

				{/* Spacings */}
				<Section id="spacings" className="mb-9">
					<span className="font-weight-bold text-black">Spacings</span>
					<br />
					<hr className="mt-0" />

					<Row>
						{theme.spacing.map((spacing, i) => (
							<Col md={1} className="text-center" key={i}>
								<small>{i + 1}</small>
								<br />
								<small>{+stripUnit(spacing) * theme.baseRem}px</small>
								<br />
								<small>{spacing}</small>
								<br />
								<div className={`bg-primary px-2 pt-${i + 1}`}></div>
							</Col>
						))}
					</Row>
				</Section>

				{/* Mixins */}
				<Section id="mixins" className="mb-9">
					<span className="font-weight-bold text-black">Mixins</span>
					<br />
					<hr className="mt-0" />

					<span className="font-weight-bold text-black">Min-width</span>
					<br />
					<hr className="mt-0" />

					{Object.entries(theme.min).map(([breakpoint, mixin], i) => (
						<Row className="my-3" key={i}>
							<Col md={2} className="d-flex flex-column">
								<p className="m-0 h5">min-width {breakpoint}</p>
								<hr className="w-100 mb-1 mt-auto" />
							</Col>
							<Col md={10}>
								<p>
									<Button onClick={copyToClipboard} className="text-left">
										<code className="text-primary">
											{`{({theme}) => theme.min.${breakpoint}('display: block;')}`}
										</code>
									</Button>
									{showTooltip ==
									`{({theme}) => theme.min.${breakpoint}('display: block;')}`
										? '- copied'
										: 'results in:'}
								</p>
								<code>{mixin('display: block;')}</code>
							</Col>
						</Row>
					))}

					<span className="font-weight-bold text-black">Max-width</span>
					<br />
					<hr className="mt-0" />

					{Object.entries(theme.max).map(([breakpoint, mixin], i) => (
						<Row className="my-3" key={i}>
							<Col md={2} className="d-flex flex-column">
								<p className="m-0 h5">max-width {breakpoint}</p>
								<hr className="w-100 mb-1 mt-auto" />
							</Col>
							<Col md={10}>
								<p>
									<Button onClick={copyToClipboard} className="text-left">
										<code className="text-primary">
											{`{({theme}) => theme.max.${breakpoint}('display: block;')}`}
										</code>
									</Button>
									{showTooltip ==
									`{({theme}) => theme.max.${breakpoint}('display: block;')}`
										? '- copied'
										: 'results in:'}
								</p>
								<code>{mixin('display: block;')}</code>
							</Col>
						</Row>
					))}

					<p>
						Other utilities may be found on{' '}
						<a href="https://polished.js.org/docs">https://polished.js.org/docs</a> importing
						the library from polished
					</p>
				</Section>
			</Container>
		</Component>
	);
};
