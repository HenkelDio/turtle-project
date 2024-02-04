/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { BackPage } from "../../../packages/admin/FormGroup/styles";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Container } from "./styles";
import FormEditUser from "../../../components/FormEditUser";
import RegistersTable from "../../../components/RegistersTable";
import { Button, useDisclosure, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import { deleteStudent, getStudentByDocument } from "../../../services/usersService";
import Loader from "../../../components/Loader";
import { IUserStudent, IWorkplace } from "../../../types";
import { FiTrash2 } from "react-icons/fi";
import GenericModal from "../../../components/GenericModal";

const UserEdit: React.FC = () => {
	const { document } = useParams();
	const [loading, setLoading] = useState(true);
	const [student, setStudent] = useState<IUserStudent>();
	const [workplace, setWorkplace] = useState<IWorkplace | undefined>();
	const toast = useToast();
	const navigate = useNavigate();
	const { isOpen, onClose, onOpen } = useDisclosure();

	async function deleteStudentByDocument() {
		const response = await deleteStudent(student?.student_document)

		if(response.data) {
			toast({
				title: 'Sucesso',
				description: "Estudante deletado com sucesso",
				status: 'success',
				duration: 5000,
				isClosable: true,
			});

			navigate('/users')
		} else {
			toast({
				title: 'Erro',
				description: "Erro ao deletar estudante",
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
		}
	}

	useQuery(
		["studentByDocument", document],
		() => getStudentByDocument(document),
		{
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSuccess: ({ data, err }) => {
				setLoading(true);

				if (!err) {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					setStudent(data.student);

					if (data.company) {
						setWorkplace(data.company);
					}

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
		<>
			<Container>
				<BackPage>
					<Link to="/users">
						<IoIosArrowBack />
					</Link>
				</BackPage>

				<h1>Editar usuário</h1>

				<FormEditUser student={student} workplace={workplace} />

				<RegistersTable student={student} />

				<Button colorScheme="green" mt={10} w="500px">
					Salvar
				</Button>

				<Button colorScheme="red" mt={5} w="500px" onClick={onOpen}>
					Deletar usuário{" "}
					<p style={{ marginLeft: "10px" }}>
						<FiTrash2 />
					</p>
				</Button>
			</Container>

			<GenericModal
				modalTitle="Deletar estudante"
				isOpen={isOpen}
				onClose={onClose}
				actionLabel="Deletar"
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				action={() => deleteStudentByDocument()}
			>
				<h2>Você tem certeza que deseja deletar esse estudante?</h2>
				<span style={{ opacity: 0.7, fontSize: '15px'}}>essa ação não pode ser desfeita</span>
			</GenericModal>
		</>
	);
};

export default UserEdit;
