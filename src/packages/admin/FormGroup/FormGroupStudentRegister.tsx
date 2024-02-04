/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useMemo, useState } from "react";
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
import { ICourse, IUserStudent, IWorkplace } from "../../../types";
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
import {
	Card,
	CardHeader,
	Heading,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import CreateWorkplaceDrawer from "../../../components/CreateWorkplaceDrawer";
import { getCompanies } from "../../../services/workplaceService";
import { getAdminCourses } from "../../../services/coursesService";

const FormGroupStudentRegister: React.FC = () => {
	const [step, setStep] = useState<number>(1);
	const [isOpenModal, setOpen] = useState(false);
	const [selectedWorkplace, setSelectedWorkplace] = useState<IWorkplace[]>([]);
	const [documentAlreadyExists, setDocumentAlreadyExits] = useState(false);
	const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);
	const [isCreated, setCreated] = useState<boolean>(false);
	const [courses, setCourses] = useState<ICourse[]>([]);
	const toast = useToast();
	const [workplaces, setWorkplaces] = useState<IWorkplace[]>([]);
	const [selectedCourses, setSelectedCourses] = useState<any>([]);
	const [student, setStudent] = useState<IUserStudent | undefined>();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [searchTerm, setSearchTerm] = useState("");

	const filteredCards = useMemo(
		() =>
			workplaces?.filter((workplace: IWorkplace) =>
				workplace.company_name.toLowerCase().includes(searchTerm.toLowerCase()),
			),
		[workplaces, searchTerm],
	);

	const handleSelectedCourse = (course: ICourse) => {
		selectedCourses.some((el: ICourse) => course.course_id === el.course_id)
			? setSelectedCourses([
					...selectedCourses.filter((item: ICourse) => course.course_id !== item.course_id),
				])
			: setSelectedCourses([...selectedCourses, course]);
	};

	function openDrawer() {
		setStudent((prevState: any) => (
			{
				...prevState,
				courses_id: selectedCourses
			}
		));
		setOpen(true)
	}

	const initialValuesEmpty = {
		student_name: undefined,
		student_email: undefined,
		student_cellphone: undefined,
		student_document: undefined,
	};

	function selectNoWorkplace() {
		setSelectedWorkplace([]);
	}

	function goToStepThree() {
		setStep(3)
		setStudent((prevState: any) => (
			{
				...prevState,
				student_company_id: selectedWorkplace[0].company_register 
			}
		));
	}

	const handleSetStudent = (values: IUserStudent) => {
		if (!documentAlreadyExists && !emailAlreadyExists ) {
			console.log( 'selected', selectedWorkplace)

			setStep(2);
			setStudent({
				student_name: values.student_name,
				student_email: values.student_email,
				student_phone: values.student_phone,
				student_company_id: '',
				student_document: values.student_document,
				courses_id: [''],
			});
		}
	};

	function compareByCompanyName(a: IWorkplace, b: IWorkplace) {
		const companyA = a.company_name.toUpperCase();
		const companyB = b.company_name.toUpperCase();

		let comparison = 0;
		if (companyA > companyB) {
			comparison = 1;
		} else if (companyA < companyB) {
			comparison = -1;
		}
		return comparison;
	}

	useEffect(() => {
		async function getWorkplaces() {
			const response = await getCompanies();
			setCreated(false);
			if (response.data) {
				response.data.sort(compareByCompanyName);
				setWorkplaces(response.data);
			} else {
				toast({
					title: "Erro",
					description: "Erro ao carregar estabelecimentos",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}
		}
		getWorkplaces();
	}, [isCreated, toast]);

	useEffect(() => {
		async function getCourses() {
			const response = await getAdminCourses();
			if (response.data) {
				setCourses(response.data);
			} else {
				toast({
					title: "Erro",
					description: "Erro ao carregar cursos",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}
		}
		getCourses();
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

	const handleSelectedWorkplace = (workplace: IWorkplace) => {
		if (!selectedWorkplace.some((el: IWorkplace) => workplace.company_register === el.company_register)) {
			setSelectedWorkplace([workplace]);
		}

		console.log(selectedWorkplace);
	};

	const handle = (course: ICourse) => {
		const test = selectedCourses.some((el: ICourse) => course.course_id === el.course_id);
		return test;
	};

	const handleWorkplaces = (workplace: IWorkplace) => {
		const test = selectedWorkplace.some((el: IWorkplace) => workplace.company_register === el.company_register);
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
							<Input
								placeholder="Pesquise pelo nome da empresa"
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
							<ContainerCompaniesChip>
								<Card
									variant={selectedWorkplace.length === 0 ? "filled" : 'outline'}
									cursor="pointer"
									p={5}
									textAlign="left"
									onClick={() => selectNoWorkplace()}
								>
									<Heading size="md">
										Estudante sem vinculo com estabelecimento
									</Heading>
								</Card>
								{workplaces &&
									filteredCards.map((workplace) => {
										return (
											<Card
												variant={
													handleWorkplaces(workplace)
														? "filled"
														: "outline"
												}
												cursor="pointer"
												p={5}
												textAlign="left"
												key={workplace.company_register}
												onClick={() =>
													handleSelectedWorkplace(
														workplace,
													)
												}
											>
												<Heading size="md"> {workplace.company_name}</Heading>
												<p style={{ textAlign: "left" }}>
													{workplace.company_register}
												</p>
											</Card>
										);
									})}
							</ContainerCompaniesChip>
							<p>
								ou <b onClick={onOpen}>adicione um novo estabelecimento</b>
							</p>
						</FormContainer>
					</Box>
					<Button onClick={() => goToStepThree()}>Continuar</Button>
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
										key={course.course_id}
										select={handle(course) ? "true" : "false"}
										onClick={() => handleSelectedCourse(course)}
									>
										{course.course_title}
									</Chip>
								);
							})}
						</ContainerChips>
					</Box>
					<Button disabled={false} type="button" onClick={() => openDrawer()}>
						Salvar
					</Button>
				</>
			)}

			<CreateWorkplaceDrawer
				onClose={onClose}
				isOpen={isOpen}
				setCreated={setCreated}
			/>
		</div>
	);
};

export default FormGroupStudentRegister;
