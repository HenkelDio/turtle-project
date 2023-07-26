import { styled } from "styled-components";

export const Card = styled.div`
	width: 300px;

	position: relative;

	background-color: #ffff;
	display: flex;
	flex-direction: column;
	border-radius: 10px;

	-webkit-box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);
	-moz-box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);
	box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);
`;

export const Header = styled.div`
	background-color: #57CC99;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	padding: 20px;

	display: flex;
	align-items: center;
	justify-content: center;

	h2 {
		text-align: center;
	}
`;

export const Body = styled.div`
	.details {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20px 40px;
	}
`;