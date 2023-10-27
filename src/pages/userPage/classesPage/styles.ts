import { styled } from "styled-components";


export const Content = styled.div`
	margin: 0 auto;
	flex: 2;
	overflow-y: auto;

	.video {
		width: 100%;
		height: 400px;
		background-color: #ccc;
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
	height: 100vh;
	background-color: #fff;
	border-radius: 8px;
`;