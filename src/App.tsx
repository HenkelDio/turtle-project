import React from "react";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import _default from "./styles/theme/default";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return(
		<BrowserRouter>
			<ThemeProvider theme={_default}>
				<GlobalStyle />
				<Layout />
			</ThemeProvider>
		</BrowserRouter>
  )
}

export default App;
