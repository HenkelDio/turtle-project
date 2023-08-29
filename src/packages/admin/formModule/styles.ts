import { styled } from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: 1s;
	animation: showContainer 0.5s;
	padding-left: 50px;
`;

export const VideoBox = styled.div`
	width: 800px;
	height: 500px;

	display: flex;
	align-items: center;
	justify-content: center;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column-reverse;
		gap: 10px;
	
		
		font-size: 1.1rem;
		font-weight: 500;
		cursor: pointer;

		background-color: #fff;
		padding: 10px;
		border-radius: 8px;
	

		
		span {
			font-size: 1.7rem;
		}
	}

	background-color: #ccc;
`;

export const FileBox = styled.div``;

export const ContentBox = styled.div``;