import styled from "styled-components";

export const ContainerList = styled.div`
	margin-top: 15px;

	label {
		font-weight: 600;
		margin-bottom: 10px;
	}

	.styled-table {
		border-collapse: collapse;
		margin: 5px 0;
		font-size: 0.9em;
		font-family: "Work Sans", sans-serif;
		min-width: 500px;
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