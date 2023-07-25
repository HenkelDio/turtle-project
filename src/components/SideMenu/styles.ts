import { css, styled } from "styled-components";

interface IStyleProps {
	isSelected: boolean,
}

export const Container = styled.div`
	width: 220px;
	height: 100vh;
	background-color: #fff;
	padding: 25px;

	display: flex;
	flex-direction: column;
	align-items: center;

	-webkit-box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);
	-moz-box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);
	box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);

	.containerBox{
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
`;

export const Logo = styled.div`
	text-align: center;
	font-family: 'Work Sans', sans-serif;
	font-size: 40px;
	margin-bottom: 50px;

	p {
		font-size: 1.5rem;
		font-weight: bold;
	}
`;

export const Box = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	align-items: center;
	font-size: 1.5rem;
	padding: 10px;
	border-radius: 10px;

	&:hover {
		background-color: #ccc;
	}

	${({ isSelected }: IStyleProps) => isSelected && css`
		background-color: #3E3E3E;
		color: #FFFF;
	`}

	p {
		font-family: 'Work Sans', sans-serif;
		font-size: 1.3rem;
		font-weight: 500;
	}

	cursor: pointer;
`;
