import { styled } from "styled-components";

export const FormInput = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;

	p {
		position: absolute;
		right: -40px;
		font-size: 1.5rem;
		cursor: pointer;
		opacity: 0.8;
		color: ${({ theme }) => theme.colors.grey.main};

		&:hover {
			opacity: 1;
		}
	}
`