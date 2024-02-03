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
	}
`;

export const ContainerCertificates = styled.div`
	margin-top: 50px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 30px 35px;

	width: 540px;
`;
