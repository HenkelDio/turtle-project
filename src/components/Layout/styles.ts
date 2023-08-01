import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;

	.content {
		padding: 20px 0px;
		font-family: 'Work Sans', sans-serif;
		width: 100%;
		height: 100vh;

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
	}
`;