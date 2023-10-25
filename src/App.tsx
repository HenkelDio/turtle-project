import React from "react";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import _default from "./styles/theme/default";
import { BrowserRouter } from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query'
import { Router } from "./configs/routes";

const App: React.FC = () => {

	const queryClient = new QueryClient()

  return(
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={_default}>
				<GlobalStyle />
				<Router />
			</ThemeProvider>
		</QueryClientProvider>
  )
}

export default App;
