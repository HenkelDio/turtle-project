import { useEffect } from "react";
import { Container } from "../usersAdministration/styles";
import UsersService from "../../../services";
import FormGroupStudentRegister from "../../../packages/admin/FormGroup/FormGroupStudentRegister";
import Select from "../../../components/Select";
import { Box } from "./styles";
import useTurtleStore from "../../../store";

const userRegister: React.FC = () => {
	const { registerType } = useTurtleStore((state) => state);

	return(
		<Container>
			<h1>Criar novo usuário</h1>
			
			<Box>
				<Select />
			</Box>

			{
				registerType === 'student' && <FormGroupStudentRegister />
			}
			

		</Container>
	)
}

export default userRegister;