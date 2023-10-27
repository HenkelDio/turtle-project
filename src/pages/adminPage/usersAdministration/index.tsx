import { Container, ContainerList, Box, FilterInput } from "./styles";
import Input from "../../../components/Input";
import { useMemo, useState } from "react";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import { listStudentes } from "../../../services";
import { useQuery } from "react-query";
import { IUserStudent } from "../../../types";
import formatPhone from "../../../utils/phoneFormat";
import { formatDocument } from "../../../utils/documentFormat";
import Select from "../../../components/Select";
import Alert from "../../../components/Alert";
import delay from "../../../utils/delay";
import errorAnimation from '../../../assets/error_animation.json';
import Button from "../../../components/Button";
import { useToast } from "@chakra-ui/react";

const UserAdministration: React.FC = () => {
	const [users, setUsers] = useState<any[]>([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [isLoading, setLoading] = useState(true);
	const [openDialog, setOpenDialog] = useState(false);
  const toast = useToast()

	useQuery(['user'], listStudentes, {
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		onSuccess: async ({ data, err }) => {
			setLoading(true)

			if (!err) {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				setUsers(data);
				setLoading(false)
			}
			if (err) {
				toast({
          title: 'Erro.',
          description: "Não foi possível carregar os usuários.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })

				setLoading(false)
			}
		},
	});

	const filteredCards = useMemo(() => users?.filter((user) => (
		user.student_name.toLowerCase().includes(searchTerm.toLowerCase()))), [users, searchTerm]);

	return (
		<Container>
			<h1>Usuários</h1>
			<Box>
				<FilterInput>
					<Input
						placeholder="Pesquise pelo nome do usuário"
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<Select>
						<option defaultValue="student">Estudante</option>
						<option defaultValue="company">Empresa</option>
						<option defaultValue="admin">Administrador</option>
					</Select>
				</FilterInput>
				<Link to="/users/create">
					<Button>
						Novo Usuário
					</Button>
				</Link>
			</Box>
			{
				isLoading
					? <div style={{ marginTop: '60px' }}>
						<Loader />
					</div>
					: <ContainerList>
						<table className="styled-table">
							<thead>
								<tr>
									<th>Nome</th>
									<th>CPF</th>
									<th>Telefone</th>
									<th>Ação</th>
								</tr>
							</thead>
							<tbody>
								{
									users && filteredCards.map((user: IUserStudent) => {
										return (
											<tr>
												<td className="name">{user.student_name}</td>
												<td>{formatDocument(user.student_cpf)}</td>
												<td>{formatPhone(user.student_cellphone)}</td>
												<td className="actions"><Link to="/">Editar</Link></td>
											</tr>
										)
									})
								}

							</tbody>
						</table>
					</ContainerList>


			}
		</Container>
	)
}

export default UserAdministration;

