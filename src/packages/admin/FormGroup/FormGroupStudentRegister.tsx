/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import RegisterForm from "../../../components/RegisterForm";
import {
	Box,
	FormContainer,
	Chip,
	ContainerChips,
	BackPage,
	ContainerCompaniesChip,
} from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { IUserStudent, IWorkplace } from "../../../types";
import { ErrorMessage, Field, Formik, Form } from "formik";
import FieldInput from "../../../components/Fields/FieldInput";
import MaskedInput from "react-text-mask";
import { cpfMask, phoneMask } from "../../../utils/masks";
import { studentValidation } from "../../../validations";
import ConfirmStudentModal from "../../../components/modals/ConfirmUserModal/ConfirmStudentModal";
import {
	verifyIfDocumentAlreadyExists,
	verifyIfEmailAlreadyExists,
} from "../../../services/usersService";
import { useDisclosure, useToast } from "@chakra-ui/react";
import CreateWorkplaceDrawer from "../../../components/CreateWorkplaceDrawer";
import { getCompanies } from "../../../services/workplaceService";

const FormGroupStudentRegister: React.FC = () => {
	const [step, setStep] = useState<number>(1);
	const [isOpenModal, setOpen] = useState(false);
	const [selectedWorkplace, setSelectedWorkplace] = useState<any>([]);
	const [documentAlreadyExists, setDocumentAlreadyExits] = useState(false);
	const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);
	const toast = useToast();
	const [courses] = useState([
		{ index: 1, name: "Como treinar o seu dragão" },
		{ index: 457, name: "Como aaaa o seu dragãoaaaaaaaaaaaaaaaaa" },
		{ index: 448, name: "Como aaaa o seu dasdasd" },
		{ index: 459, name: "Como aaaa o seu yyty" },
		{ index: 450, name: "Como aaaa o seu kugb" },
	]);
	const [workplaces, setWorkplaces] = useState<IWorkplace[]>()
	const [selectedCourses, setSelectedCourses] = useState<any>([]);
	const [student, setStudent] = useState<IUserStudent | undefined>();
	const { isOpen, onOpen, onClose } = useDisclosure()

	const handleSelectedCourse = (index: number) => {
		selectedCourses.some((el: any) => index === el)
			? setSelectedCourses([
					...selectedCourses.filter((course: any) => index !== course),
				])
			: setSelectedCourses([...selectedCourses, index]);
	};

	const initialValuesEmpty = {
		student_name: undefined,
		student_email: undefined,
		student_cellphone: undefined,
		student_document: undefined,
	};

	const handleSetStudent = (values: IUserStudent) => {
		if (!documentAlreadyExists && !emailAlreadyExists) {
			setStep(2);
			setStudent({
				student_name: values.student_name,
				student_email: values.student_email,
				student_phone: values.student_phone,
				student_company_id: selectedWorkplace,
				student_document: values.student_document,
				courses_id: selectedCourses,
			});
		}
	};



	useEffect(() => {
		getCompanies()
    .then((response) => {
      if (response.data) {
        setWorkplaces(response.data);
      } else {
        toast({
          title: 'Erro',
          description: 'Erro ao carregar estabelecimentos',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    })
    .catch((error) => {
      console.error('Erro ao obter estabelecimentos', error);
			toast({
				title: 'Erro',
				description: 'Erro ao carregar estabelecimentos',
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
    });
	}, []); 

	const checkIfDocumentAlreadyExists = async (document: string) => {
		if (document.length < 14) {
			setDocumentAlreadyExits(false);
		}

		if (document.length === 14) {
			const formattedDocument = document.replace(/\D/g, "");

			const response = await verifyIfDocumentAlreadyExists(formattedDocument);

			if (response.err) {
				toast({
					title: "Erro.",
					description: "Não foi possível validar o e-mail.",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}

			if (response.data.found) {
				setDocumentAlreadyExits(true);
			} else {
				setDocumentAlreadyExits(false);
			}
		}
	};

	const checkIfEmailAlreadyExists = async (email: string) => {
		if (email.length === 0) {
			setEmailAlreadyExists(false);
		}

		const response = await verifyIfEmailAlreadyExists(email);

		if (response.err) {
			toast({
				title: "Erro.",
				description: "Não foi possível validar o e-mail.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}

		if (response.data.found) {
			setEmailAlreadyExists(true);
		} else {
			setEmailAlreadyExists(false);
		}
	};

	const handleSelectedWorkplace = (index: number) => {
		if (!selectedWorkplace.some((el: any) => index === el)) {
			setSelectedWorkplace([index]);
		}

		console.log(selectedWorkplace);
	};

	const handle = (index: number) => {
		const test = selectedCourses.some((el: number) => index === el);
		return test;
	};

	const handleWorkplaces = (index: number) => {
		const test = selectedWorkplace.some((el: number) => index === el);
		return test;
	};

	return (
		<div style={{ textAlign: "right" }}>
			{student && (
				<ConfirmStudentModal
					user={student}
					selectedCourses={selectedCourses}
					selectedWorkplace={selectedWorkplace}
					courses={courses}
					workplaces={workplaces}
					isOpen={isOpenModal}
					setOpen={setOpen}
				/>
			)}

			{step === 1 && (
				<Formik
					onSubmit={handleSetStudent}
					initialValues={student || initialValuesEmpty}
					validationSchema={studentValidation}
				>
					<Form>
						<Box>
							<p>Dados pessoais</p>
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
												onBlur={(e) =>
													checkIfDocumentAlreadyExists(e.target.value)
												}
												className="text-input"
											/>
										)}
									</Field>
									<ErrorMessage name="student_document" component="span" />
									{documentAlreadyExists && (
										<Box as="span" style={{ margin: 0 }}>
											Esse CPF foi encontrado.
										</Box>
									)}
								</RegisterForm>
							</FormContainer>
						</Box>
						<Box>
							<p>Contato</p>
							<FormContainer>
								<FieldInput
									name="student_email"
									title="E-mail"
									placeholder="Digite o e-mail do estudante"
									onBlur={(e) => checkIfEmailAlreadyExists(e.target.value)}
								/>
								<RegisterForm>
									{emailAlreadyExists && (
										<Box as="span" style={{ margin: 0 }}>
											Esse e-mail já foi usado.
										</Box>
									)}
								</RegisterForm>

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
							</FormContainer>
						</Box>
						<Button type="submit" disabled={false}>
							Continuar
						</Button>
					</Form>
				</Formik>
			)}

			{step === 2 && (
				<>
					<BackPage onClick={() => setStep(1)}>
						<IoIosArrowBack />
					</BackPage>
					<Box>
						<p>Selecione por qual empresa o usuário está se matriculando</p>
						<FormContainer>
							<Input placeholder="Pesquise pelo nome da empresa" />
							<ContainerCompaniesChip>
								{workplaces && workplaces.map((workplace, index) => {
									return (
										<Chip
											key={workplace.company_register}
											select={handleWorkplaces(Number(workplace.company_register)) ? "true" : "false"}
											onClick={() => handleSelectedWorkplace(Number(workplace.company_register))}
										>
											{workplace.company_name}
										</Chip>
									);
								})}
							</ContainerCompaniesChip>
							<p>ou <span onClick={onOpen}>adicione um novo estabelecimento</span></p>
						</FormContainer>
					</Box>
					<Button onClick={() => setStep(3)}>Continuar</Button>
				</>
			)}

			{step === 3 && (
				<>
					<BackPage onClick={() => setStep(2)}>
						<IoIosArrowBack />
					</BackPage>
					<Box>
						<h3>Selecione os cursos do usuário</h3>
						<ContainerChips>
							{courses.map((course) => {
								return (
									<Chip
										key={course.index}
										select={handle(course.index) ? "true" : "false"}
										onClick={() => handleSelectedCourse(course.index)}
									>
										{course.name}
									</Chip>
								);
							})}
						</ContainerChips>
					</Box>
					<Button disabled={false} type="button" onClick={() => setOpen(true)}>
						Salvar
					</Button>
				</>
			)}

			<CreateWorkplaceDrawer onClose={onClose} isOpen={isOpen} />
		</div>
	);
};

export default FormGroupStudentRegister;
