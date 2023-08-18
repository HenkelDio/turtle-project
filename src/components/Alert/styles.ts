import { css, styled } from "styled-components";

interface IStyleProps {
	success: boolean,
	error: boolean,
}

export const Overlay = styled.div`
	position: absolute;
  top: 85%;  
	left: 50px;

	width: 300px;

	animation: upAlert 500ms;

	@keyframes upAlert {
		0% {
			opacity: 0;
			top: 100%;
		}
		100% {
			opacity: 1;
			top: 85%;
		}
	}
`;

export const Container = styled.div<IStyleProps>`
	position: relative;
	background-color: ${({ theme }) => theme.colors.alert.sucess};
	font-family: 'Work Sans', sans-serif;

	padding: 20px 20px;
	border-radius: 7px;

	color: black;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;

	${({ success }) => success && css`
		background-color: ${({ theme }) => theme.colors.alert.success};

		p {
			color: black;
		}

		span {
			color: black;
		}
	`}

	${({ error }) => error && css`
		background-color: ${({ theme }) => theme.colors.alert.error};

		p {
			color: white;
		}

		span {
			color: white;
		}
	`}

	p {
		font-size: 1rem;
		font-weight: 600;
	}

	span {
		display: flex;
		align-items: center;
		font-size: 1.5rem;
	}
`;

export const FooterLoading = styled.div<IStyleProps>`
	position: absolute;
	width: 0%;
	height: 5px;

	bottom: 0;
	left: 0;

	${({ success }) => success && css`
		background-color: ${({ theme }) => theme.colors.green.main};
	`}

	${({ error }) => error && css`
		background-color: ${({ theme }) => theme.colors.alert.errorUnderline};
	`}




	animation: footerAnimation 5s;

	@keyframes footerAnimation {
		0% {
			width: 100%;
		}
		100% {
			width: 0%;
		}
	}
`;

