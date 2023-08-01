import { HiFilter } from "react-icons/hi";
import { FormInput } from "../../../components/FormInput";
import { Container, ContainerList, Button, Box} from "./styles";
import Input from "../../../components/Input";
import { useEffect, useState } from "react";
import delay from "../../../utils/delay";
import Loader from "../../../components/Loader";

const UserAdministration: React.FC = () => {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		async function handleDelay() {
			setLoading(true);
			await delay();
			setLoading(false);
		}

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		handleDelay();

	}, [])

	if(isLoading) {
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
				<Button>
					Novo Usuário
				</Button>
			</Box>
			<ContainerList>
				<table className="styled-table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nome</th>
							<th>CPF</th>
							<th>Matriculas</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>58478</td>
							<td>Willian José Henkel de Deus</td>
							<td>124.400.389-11</td>
							<td>5</td>
						</tr>
						<tr>
							<td>58478</td>
							<td>Willian José Henkel de Deus</td>
							<td>124.400.389-11</td>
							<td>5</td>
						</tr>
						<tr>
							<td>58478</td>
							<td>Willian José Henkel de Deus</td>
							<td>124.400.389-11</td>
							<td>5</td>
						</tr>
						<tr>
							<td>58478</td>
							<td>Willian José Henkel de Deus</td>
							<td>124.400.389-11</td>
							<td>5</td>
						</tr>
						<tr>
							<td>58478</td>
							<td>Willian José Henkel de Deus</td>
							<td>124.400.389-11</td>
							<td>5</td>
						</tr>
						<tr>
							<td>58478</td>
							<td>Willian José Henkel de Deus</td>
							<td>124.400.389-11</td>
							<td>5</td>
						</tr>
						<tr>
							<td>58478</td>
							<td>Willian José Henkel de Deus</td>
							<td>124.400.389-11</td>
							<td>5</td>
						</tr>
						<tr>
							<td>58478</td>
							<td>Willian José Henkel de Deus</td>
							<td>124.400.389-11</td>
							<td>5</td>
						</tr>
						<tr>
							<td>58478</td>
							<td>Willian José Henkel de Deus</td>
							<td>124.400.389-11</td>
							<td>5</td>
						</tr>
						<tr className="active-row">
							<td>58478</td>
							<td>Willian José Henkel de Deus</td>
							<td>124.400.389-11</td>
							<td>5</td>
						</tr>
					</tbody>
				</table>
			</ContainerList>
		</Container>
	)
}

export default UserAdministration;