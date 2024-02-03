import { ContainerList } from "./styles";

const RegistersTable: React.FC = () => {
	return (
		<>
			<ContainerList>
				<label htmlFor="student_document">Matrículas</label>
				<table className="styled-table">
					<thead>
						<tr>
							<th>Curso</th>
							<th>Status</th>
							<th>-</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="name">NR 25</td>
							<td>Em Progresso</td>
							<td className="actions">Gerar Certificado</td>
						</tr>
					</tbody>
				</table>
			</ContainerList>
		</>
	);
};

export default RegistersTable;
