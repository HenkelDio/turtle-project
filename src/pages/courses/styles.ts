import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		margin-bottom: 50px;
	}

	span {
		display: block;
		margin-top: 20px;
		font-weight: 500;
		padding-left: 5px;
		margin-bottom: 30px;
	}
`;

export const ContainerCards = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
`;

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

