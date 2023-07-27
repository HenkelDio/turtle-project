import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import SideMenu from "../user/SideMenu";
import Routes from "../../configs/routes";
import { useState } from "react";


const Layout: React.FC = () => {
	const [isAuthenticated] = useState(true)

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
