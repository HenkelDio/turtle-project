/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormContainer } from "../../packages/admin/FormGroup/styles";
import FieldInput from "../Fields/FieldInput";
import RegisterForm from "../RegisterForm";
import MaskedInput from "react-text-mask";
import { studentValidation } from "../../validations";
import { cpfMask, phoneMask } from "../../utils/masks";
import { Box, useDisclosure } from "@chakra-ui/react";
import SelectWorkplaceDrawer from "../SelectWorkplaceDrawer";
import { useEffect, useState } from "react";
import { IUpdateStudent, IUserStudent, IWorkplace } from "../../types";

interface IProps {
	student: IUserStudent | undefined,
	workplace: IWorkplace | undefined,
	setNewData: IUpdateStudent
}

const FormEditUser: React.FC<IProps> = ({ student, workplace }: IProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedNewWorkplace, setSelectedNewWorkplace] = useState<IWorkplace | undefined>();
	const [inputChanges, setInputChanges] = useState(0);

	function saveEditUser(values: any) {
		console.log(values);
	}

	useEffect(() => {
		console.log(student)
	}, [student])

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
							onBlur={() => setInputChanges(prevState => prevState + 1)}
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
								{!workplace && !selectedNewWorkplace && <p>Sem estabelecimento vinculado</p>}
							</Box>
						</RegisterForm>
					</FormContainer>
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
