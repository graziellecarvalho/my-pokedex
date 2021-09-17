import styled from 'styled-components';
import Page from 'components/page';

export const Layout = styled(Page)``;

export const SidebarSection = styled.div`
	width: 18%;
	border-right: 1px solid black;
	margin-right: 10px;

	&.filter-open {
		width: 28%;
	}
`;

export const LoadMoreButton = styled.div`
	position: fixed;
    bottom: 0;
    background: red;
`;

export const Header = styled.div`
	position: relative;
`;

export const FilterButton = styled.button`
	bottom: 0;
	left: 0;
`;

export const FilterSection = styled.div`
	background: #ececec;
	transition: height .3s;
	overflow: hidden;

	&.filter-open {
		height: 300px;
	}

	&.filter-closed {
		height: 0;
	}
`;

export const FilterTypeCol = styled.div`
	opacity: .7;

	&.active-filter {
		opacity: 1.0;

		> div {
			box-shadow: rgba(4, 10, 105, 0.5) 0px 0px 0px 3px;
			border-radius: 100%;
		}
	}
`;


export const GenerationButton = styled.button`
	width: 80px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 10px 10px 0;
`;
