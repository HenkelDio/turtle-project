import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		margin-bottom: 50px;
	}
`;

export const Button = styled.button`
	padding:10px 50px;

	border: none;
	background-color: ${({ theme }) => theme.colors.green.main};
	color: #fff;
	font-family: 'Work Sans', sans-serif;
	border-radius: 10px;
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
    font-family: sans-serif;
    min-width: 1000px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
		}

		.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
		}

		.styled-table th,
		.styled-table td {
    padding: 12px 15px;
		}

		.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
		}

		.styled-table tbody tr:nth-of-type(even) {
				background-color: #f3f3f3;
		}

		.styled-table tbody tr:last-of-type {
				border-bottom: 2px solid #009879;
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