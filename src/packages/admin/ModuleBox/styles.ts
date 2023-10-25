import { styled } from "styled-components";

export const Container = styled.div`
	position: relative;

	min-width: 150px;
	max-width: 150px;
	height: 200px;

	background-color: #d9d9d9;
	box-shadow: 10px 10px 15px -10px rgba(0,0,0,0.2);

	border-radius: 4px;


	display: flex;
	align-items: center;
	text-align: center;
	padding: 10px;

	p {
		font-weight: 500;
	}


	.menuOptions {
		position: absolute;
		right: 5px;
		bottom: 5px;

		cursor: pointer;
	}

`;