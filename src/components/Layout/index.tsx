import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import SideMenu from "../user/SideMenu";
import Routes from "../../configs/routes";
import { useState } from "react";
import useTurtleStore from "../../store";
import { useHistory } from "react-router-dom";
import Login from "../../pages/login";
import SideMenuAdmin from "../admin/SideMenuAdmin";

const Layout: React.FC = () => {
	const { isAuthenticated, credentials } = useTurtleStore((state) => state);

	if(!isAuthenticated) {
		return(
			<Container>
				<div className='content'>
				<Login />
				</div>
			</Container>
		)
	}

	return(
		<>
			<Container>
				{
					isAuthenticated && credentials.type === 'user' && <SideMenu />
				}

				{
					isAuthenticated && credentials.type === 'admin' && <SideMenuAdmin />
				}

				<div className="content">
					<Routes />
				</div>
			</Container>
		</>
	);
}

export default Layout;
