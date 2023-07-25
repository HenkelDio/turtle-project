import React from "react";
import Layout from "./components/Layout";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import _default from "./styles/theme/default";

const App: React.FC = () => {
  return(
		<ThemeProvider theme={_default}>
			<GlobalStyle />
			<Layout />
		</ThemeProvider>
  )
}

export default App;
