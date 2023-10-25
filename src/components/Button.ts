import { styled } from "styled-components";

export default styled.button`
	padding:10px 50px;

	border: none;
	background-color: ${({ theme }) => theme.colors.colors.teal[900]};
	color: #fff;
	font-family: 'Work Sans', sans-serif;
	border-radius: 8px;
	font-size: 1.1rem;
	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme.colors.colors.teal[800]};
	}

	&:disabled {
		opacity: 0.5;
		background-color: ${({ theme }) => theme.colors.green.main};
		cursor: auto;
	}

`;