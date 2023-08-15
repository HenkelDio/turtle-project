import { useState } from "react"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import RegisterForm from "../../../components/RegisterForm"
import { Box, FormContainer, Chip, ContainerChips, BackPage, ContainerCompaniesChip } from "./styles"
import { IoIosArrowBack } from "react-icons/io"
import { IUserStudent } from "../../../types"
import useErrors from "../../../hooks/useErrors"
import formatPhone from "../../../utils/phoneFormat"
import isEmailValid from "../../../utils/emailFormat"
import ConfirmUserModal from "../../../components/modals/ConfirmUserModal"
import { formatDocument } from "../../../utils/documentFormat"

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
	const [user, setUser] = useState<IUserStudent>({
		student_company_id: 0,
		student_name: '',
		student_cpf: '',
		student_cellphone: '',
		student_email: '',
	});

	const {
		setError, removeError, getErrorMessageByFieldName, errors,
	} = useErrors();


	const handleSelectedCourse = (index: number) => {
		selectedCourses.some((el: any) => (index === el))
			? setSelectedCourses([...selectedCourses.filter((course: any) => index !== course)])
			: setSelectedCourses([...selectedCourses, index])
	}


	const handleSelectedWorkplace = (index: number) => {
		
			if(!selectedWorkplace.some((el: any) => (index === el))) {
				setSelectedWorkplace([index]);
			}

			console.log(selectedWorkplace);
	}

	const handleSetUser = (key: string, e: any) => {

		if (key === 'student_cellphone') {
			setUser((prevState: any) => ({
				...prevState,
				[key]: formatPhone(e.target.value)
			}));
		} else {
			setUser((prevState: any) => ({
				...prevState,
				[key]: e.target.value
			}));
		}

		// TODO melhorar forma de validar erros e ajustar código
		if (key === 'student_email' && !isEmailValid(e.target.value)) {
			setError({ field: 'student_email', message: 'E-mail inválido' })
		} else {
			removeError(key)
		}

		if (!e.target.value) {
			setError({ field: key, message: 'Campo obrigatório' })
		} else {
			removeError(key)
		}
	}

	const handleSetDocument = (e: any) => {
		if (!e.target.value) {
			// TODO refazer essa logica, impedir usuario de seguir
			setError({ field: 'student_cpf', message: "'CPF' inválido" })
		} else {
			removeError('student_cpf')
		}

		setUser((prevState: any) => ({
			...prevState,
			student_cpf:formatDocument(e.target.value)
		}));

		
	} 

	const isFormValid = (
		user.student_name &&
		user.student_cellphone &&
		user.student_email &&
		user.student_cpf &&
		errors.length === 0
	);

	const handle = (index: number) => {
		const test = selectedCourses.some((el: number) => (index === el))
		return test;
	}

	const handleWorkplaces = (index: number) => {
		const test = selectedWorkplace.some((el: number) => (index === el))
		return test;
	}


	return (
		<form
			style={{ textAlign: 'right' }}
		>
			<ConfirmUserModal
				user={user}
				selectedCourses={selectedCourses}
				courses={courses}
				isOpen={isOpen}
				setOpen={setOpen}
			/>

			{
				step === 1 &&
				<>
					<Box>
						<p>Dados pessoais</p>
						<Form>
							<RegisterForm error={getErrorMessageByFieldName('student_name')}>
								<label htmlFor="name">Nome completo</label>
								<Input
									name="name"
									type="text"
									placeholder="Digite o nome completo"
									value={user?.student_name}
									onChange={e => handleSetUser('student_name', e)}
								/>
							</RegisterForm>
							<RegisterForm error={getErrorMessageByFieldName('student_cpf')}>
								<label htmlFor="document">CPF</label>
								<Input
									name="document"
									type="text"
									placeholder="Digite aqui o CPF"
									value={user?.student_cpf}
									onChange={e => handleSetDocument(e)}
									maxLength={11}
								/>
							</RegisterForm>
						</Form>
					</Box>
					<Box>
						<p>Contato</p>
						<Form>
							<RegisterForm error={getErrorMessageByFieldName('student_email')}>
								<label htmlFor="email">E-mail</label>
								<Input
									name="email"
									type="email"
									placeholder="Digite o e-mail"
									value={user?.student_email}
									onChange={e => handleSetUser('student_email', e)}
								/>
							</RegisterForm>
							<RegisterForm error={getErrorMessageByFieldName('student_cellphone')}>
								<label htmlFor="phone">Celular</label>
								<Input
									name="phone"
									type="tel"
									placeholder="Digite aqui o número"
									value={user?.student_cellphone}
									onChange={e => handleSetUser('student_cellphone', e)}
									maxLength={15}
								/>
							</RegisterForm>
						</Form>
					</Box>
					<Button
						disabled={!isFormValid}
						onClick={() => setStep(2)}
					>
						Continuar
					</Button>
				</>
			}

			{
				step === 2 &&
				<>
				<BackPage
						onClick={() => setStep(1)}
				><IoIosArrowBack /></BackPage>
					<Box>
						<p>Selecione por qual empresa o usuário está se matriculando</p>
						<Form>
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
						</Form>
					</Box>
					<Button
						disabled={!isFormValid}
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
		</form>
	)
}

export default FormGroupStudentRegister;