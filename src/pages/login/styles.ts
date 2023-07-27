import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	width: 100%;
`

export const FieldLogin = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	width: 350px;
	margin-top: 20px;

	input {
		width: 100%;
	}
`;

export const Button = styled.button`
	width: 350px;
	height: 37px;
	margin-top: 25px;
	

	border: 2px solid transparent;
	background-color: #80ED99;
	border-radius: 10px;
	
	font-size: 1rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.grey.main};
	cursor: pointer;

	&:hover {
		border: 4px solid #57CC99;
	}

`

export const Loader = styled.div`
	margin-top: 30px;

.loader, .loader:before, .loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: bblFadInOut 1.8s infinite ease-in-out;
}
.loader {
  color: ${({ theme }) => theme.colors.green.main};;
  font-size: 7px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}

@keyframes bblFadInOut {
  0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }
  40% { box-shadow: 0 2.5em 0 0 }
}
`