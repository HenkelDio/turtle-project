import { styled } from "styled-components";

export const Box = styled.div`
	display: flex;
	flex-direction: row;
	gap: 50px;
	margin-bottom: 50px;

	h2 {
		width: 120px;
		text-align: left;
	}
`

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`

export const Divider = styled.div`
	height: 170px;
	width: 3px;
	background-color: #3E3E3E;
	border-radius: 10px;
`;

export const ContainerChips = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 10px;
	padding: 0 10px;
	height: 300px;
	width: 400px;

	overflow-y: scroll;

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

export const Chip = styled.div`
	display: flex;
	align-items: center;
	text-align: center;

  background: #bfbfbf;
	max-height: 100px;
	width: 100%;
  padding: 20px 10px;
  border-radius: 10px;
  font-size: 13px;
	cursor: pointer;

  &:hover {
    background: #ccc;
  }
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