import { styled } from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: 1s;

	h1 {
		margin-bottom: 30px;
	}
`;

export const ContainerList = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const Box = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 100px;

	width: 500px;

	p {
		font-size: 1.5rem;
		font-weight: 500;
	}
`;
