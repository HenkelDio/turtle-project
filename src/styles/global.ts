import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	body {
		background-color: #E7E7E7;
	}

	h1 {
		font-size: 1.4rem;
		font-weight: bold;
	}

`;
