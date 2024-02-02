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
import { Button, useToast } from "@chakra-ui/react";
import Paginator from "../../../components/Paginator";

const UserAdministration: React.FC = () => {
	const [users, setUsers] = useState<any[]>([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [isLoading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [totalPages, setTotalPages] = useState(1);
  const toast = useToast()

	useQuery(['user', page, pageSize], () => listStudentes(page, pageSize), {
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		onSuccess: ({ data, err }) => {
			setLoading(true)

			if (!err) {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				setUsers(data.students);
				setLoading(false)
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				setTotalPages(data.totalPages)
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

	function changePageSize(pageSize: number) {
		setPageSize(pageSize);
	}

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
					<Select onChange={(e) => changePageSize(e.target.value)}>
						<option disabled selected>Resultados por página</option>
						<option defaultValue="10">10</option>
						<option defaultValue="20">20</option>
					</Select>
				</FilterInput>
				<Link to="/users/create">
					<Button
						colorScheme="green"
					>
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
												<td>{formatDocument(user.student_document)}</td>
												<td>
													{user.student_phone ?
														formatPhone(user.student_phone) 
													: "-"}
												</td>
												<td className="actions"><Link to="/">Editar</Link></td>
											</tr>
										)
									})
								}

							</tbody>
						</table>

						{users && users.length === 0 && <Box>Nenhum usuário encontrado.</Box>}
						
						{
							users && users.length > 0 && 
							<Paginator setPage={setPage} page={page} totalPages={totalPages}/>
						}
					</ContainerList>


			}
		</Container>
	)
}

export default UserAdministration;

