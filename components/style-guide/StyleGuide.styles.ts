import styled from 'styled-components';

export const Component = styled.div`
	small {
		font-size: 12px;
	}
`;

export const Anchors = styled.div`
	z-index: 20;
	box-shadow: 0 2px 4px #f1f1f1;
`;

export const Section = styled.div`
	scroll-margin-top: 5rem;
`;

export const Color = styled.div`
	width: 270px;
	height: 70px;
`;

export const Button = styled.button`
	border: none;
	background-color: transparent;

	&:hover {
		text-decoration: underline;
	}
`;
