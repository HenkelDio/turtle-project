import { styled } from "styled-components";

export default styled.button`
	padding:10px 50px;

	border: none;
	background: rgb(0,152,121);
	background: -moz-linear-gradient(100deg, rgba(0,152,121,1) 0%, rgba(14,179,142,1) 100%);
	background: -webkit-linear-gradient(100deg, rgba(0,152,121,1) 0%, rgba(14,179,142,1) 100%);
	background: linear-gradient(100deg, rgba(0,152,121,1) 0%, rgba(14,179,142,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#009879",endColorstr="#0eb38e",GradientType=1);
	color: #fff;
	font-family: 'Work Sans', sans-serif;
	border-radius: 20px;
	font-size: 1.1rem;
	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme.colors.green.light};
	}

	&:disabled {
		opacity: 0.5;
		background-color: ${({ theme }) => theme.colors.green.main};
		cursor: auto;
	}

`;