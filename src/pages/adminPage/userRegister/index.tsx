import FormGroupStudentRegister from "../../../packages/admin/FormGroup/FormGroupStudentRegister";
import Select from "../../../packages/student/Select";
import { Box, Container } from "./styles";
import useTurtleStore from "../../../store";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BackPage } from "../../../packages/admin/FormGroup/styles";
import FormGroupAdminRegister from "../../../packages/admin/FormGroup/FormGroupAdminRegister";

const UserRegister: React.FC = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { registerType } = useTurtleStore((state) => state);

	return (
		<Container>
			<BackPage>
				<Link to="/users">
					<IoIosArrowBack />
				</Link>
			</BackPage>

			<h1>Criar novo usuário</h1>

			<Box>
				<Select />
			</Box>

			{registerType === "student" && <FormGroupStudentRegister />}
			{registerType === "admin" && <FormGroupAdminRegister />}
		</Container>
	);
};

export default UserRegister;
