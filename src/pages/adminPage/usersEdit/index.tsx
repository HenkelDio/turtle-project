import { BackPage } from "../../../packages/admin/FormGroup/styles";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Container } from "./styles";
import FormEditUser from "../../../components/FormEditUser";
import RegistersTable from "../../../components/RegistersTable";
import { Button, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import { getStudentByDocument } from "../../../services/usersService";
import Loader from "../../../components/Loader";
import { IUserStudent } from "../../../types";

const UserEdit: React.FC = () => {
	const { document } = useParams();
	const [loading, setLoading] = useState(true);
	const [student, setStudent] = useState<IUserStudent>();
	const toast = useToast();
	const navigate = useNavigate();

	useQuery(
		["studentByDocument", document],
		() => getStudentByDocument(document),
		{
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSuccess: ({ data, err }) => {
				setLoading(true);

				if (!err) {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					setStudent(data);
					setLoading(false);
				}
				if (err) {
					toast({
						title: "Erro.",
						description: "Não foi possível carregar o estudante.",
						status: "error",
						duration: 5000,
						isClosable: true,
					});

					setLoading(false);
					navigate("/users");
				}
			},
		},
	);

	if (loading) {
		return (
			<div style={{ marginTop: "60px" }}>
				<Loader />
			</div>
		);
	}

	return (
		<Container>
			<BackPage>
				<Link to="/users">
					<IoIosArrowBack />
				</Link>
			</BackPage>

			<h1>Editar usuário</h1>

			<FormEditUser student={student}/>

			<RegistersTable />

			<Button colorScheme="green" mt={10} w="500px">
				Salvar
			</Button>
		</Container>
	);
};

export default UserEdit;
