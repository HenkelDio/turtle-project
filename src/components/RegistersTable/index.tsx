import { useQuery } from "react-query";
import { ContainerList } from "./styles";
import {
	deleteRegister,
	getRegistersByStudent,
} from "../../services/usersService";
import { IRegister, IUserStudent } from "../../types";
import { useState } from "react";
import { Flex, useDisclosure, useToast } from "@chakra-ui/react";
import GenericModal from "../GenericModal";
import AddRegisterCourse from "../AddRegisterCourse";

interface IProps {
	student: IUserStudent | undefined;
}

const RegistersTable: React.FC<IProps> = ({ student }: IProps) => {
	const [loading, setLoading] = useState(true);
	const [registers, setRegisters] = useState<IRegister[]>([]);
	const { isOpen, onClose, onOpen } = useDisclosure();

	const toast = useToast();

	async function cancelRegister(id: number | undefined) {

		const response = await deleteRegister(id);

		if (response.data) {
			toast({
				title: "Sucesso.",
				description: "Matricula removida com sucesso",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
			onClose();
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			getRegistersQuery.refetch();
		} else {
			toast({
				title: "Erro.",
				description: "Não foi possível remover a matricula.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	}

	const getRegistersQuery = useQuery(
		["getRegistersByStudent", student?.student_document],
		() => getRegistersByStudent(student?.student_document),
		{
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSuccess: ({ data, err }) => {
				setLoading(true);

				if (!err) {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					setRegisters(data.registers);
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
				<Flex alignItems='center' direction='row' justifyContent='space-between'>
					<label htmlFor="student_document">Matrículas</label>
					<AddRegisterCourse registers={registers} student={student} getRegisterQuery={getRegistersQuery}/>
				</Flex>
				<table className="styled-table">
					<thead>
						<tr>
							<th>Curso</th>
							<th>Status</th>
							<th>-</th>
						</tr>
					</thead>
					<tbody>
						{registers &&
							registers.map((item) => {
								return (
									<>
										<tr>
											<td className="name">{item.course.course_title}</td>
											<td>{item.is_done ? "Completo" : "Em progresso"}</td>
											<td className="remove_register" onClick={onOpen}>
												Remover matricula
											</td>
										</tr>

										<GenericModal
											modalTitle="Cancelar matricula"
											isOpen={isOpen}
											onClose={onClose}
											actionLabel="Sim"
											// eslint-disable-next-line @typescript-eslint/no-misused-promises
											action={() => cancelRegister(item.register_id)}
										>
											<h2>Você tem certeza que deseja cancelar a matricula?</h2>
											<span style={{ opacity: 0.7, fontSize: "15px" }}>
												essa ação não pode ser desfeita
											</span>
										</GenericModal>
									</>
								);
							})}
					</tbody>
				</table>
			</ContainerList>
		</>
	);
};

export default RegistersTable;
