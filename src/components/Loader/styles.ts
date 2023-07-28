import { styled } from "styled-components";

export const ContainerLoader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	
	.loader {
  box-sizing: border-box;
  position: relative;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
}
.loader:after, .loader:before {
  content: "";
  width: 24px;
  height: 24px;
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.green.main};
  animation: spin 1s linear infinite;
  transform-origin: 0px 100%;
}
.loader:before {
  transform-origin: 0 50%;
  background: #fff;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
`;