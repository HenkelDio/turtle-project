import { useEffect } from "react";
import { Container } from "../usersAdministration/styles";
import UsersService from "../../../services";
import FormGroup from "../../../packages/admin/FormGroup";

const StudentRegister: React.FC = () => {
	useEffect(() => {
		async function handleThis() {
			const testt = await UsersService.postUser();
			console.log(testt)
		}

		handleThis();
	}, [])



	return(
		<Container>
			<h1>Criar novo usuário</h1>

			<FormGroup />

		</Container>
	)
}

export default StudentRegister;