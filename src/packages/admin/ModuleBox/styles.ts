import { styled } from "styled-components";

export const Container = styled.div`
	position: relative;

	min-width: 150px;
	max-width: 150px;
	height: 200px;

	background-color: #d9d9d9;
	box-shadow: 10px 10px 15px -10px rgba(0,0,0,0.2);

	border-radius: 4px;


	display: flex;
	align-items: center;
	text-align: center;

	p {
		font-weight: 500;
	}


	.menuOptions {
		font-size: 20px;
		position: absolute;
		right: 5px;
		bottom: 5px;

		cursor: pointer;
	}


	.options{
		opacity: 1;

		position: absolute;
		bottom: -10px;
		right: -90px;
		z-index: 9999;

		display: flex;
		justify-content: start;
		align-items: center;
		flex-direction: column;

		height: 75px;
		width: 100px;

		border-radius: 5px;

		box-shadow: 0px 10px 15px 2px rgba(0,0,0,0.2);
		background-color: #fff;

		animation: openOptionsAnimation 0.1s;


		@keyframes openOptionsAnimation {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}

		span {
			font-size: 15px;

			cursor: pointer;

			display: flex;
			align-items: center;
			gap: 10px;

			padding: 10px;
			width: 100%;

			font-weight: 500;

			&:hover {
				background-color: #f5f5f5;
			}
		}

		.delete {
			color: ${({ theme }) => theme.colors.red.main};
			border-top-right-radius: 5px;
			border-top-left-radius: 5px;
		}

		.edit {
			border-bottom-right-radius: 5px;
			border-bottom-left-radius: 5px;
		}
	}
`;