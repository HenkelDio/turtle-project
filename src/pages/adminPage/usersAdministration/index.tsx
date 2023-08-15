import { HiFilter } from "react-icons/hi";
import { FormInput } from "../../../components/FormInput";
import { Container, ContainerList, Button, Box, FilterInput } from "./styles";
import Input from "../../../components/Input";
import { useMemo, useState } from "react";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import { listStudentes } from "../../../services";
import { useQuery, useQueryClient } from "react-query";
import { IUserStudent } from "../../../types";
import formatPhone from "../../../utils/phoneFormat";
import {formatDocument} from "../../../utils/documentFormat";
import Select from "../../../components/Select";

const UserAdministration: React.FC = () => {
	const [users, setUsers] = useState<any[]>([]);
	const [searchTerm, setSearchTerm] = useState('');

	const queryClient = useQueryClient();

	const { isLoading } = useQuery(['user'], listStudentes, {
		onSuccess: (data: any) => {
			if (data && data.data) {
				console.log(data.data);
				setUsers(data.data);
			} else {
				console.log(data.err)
			}
		},
		onSettled: async () => {
			await queryClient.invalidateQueries('create')
		}
	});

	const filteredCards = useMemo(() => users.filter((user) => (
    user.student_name.toLowerCase().includes(searchTerm.toLowerCase()))), [users, searchTerm]);


	if (isLoading) {
		return (
			<Loader />
		)
	}

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
				<Link to="/admin/users/register">
					<Button>
						Novo Usuário
					</Button>
				</Link>
			</Box>
			<ContainerList>
				<table className="styled-table">
					<thead>
						<tr>
							<th>Nome</th>
							<th>CPF</th>
							<th>Telefone</th>
							<th>#</th>
						</tr>
					</thead>
					<tbody>
						{
							users && filteredCards.map((user: IUserStudent) => {
								return(
									<tr>
										<td>{user.student_name}</td>
										<td>{formatDocument(user.student_cpf)}</td>
										<td>{formatPhone(user.student_cellphone)}</td>
										<td><Link to="/">Editar</Link></td>
									</tr>
								)
							})
						}
						
					</tbody>
				</table>
			</ContainerList>
		</Container>
	)
}

export default UserAdministration;