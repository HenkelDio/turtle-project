/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormContainer } from "../../packages/admin/FormGroup/styles";
import FieldInput from "../Fields/FieldInput";
import RegisterForm from "../RegisterForm";
import MaskedInput from "react-text-mask";
import { studentValidation } from "../../validations";
import { cpfMask, phoneMask } from "../../utils/masks";
import { Box, Button, Flex, useDisclosure, useToast } from "@chakra-ui/react";
import SelectWorkplaceDrawer from "../SelectWorkplaceDrawer";
import { useEffect, useState } from "react";
import { IUpdateStudent, IUserStudent, IWorkplace } from "../../types";
import { FiTrash2 } from "react-icons/fi";
import { updateStudent } from "../../services/usersService";

interface IProps {
	student: IUserStudent | undefined;
	workplace: IWorkplace | undefined
}

const FormEditUser: React.FC<IProps> = ({
	student,
	workplace
}: IProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedNewWorkplace, setSelectedNewWorkplace] = useState<
		IWorkplace | undefined
	>();
	const [newData, setNewData] = useState<IUpdateStudent | undefined>();

	const toast = useToast();

	async function saveEditUser(values: any) {
		const data = {
			student: values,
			workplace: selectedNewWorkplace ? selectedNewWorkplace : workplace,
		}

		const response = await updateStudent(student?.student_document, data);
		console.log(data)
		if(response.data) {
			toast({
				title: 'Sucesso',
				description: "Estudante atualizado com sucesso",
				status: 'success',
				duration: 5000,
				isClosable: true,
			});

		} else {
			toast({
				title: 'Erro',
				description: "Erro ao atualizar estudante",
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
		}
	}

	useEffect(() => {
		console.log(student);
	}, [student]);

	return (
		<>
			<Formik
				onSubmit={saveEditUser}
				initialValues={student}
				validationSchema={studentValidation}
			>
				<Form>
					<FormContainer>
						<FieldInput
							name="student_name"
							title="Nome do estudante"
							placeholder="Digite o nome do estudante"
						/>
						<RegisterForm>
							<label htmlFor="student_document">CPF</label>
							<Field name="student_document">
								{({ field }: any) => (
									<MaskedInput
										{...field}
										type="text"
										id="student_document"
										mask={cpfMask}
										placeholder="Digite o CPF"
										className="text-input"
									/>
								)}
							</Field>
							<ErrorMessage name="student_document" component="span" />
						</RegisterForm>

						<FieldInput
							name="student_email"
							title="E-mail"
							placeholder="Digite o e-mail do estudante"
						/>
						<RegisterForm>
							<label htmlFor="student_phone">Celular</label>
							<Field name="student_phone">
								{({ field }: any) => (
									<MaskedInput
										{...field}
										type="text"
										id="student_phone"
										mask={phoneMask}
										placeholder="Digite o número de celular"
										className="text-input"
									/>
								)}
							</Field>
							<ErrorMessage name="student_phone" component="span" />
						</RegisterForm>

						<RegisterForm>
							<label htmlFor="student_phone">Estabelecimento vinculado</label>
							<Box
								background="white"
								width="500px"
								height="40px"
								onClick={onOpen}
								border="none"
								cursor="pointer"
								borderRadius="5px"
								display="flex"
								alignItems="center"
								fontSize="1.1rem"
								paddingX="10px"
								fontFamily='"Work Sans", sans-serif'
							>
								{!selectedNewWorkplace && workplace && workplace.company_name}
								{selectedNewWorkplace?.company_name}
								{!workplace && !selectedNewWorkplace && (
									<p>Sem estabelecimento vinculado</p>
								)}
							</Box>
						</RegisterForm>
					</FormContainer>

					<Flex direction='column'>
						<Button
							colorScheme="green"
							mt={10}
							w="500px"
							type="submit"
						>
							Salvar
						</Button>

					
					</Flex>
				</Form>
			</Formik>

			<SelectWorkplaceDrawer
				isOpen={isOpen}
				onClose={onClose}
				setSelectedNewWorkplace={setSelectedNewWorkplace}
			/>
		</>
	);
};

export default FormEditUser;
