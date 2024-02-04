import { useQuery } from "react-query";
import { ContainerList } from "./styles";
import { getRegistersByStudent } from "../../services/usersService";
import { IRegister, IUserStudent } from "../../types";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

interface IProps {
	student: IUserStudent | undefined
}

const RegistersTable: React.FC<IProps> = ({ student }: IProps) => {
	const [loading, setLoading] = useState(true);
	const [registers, setRegisters] = useState<IRegister[]>([]);

	const toast = useToast();

	useQuery(
		["getRegistersByStudent", student?.student_document],
		() => getRegistersByStudent(student?.student_document),
		{
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSuccess: ({ data, err }) => {
				setLoading(true);
	
				if (!err) {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					setRegisters(data.registers)
					console.log(data)
					console.log(registers)
					setLoading(false);
				}
				if (err) {
					toast({
						title: "Erro.",
						description: "Não foi possível carregar as matrículas.",
						status: "error",
						duration: 5000,
						isClosable: true,
					});
	
					setLoading(false);
				}
			},
		},
	);

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
					
							{
								registers && registers.map((item) => {
									return <>
									<tr>
									<td className="name">{item.course.course_title}</td>
									<td>{item.is_done ? 'Completo' : 'Em progresso'}</td>
									<td className="actions">Gerar Certificado</td>
									</tr>
									</>
								})
							}
					</tbody>
				</table>
			</ContainerList>
		</>
	);
};

export default RegistersTable;
