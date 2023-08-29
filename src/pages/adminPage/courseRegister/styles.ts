import { styled } from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: 1s;
	animation: showContainer 0.5s;
	padding-left: 50px;

	h1 {
		margin-bottom: 50px;
	}


	@keyframes showContainer {
		0% {
			opacity: 0;
			right: -500px;
		}
		100% {
			opacity: 1;
			right: 0px;
		}
	}
`;

export const ModulesContainer = styled.div`
	width: 500px;
	height: 280px;

	margin: 20px 0;
	border-radius: 10px;
	text-align: left;
	background-color: #fff;

	padding: 10px 20px;

	p {
		opacity: 0.9;
		margin-bottom: 5px;
	}

	.modules {
		display: flex;
		gap: 10px;

		padding: 15px 0px;
		width: 100%;

		overflow-x: auto;

		&::-webkit-scrollbar {
 			 width: 2px;
			 height: 10px;
		}

		/* Track */
		&::-webkit-scrollbar-track {
			background: #fff;
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

		.addMoreModulesContainer{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;

			min-width: 100px;
			max-width: 100px;
			opacity: 0.6;
			cursor: pointer;

			p {
				font-size: 0.8rem;
			}

			span {
				font-size: 1.2rem;
			}

			&:hover {
				opacity: 1;
			}
		}
	}
`;


export const Box = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 20px;
`;	

export const ContainerPreview = styled.div`
	width: 1000px;
	max-width: 700px;
	height: 95vh;
	overflow-x: hidden;
	overflow-y: auto;

	background-color: #fff;
	box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

	padding: 10px 50px;

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
`;

