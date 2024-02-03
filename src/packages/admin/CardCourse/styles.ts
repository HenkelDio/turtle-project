import { styled } from "styled-components";

export const Card = styled.div`
	background-color: #ffff;
	width: 500px;
	max-width: 500px;
	height: 100px;

	border-radius: 10px;

	padding: 20px 15px;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 15px;

	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

	span {
		width: 60px;
		height: 55px;
		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 50px;

		background-color: #e2e2e2;
		color: #262626;
	}

	p {
		font-weight: 500;
	}
`;
export const Button = styled.button`
	cursor: pointer;

	border: none;

	padding: 10px;
	border-radius: 5px;

	background-color: #3e3e3e;

	color: #ffff;
	font-family: "Work Sans", sans-serif;
	font-weight: 500;
	margin-left: 5px;

	&:hover {
		background-color: #282626;
	}
`;
