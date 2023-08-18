import { useState } from "react"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import RegisterForm from "../../../components/RegisterForm"
import { Box, FormContainer, Chip, ContainerChips, BackPage, ContainerCompaniesChip } from "./styles"
import { IoIosArrowBack } from "react-icons/io"
import { IUserStudent } from "../../../types"
import { ErrorMessage, Field, Formik, Form } from "formik"
import FieldInput from "../../../components/Fields/FieldInput"
import MaskedInput from "react-text-mask"
import { cpfMask, phoneMask } from "../../../utils/masks"
import { studentValidation } from "../../../validations"
import ConfirmStudentModal from "../../../components/modals/ConfirmUserModal/ConfirmStudentModal"

const FormGroupStudentRegister: React.FC = () => {
	const [step, setStep] = useState<number>(1);
	const [isOpen, setOpen] = useState(false);
	const [selectedWorkplace, setSelectedWorkplace] = useState<any>([]);
	const [courses] = useState([
		{ index: 15, name: 'Como treinar o seu dragão' },
		{ index: 457, name: 'Como aaaa o seu dragãoaaaaaaaaaaaaaaaaa' },
		{ index: 448, name: 'Como aaaa o seu dasdasd' },
		{ index: 459, name: 'Como aaaa o seu yyty' },
		{ index: 450, name: 'Como aaaa o seu kugb' },
	]);
	const [workplaces] = useState([
		{ index: 15, name: 'Souza Treinamentos' },
		{ index: 457, name: 'Code&Code' },
		{ index: 448, name: 'Loja de Sapatos' },
	])
	const [selectedCourses, setSelectedCourses] = useState<any>([]);
	const [student, setStudent] = useState<IUserStudent | undefined>();

	const handleSelectedCourse = (index: number) => {
		selectedCourses.some((el: any) => (index === el))
			? setSelectedCourses([...selectedCourses.filter((course: any) => index !== course)])
			: setSelectedCourses([...selectedCourses, index])
	}

	const initialValuesEmpty = {
		student_name: undefined,
		student_email: undefined,
		student_cellphone: undefined,
		student_cpf: undefined
	}


	const handleSetStudent = (values: IUserStudent) => {
		console.log(values)
		setStep(2)
		setStudent({
			student_name: values.student_name,
			student_email: values.student_email,
			student_cellphone: values.student_cellphone,
			student_company_id: 4,
			student_cpf: values.student_cpf
		})
	}

	const handleSelectedWorkplace = (index: number) => {
		
			if(!selectedWorkplace.some((el: any) => (index === el))) {
				setSelectedWorkplace([index]);
			}

			console.log(selectedWorkplace);
	}

	const handle = (index: number) => {
		const test = selectedCourses.some((el: number) => (index === el))
		return test;
	}

	const handleWorkplaces = (index: number) => {
		const test = selectedWorkplace.some((el: number) => (index === el))
		return test;
	}

	return (
		<div
			style={{ textAlign: 'right' }}
		>
			{
				student &&
				<ConfirmStudentModal
					user={student}
					selectedCourses={selectedCourses}
					selectedWorkplace={selectedWorkplace}
					courses={courses}
					workplaces={workplaces}
					isOpen={isOpen}
					setOpen={setOpen}
				/>
			}

			{
				step === 1 &&
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
							<label htmlFor="student_cpf">CPF</label>
							<Field name="student_cpf">
								{
                  ({ field }: any) => <MaskedInput
                    {...field}
                    type="text"
										id="student_cpf"
                    mask={cpfMask}
                    placeholder="Digite o CPF"
                    className="text-input"
                  />
                }
								</Field>
								<ErrorMessage 
								name="student_cpf"
								component="span"
							/>
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
							/>
							<RegisterForm>
							<label htmlFor="student_cellphone">Celular</label>
							<Field name="student_cellphone">
								{
                  ({ field }: any) => <MaskedInput
                    {...field}
                    type="text"
										id="student_cellphone"
                    mask={phoneMask}
                    placeholder="Digite o número de celular"
                    className="text-input"
                  />
                }
								</Field>
								<ErrorMessage 
								name="student_cellphone"
								component="span"
							/>
							</RegisterForm>
						</FormContainer>
					</Box>
					<Button
						type="submit"
						disabled={false}
					>
						Continuar
					</Button>
					</Form>
				</Formik>
			}

			{
				step === 2 &&
				<>
				<BackPage
						onClick={() => setStep(1)}
				><IoIosArrowBack /></BackPage>
					<Box>
						<p>Selecione por qual empresa o usuário está se matriculando</p>
						<FormContainer>
							<Input placeholder="Pesquise pelo nome da empresa" />
							<ContainerCompaniesChip>
							{
								workplaces.map((course) => {
									return (
										<Chip
											key={course.index}
											select={
												handleWorkplaces(course.index) ? 'true': 'false'
											}
											onClick={() => handleSelectedWorkplace(course.index)}
										>
											{course.name}
										</Chip>
									)
								})
							}
						</ContainerCompaniesChip>
						</FormContainer>
					</Box>
					<Button
						onClick={() => setStep(3)}
					>
						Continuar
					</Button>
				</>
			}

			{
				step === 3 &&
				<>
					<BackPage
						onClick={() => setStep(2)}
					>
						<IoIosArrowBack />
					</BackPage>
					<Box>
						<h3>Selecione os cursos do usuário</h3>
						<ContainerChips>
							{
								courses.map((course) => {
									return (
										<Chip
											key={course.index}
											select={
												handle(course.index) ? 'true' : 'false'
											}
											onClick={() => handleSelectedCourse(course.index)}
										>
											{course.name}
										</Chip>
									)
								})
							}
						</ContainerChips>
					</Box>
					<Button
						disabled={false}
						type="button"
						onClick={() => setOpen(true)}
					>
						Salvar
					</Button>
				</>
			}
		</div>
	)
}

export default FormGroupStudentRegister;