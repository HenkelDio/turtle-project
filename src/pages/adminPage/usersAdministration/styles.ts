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

export const Button = styled.button`
	padding: 10px 50px;

	border: none;
	background-color: ${({ theme }) => theme.colors.green.main};
	color: #fff;
	font-family: "Work Sans", sans-serif;
	border-radius: 7px;
	font-size: 1.1rem;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.green.light};
	}
`;

export const ContainerList = styled.div`
	margin-top: 0px;

	.styled-table {
		border-collapse: collapse;
		margin: 25px 0;
		font-size: 0.9em;
		font-family: "Work Sans", sans-serif;
		min-width: 1000px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
	}

	.styled-table thead tr {
		background-color: #fafafa;
		color: #080808;
		text-align: left;
		height: 30px;
	}

	.styled-table tbody tr .actions {
		a {
			text-decoration: none;
			color: ${({ theme }) => theme.colors.green.main};
			font-weight: 500;

			&:hover {
				color: ${({ theme }) => theme.colors.green.light};
			}
		}
	}

	.styled-table th,
	.styled-table td {
		padding: 12px 15px;
	}

	.styled-table tbody tr:nth-of-type(even) {
		background-color: #f3f3f3;
	}

	.styled-table tbody tr.active-row {
		font-weight: bold;
		color: #009879;
	}
`;

export const Box = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-top: 30px;

	width: 1000px;
`;

export const FilterInput = styled.div`
	display: flex;

	background-color: #fff;

	select {
		height: 40px;
	}
`;
