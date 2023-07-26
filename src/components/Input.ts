import { styled } from "styled-components";

export default styled.input`
	width: 500px;
	height: 40px;

	border: 3px solid transparent;
	border-radius: 5px;
	padding: 0 10px;

	outline: none;

	transition: 0.5s ease-out;
	font-family: 'Work Sans', sans-serif;
	font-size: 1.1rem;


	&:focus {
		border: 3px solid #57CC99;
	}
`;