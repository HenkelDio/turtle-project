import React from "react";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import _default from "./styles/theme/default";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import {QueryClientProvider, useQueryClient} from 'react-query'

const App: React.FC = () => {

	const queryClient = useQueryClient()

  return(
		<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<ThemeProvider theme={_default}>
				<GlobalStyle />
				<Layout />
			</ThemeProvider>
		</BrowserRouter>
		</QueryClientProvider>
  )
}

export default App;
