import { css, styled } from "styled-components";

interface ISelect {
	select: string,
}

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 50px;

	p {
		text-align: right;
		opacity: 0.5;
		font-weight: 500;
	}

	h3 {
		text-align: left;
	}
`

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin-top: 10px;
`


export const ContainerChips = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: start;
	gap: 10px;

	margin-top: 15px;
	padding: 10px 10px;
	max-height: 300px;
	width: 1000px;
	border-radius: 8px;

	box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
	background-color: #fff;
	

	overflow-y: auto;

	&::-webkit-scrollbar {
 			 width: 10px;
		}

		/* Track */
		&::-webkit-scrollbar-track {
			background: #f1f1f1;
		}

		/* Handle */
		&::-webkit-scrollbar-thumb {
			background: #D9D9D9;
			border-radius: 4px;
		}

		/* Handle on hover */
		&::-webkit-scrollbar-thumb:hover {
			background: #B6B6B6;
	}
`

export const Chip = styled.div<ISelect>`
	display: flex;
	align-items: center;
	text-align: center;
	font-weight: 500;
  background: ${({ theme }) => theme.colors.green.main};
	color: #ffff;
	/* TODO trazer color do theme */
	max-height: 50px;
  padding: 20px 10px;
  border-radius: 10px;
  font-size: 13px;
	cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.green.light};
  }

	${({ select }: ISelect) => select === 'true' && css`
			background: ${({ theme }) => theme.colors.green.dark}!important;
	`}
`

export const BackPage = styled.div`
	position: absolute;
	top: 5px;
	left: 20px;

	a {
		color: black;
	}
	font-size: 2rem;
	cursor: pointer;
`;

export const BoxAddress = styled.div`
	display: flex;
	gap: 10px;

	div:nth-child(1) {
		width: 390px;
		input {
			width: 100%;
		}
	}

	div:nth-child(2) {
		width: 100px;

		input {
			width: 100%;
		}
	}
`

export const ContainerCompaniesChip = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: start;
	gap: 10px;
	height: 300px;

	overflow-y:auto;
`;	