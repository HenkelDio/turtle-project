import { css, styled } from "styled-components";

interface IErrorProps {
	error: string | undefined,
}

export const Container = styled.div<IErrorProps>`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 8px;

	label {
		font-weight: 600;
	}

	input {
		${({ theme, error }) => error && css`
			border: 3px solid ${theme.colors.red.main};
		`}
	}

	span {
		color: ${({ theme }) => theme.colors.red.main};
	}
`