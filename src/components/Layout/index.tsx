import { BrowserRouter } from "react-router-dom";
import Routes from "../../configs/routes";
import SideMenu from "../SideMenu";
import { Container } from "./styles";


const Layout: React.FC = () => {
	return(
		<BrowserRouter>
			<Container>
				<SideMenu />
				<div className="content">
					<Routes />
				</div>
			</Container>
		</BrowserRouter>
	);
}

export default Layout;
