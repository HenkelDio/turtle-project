import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		margin-bottom: 50px;
	}

	span {
		display: block;
		margin-top: 20px;
		font-weight: 500;
		padding-left: 5px;
		margin-bottom: 30px;
	}
`;

export const ContainerCards = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
`;

