import { styled } from "styled-components";

export const Card = styled.div`
	width: 250px;
	height: 200px;
	padding: 10px 15px;

	background-color: #ffff;
	border-radius: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;


	-webkit-box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);
	-moz-box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);
	box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);

`;

export const Icon = styled.div`
	font-size: 4rem;
`;