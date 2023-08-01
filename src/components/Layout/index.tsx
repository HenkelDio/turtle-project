import { Container } from "./styles";
import useTurtleStore from "../../store";
import Login from "../../pages/login";
import SideMenuAdmin from "../../packages/admin/SideMenuAdmin";
import Routes from "../../configs/routes";
import SideMenuStudent from "../../packages/student/SideMenuStudent";
import { useHistory } from "react-router-dom";
import delay from "../../utils/delay";

const Layout: React.FC = () => {
	const { isAuthenticated, credentials } = useTurtleStore((state) => state);

	const history = useHistory();

	if(!isAuthenticated) {
		history.push('/login');
		// return(
		// 	<Container>
		// 		<div className='content'>
		// 		<Login />
		// 		</div>
		// 	</Container>
		// )
	}

	return(
		<>
			<Container>
				{
					isAuthenticated && credentials.type === 'user' && <SideMenuStudent />
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
