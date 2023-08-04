import { styled } from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: 1s;

	h1 {
		margin-bottom: 50px;
	}
`;

export const ContainerList = styled.div`
	
`;

export const Box = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	
	width: 500px;
`;