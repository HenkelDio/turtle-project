import FormGroupStudentRegister from "../../../packages/admin/FormGroup/FormGroupStudentRegister";
import Select from "../../../packages/student/Select";
import { Box, Container } from "./styles";
import useTurtleStore from "../../../store";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BackPage } from "../../../packages/admin/FormGroup/styles";
import FormGroupCompanyRegister from "../../../packages/admin/FormGroup/FormGroupCompanyRegister";

const userRegister: React.FC = () => {
	const { registerType } = useTurtleStore((state) => state);

	return (
		<Container>
			<BackPage>
				<Link to='/admin/users'><IoIosArrowBack /></Link>
			</BackPage>

			<h1>Criar novo usuário</h1>

			<Box>
				<Select />
			</Box>

			{
				registerType === 'student' && <FormGroupStudentRegister />
			}

			{
				registerType === 'company' && <FormGroupCompanyRegister	 />
			}

		</Container>
	)
}

export default userRegister;