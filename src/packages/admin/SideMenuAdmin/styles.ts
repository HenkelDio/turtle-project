import { css, styled } from "styled-components";

interface IStyleProps {
	isSelected: boolean,
}

interface IStyleFold {
	isfold: string,
}

interface IStyleFoldAndPage {
	isfold: string,
	page: string,
}

export const CloseSideMenu = styled.div<IStyleFold>`
	position: absolute;
	top: 10px;
	right: ${({ isfold }: IStyleFold) => isfold === 'true' ? '20px' : '10px'};
	font-size: 1.3rem;
	cursor: pointer;
	opacity: 0.5;
	transition: 0.5s;

	&:hover {
		opacity: 1;
	}
`;

export const Container = styled.div<IStyleFold>`
	position: relative;
	width: ${({ isfold }: IStyleFold) => isfold === 'true' ? '70px' : '220px'};
	height: 100vh;
	background-color: #fff;
	padding: 25px;
	transition: 1s;

	display: flex;
	flex-direction: column;
	align-items: center;

	-webkit-box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);
	-moz-box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);
	box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);

	.containerBox{
		display: flex;
		flex-direction: column;
		gap: 15px;

		a {
			color: black;
			text-decoration: none;
		}

		> p {
			font-family: 'Work Sans', sans-serif;
			font-size: 1rem;
			font-weight: 500;
			display: ${({ isfold }: IStyleFold) => isfold === 'true' ? 'none' : 'block'};
		}
	}

	.boxExit{
		position: absolute;
		bottom: 20px;	
		cursor: pointer;

		p {
			font-family: 'Work Sans', sans-serif;
			font-size: 1rem;
			font-weight: 500;
			text-decoration: underline;
		}

	}
`;

export const Logo = styled.div<IStyleFold>`
	font-size: ${({ isfold }: IStyleFold) => isfold === 'true' ? '2rem' : '4rem'};
	margin-bottom: 20px;
	opacity: 0.9;
	transition: 0.8s;

	${({ isfold }) => isfold === 'true' && css`
		margin-top: 30px;
	`}
`;

export const Box = styled.div<IStyleFoldAndPage>`
	display: flex;
	flex-direction: row;
	align-items: start;
	gap: 12px;
	align-items: center;
	font-size: 1.5rem;
	padding: 10px 17px;
	border-radius: 10px;
	transition: 0.5s;

	&:hover {
		background-color: #EAEAEA;
	}

	p {
		font-family: 'Work Sans', sans-serif;
		font-size: 1.2rem;
		font-weight: 500;
		display: ${({ isfold }: IStyleFold) => isfold === 'true' ? 'none' : 'block'};
	}

	cursor: pointer;
`;
