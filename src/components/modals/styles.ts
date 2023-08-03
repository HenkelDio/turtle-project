import { styled } from "styled-components";

export const Overlay = styled.div`
	background-color: rgba(0, 0 ,0, 0.6);
  backdrop-filter: blur(2px);

  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
	position: relative;
	max-width: 450px;
  width: 100%;
	height: 550px;
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
	font-family: 'Work Sans', sans-serif;

	overflow: hidden;

	.courses{
		height: 80px;
		overflow-y: auto;

		&::-webkit-scrollbar {
 			 width: 5px;
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

	.confirm-data {
		position: relative;
		right: 500px;

		@keyframes slide-out {
		0% {
			right: 0px;
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
		to {
			right: 500px;
			position: absolute;
			opacity: 0;
		}
}
	}
`

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
	gap: 15px;	
  align-items: center;
  justify-content: flex-end;

  .cancel-button{
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 8px;
		opacity: 0.8;
    color: black;
    cursor: pointer;

		&:hover {
			opacity: 1;
		}
  }
`

export const ContainerField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;

	margin-top: 15px;
`;

export const Conclusion = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 50px;
	background-color: ${({ theme }) => theme.colors.green.main};
	border-radius: 8px;
	transition: 1s;

	position: relative;
	right: -500px;

	span {
		font-size: 8rem;
		color: ${({ theme }) => theme.colors.green.lighter};
	}

	h1 {
		color: #fff;
	}

	p {
		margin: 40px 0;
		text-align: center;
		color: #fff;
		opacity: 0.8;
	}

	@keyframes slide-in {
  from {right: -500px;}
  to {right: 0px;}
}

`;