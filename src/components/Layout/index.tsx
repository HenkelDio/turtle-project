import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import SideMenu from "../user/SideMenu";
import Routes from "../../configs/routes";
import { useState } from "react";
import useTurtleStore from "../../store";


const Layout: React.FC = () => {
	const { isAuthenticated } = useTurtleStore((state) => state);

	return(
		<BrowserRouter>
			<Container>
				{
					isAuthenticated && <SideMenu />
				}

				<div className="content">
					<Routes />
				</div>
			</Container>
		</BrowserRouter>
	);
}

export default Layout;
