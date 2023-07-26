import { styled } from "styled-components";

export const Container = styled.div`
	width: 1200px;

	h1 {
		margin-bottom: 50px;
	}

	span {
		display: block;
		margin-top: 8px;
		font-weight: 500;
		padding-left: 5px;
		margin-bottom: 45px;
	}
`;

export const ContainerCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 40px 5px;
	justify-content: space-around;
	padding-top: 10px;

	height: 450px;
	
	overflow-y: scroll;

	&::-webkit-scrollbar {
  width: 5px;
}

/* Track */
&::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
&::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;