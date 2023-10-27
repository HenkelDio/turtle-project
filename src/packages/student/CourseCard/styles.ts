import { styled } from "styled-components";

export const Card = styled.div`
	width: 300px;
	height: 300px;

	position: relative;

	background-color: #ffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	border-radius: 10px;
	padding: 10px 25px;

	-webkit-box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);
	-moz-box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);
	box-shadow: 4px 0px 11px 1px rgba(179,179,179,1);

	.dot {
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 20px;
		background-color: ${({ theme }) => theme.colors.green.main};
		top: 10px;
		right: 10px;
	}
`;

export const Icon = styled.div`
	font-size: 2rem;
`;

export const Body = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 0px;

	h2 {
		font-weight: 600;
		font-size: 1.2rem;
		width: 70%;
	}

	.details {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;