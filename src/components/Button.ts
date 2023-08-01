import { styled } from "styled-components";

export default styled.button`
	padding:10px 50px;

	border: none;
	background-color: ${({ theme }) => theme.colors.green.main};
	color: #fff;
	font-family: 'Work Sans', sans-serif;
	border-radius: 7px;
	font-size: 1.1rem;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.green.light};
	}

	&:disabled {
		opacity: 0.5;
		background-color: ${({ theme }) => theme.colors.green.main};
		cursor: auto;
	}

`;