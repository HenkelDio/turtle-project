import { styled } from "styled-components";

export const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
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
	font-family: "Work Sans", sans-serif;

	overflow: hidden;

	.courses {
		min-height: 40px;
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
			background: #d9d9d9;
			border-radius: 4px;
		}

		/* Handle on hover */
		&::-webkit-scrollbar-thumb:hover {
			background: #b6b6b6;
		}

		.workplace {
		}
	}
`;

export const Footer = styled.footer`
	margin-top: 32px;
	display: flex;
	gap: 15px;
	align-items: center;
	justify-content: flex-end;

	.cancel-button {
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
`;

export const ContainerField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;

	margin-top: 15px;

	height: 350px;

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
		background: #d9d9d9;
		border-radius: 4px;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: #b6b6b6;
	}
`;

export const LoadingContainer = styled.div`
	width: 100%;
	height: 100%;

	position: absolute;

	background-color: rgba(0, 0, 0, 0.3);

	left: 0;
	top: 0;
`;
