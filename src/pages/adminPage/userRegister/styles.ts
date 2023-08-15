import { styled } from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: 1s;
	animation: showContainer 0.5s;

	h1 {
		margin-bottom: 50px;
	}


	@keyframes showContainer {
		0% {
			opacity: 0;
			right: -500px;
		}
		100% {
			opacity: 1;
			right: 0px;
		}
	}
`;

export const Box = styled.div`
	margin-bottom: 50px;
`

