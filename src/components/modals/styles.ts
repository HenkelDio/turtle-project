import { styled } from "styled-components";

export const Overlay = styled.div`
	background-color: rgba(0, 0 ,0, 0.6);
  backdrop-filter: blur(2px);

  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
	max-width: 450px;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
	font-family: 'Work Sans', sans-serif;
`

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button{
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 8px;
    color: black;
    cursor: pointer;
  }
`

export const ContainerField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;

	margin-top: 15px;
`;