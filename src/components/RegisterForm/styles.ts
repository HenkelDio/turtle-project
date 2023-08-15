import { css, styled } from "styled-components";


export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 8px;

	label {
		font-weight: 600;
	}

	span {
		position: relative;
		color: ${({ theme }) => theme.colors.red.main};
		font-weight: 500;

		animation: showError 0.5s ease;
	}

	input {
		width: 500px;
		height: 40px;

		border: 3px solid transparent;
		border-radius: 5px;
		padding: 0 10px;

		outline: none;

		transition: 0.5s ease-out;
		font-family: 'Work Sans', sans-serif;
		font-size: 1.1rem;


	&:focus {
		border: 3px solid #57CC99;
	}
	}

	@keyframes showError {
		0% {
			top: -20px;
			opacity: 0;
		}
		100% {
			top: 0px;
			opacity: 1;
		}
	}

`

export const OptionsContainer = styled.div`
	width: 50px;
	height: 200px;
	padding: 10px;

	background-color: #fff;

	position: absolute;

	left: 0px;
	top: 20px;

	border-radius: 5px;

	box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

	z-index: 9999;

	overflow-y: scroll;

	input {
		margin-bottom: 20px;
	}

	.radio-section {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 10vh;
}

.radio-item [type="radio"] {
	display: none;
}
.radio-item + .radio-item {
	margin-top: 15px;
}
.radio-item label {
	display: block;
	padding: 5px 60px;
	background: #ffff;
	border: 2px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	cursor: pointer;
	font-size: 18px;
	font-weight: 400;
	min-width: 100%;
	white-space: nowrap;
	position: relative;
	transition: 0.4s ease-in-out 0s;
}
.radio-item label:after,
.radio-item label:before {
	content: "";
	position: absolute;
	border-radius: 50%;
}
.radio-item label:after {
	height: 12px;
	width: 12px;
	border: 2px solid ${({ theme }) => theme.colors.green.main};;
	left: 19px;
	top: calc(50% - 12px);
}
.radio-item label:before {
	background: ${({ theme }) => theme.colors.green.main};
	height: 15px;
	width: 14px;
	left: 21px;
	top: calc(50%-5px);
	transform: scale(5);
	opacity: 0;
	visibility: hidden;
	transition: 0.4s ease-in-out 0s;
}
.radio-item [type="radio"]:checked ~ label {
	border-color: ${({ theme }) => theme.colors.green.main};;
}
.radio-item [type="radio"]:checked ~ label::before {
	opacity: 1;
	visibility: visible;
	transform: scale(1);
}


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
