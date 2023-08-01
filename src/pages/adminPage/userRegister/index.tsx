import { useEffect } from "react";
import { Container } from "../usersAdministration/styles";
import UsersService from "../../../services";

const UserRegister: React.FC = () => {
	useEffect(() => {
		async function handleThis() {
			const testt = await UsersService.postUser();
			console.log(testt)
		}

		handleThis();
	}, [])



	return(
		<Container>
			
		</Container>
	)
}

export default UserRegister;