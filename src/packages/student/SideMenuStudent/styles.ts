import { css, styled } from "styled-components";

interface IStyleProps {
	isSelected: boolean;
}

interface IStyleFold {
	isfold: string;
}

interface IStyleFoldAndPage {
	isfold: string;
	page: string;
}

export const CloseSideMenu = styled.div<IStyleFold>`
	position: absolute;
	top: 50%;
	right: -10px;
	font-size: 1.5rem;
	cursor: pointer;
	opacity: 0.5;
	transition: 0.5s;

	&:hover {
		opacity: 1;
	}
`;

export const Container = styled.div<IStyleFold>`
	position: relative;
	width: ${({ isfold }: IStyleFold) => (isfold === "true" ? "70px" : "220px")};
	height: 100vh;
	background-color: #fff;
	padding: 20px;
	transition: 1s;

	display: flex;
	flex-direction: column;
	align-items: center;

	-webkit-box-shadow: 4px 0px 11px 1px rgba(179, 179, 179, 1);
	-moz-box-shadow: 4px 0px 11px 1px rgba(179, 179, 179, 1);
	box-shadow: 4px 0px 11px 1px rgba(179, 179, 179, 1);

	.containerBox {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 100%;

		a {
			color: black;
			text-decoration: none;
			border-radius: 7px;
			&:hover {
				background-color: #eaeaea;
			}
		}

		> p {
			font-family: "Work Sans", sans-serif;
			font-size: 1rem;
			font-weight: 500;
			display: ${({ isfold }: IStyleFold) =>
				isfold === "true" ? "none" : "block"};
		}
	}

	.boxExit {
		position: absolute;
		bottom: 20px;
		cursor: pointer;

		p {
			font-family: "Work Sans", sans-serif;
			font-size: 1rem;
			font-weight: 500;
			text-decoration: underline;
		}
	}
`;

export const Logo = styled.div<IStyleFold>`
	font-size: ${({ isfold }: IStyleFold) =>
		isfold === "true" ? "2rem" : "4rem"};
	margin-bottom: 20px;
	opacity: 0.9;
	transition: 1s;

	${({ isfold }) =>
		isfold === "true" &&
		css`
			margin-top: 30px;
		`}
`;

export const Box = styled.div<IStyleFoldAndPage>`
	display: flex;
	gap: 15px;
	padding: 10px 8px;
	border-radius: 7px;
	transition: 0.5s;
	font-family: "Work Sans", sans-serif;
	font-size: 1rem;

	&:hover {
		background-color: #eaeaea;
	}

	div {
		height: 100%;
		display: flex;
	}

	p {
		display: ${({ isfold }: IStyleFold) =>
			isfold === "true" ? "none" : "block"};
	}

	cursor: pointer;
`;
