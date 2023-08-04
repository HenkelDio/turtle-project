import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Content = styled.div`
	width: 80%;
	padding: 15px 20px;
	height: 100vh;

	overflow-y: auto;

	.video {
		width: 100%;
		height: 400px;
		background-color: #ccc;
		padding: 5px;
	}

	details {
		margin-top: 50px;
		border-radius: 10px;
		box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

		background-color: #fff;
		padding: 20px;

		summary {
			cursor: pointer;
		}
	}

	.text {
			margin-top: 50px;
			margin-bottom: 50px;
	}

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}
`;

export const Modules = styled.div`
	width: 30%;
	height: 100vh;
	background-color: #fff;

	details {
		padding: 10px;
		cursor: pointer;
		user-select: none;

		border-bottom: 2px solid #ccc;

		p {
			padding: 10px;
			cursor: pointer;
		}
	}
`;