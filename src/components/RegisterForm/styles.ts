import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 8px;

	label {
		font-weight: 600;
	}

	span {
		color: ${({ theme }) => theme.colors.red.main};
	}
`