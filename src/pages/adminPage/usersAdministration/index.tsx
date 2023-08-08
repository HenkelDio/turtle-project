import { HiFilter } from "react-icons/hi";
import { FormInput } from "../../../components/FormInput";
import { Container, ContainerList, Button, Box } from "./styles";
import Input from "../../../components/Input";
import { useState } from "react";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import { listStudentes } from "../../../services";
import { useQuery, useQueryClient } from "react-query";
import { IUserStudent } from "../../../types";
import formatPhone from "../../../utils/phoneFormat";
import {formatDocument} from "../../../utils/documentFormat";

const UserAdministration: React.FC = () => {
	const [users, setUsers] = useState([]);

	const queryClient = useQueryClient();

	const { isLoading } = useQuery(['user'], listStudentes, {
		onSuccess: data => {
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

	if (isLoading) {
		return (
			<Loader />
		)
	}

	return (
		<Container>
			<h1>Usuários</h1>
			<Box>
				<Input
					placeholder="Pesquise pelo nome do usuário" />
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
						</tr>
					</thead>
					<tbody>
						{
							users && users.map((user: IUserStudent) => {
								return(
									<tr>
										<td>{user.student_name}</td>
										<td>{formatDocument(user.student_cpf)}</td>
										<td>{formatPhone(user.student_cellphone)}</td>
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