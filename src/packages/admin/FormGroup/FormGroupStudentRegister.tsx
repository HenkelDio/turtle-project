import { useState } from "react"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import RegisterForm from "../../../components/RegisterForm"
import { Box, Form, Chip, ContainerChips, BackPage } from "./styles"
import { IoIosArrowBack } from "react-icons/io"
import { useMutation, useQueryClient } from "react-query"
import { addStudentUser } from "../../../services"
import { IUser } from "../../../types"
import useErrors from "../../../hooks/useErrors"
import formatPhone from "../../../utils/phoneFormat"
import isEmailValid from "../../../utils/emailFormat"
import ConfirmUserModal from "../../../components/modals/ConfirmUserModal"

const FormGroupStudentRegister: React.FC = () => {
	const [step, setStep] = useState<number>(1);
	const [isOpen, setOpen] = useState(false);
	const [selected, setSelected] = useState<any>();
	const [courses] = useState([
		{ index: 15, name: 'Como treinar o seu dragão' },
		{ index: 457, name: 'Como aaaa o seu dragãoaaaaaaaaaaaaaaaaa' },
		{ index: 448, name: 'Como aaaa o seu dasdasd' },
		{ index: 459, name: 'Como aaaa o seu yyty' },
		{ index: 450, name: 'Como aaaa o seu kugb' },
	])
	const [selectedCourses, setSelectedCourses] = useState<any>([]);
	const [user, setUser] = useState<IUser>({
		user_name: '',
		user_company_id: 0,
		user_email: '',
		user_register: '',
		user_telephone: ''
	});

	const {
		setError, removeError, getErrorMessageByFieldName, errors,
	} = useErrors();


	const handleSelectedCourse = (index: number) => {
		selectedCourses.some((el: any) => (index === el))
			? setSelectedCourses([...selectedCourses.filter((course: any) => index !== course)])
			: setSelectedCourses([...selectedCourses, index])
	}
	const handleSetUser = (key: string, e: any) => {

		if (key === 'user_telephone') {
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
		if (key === 'user_email' && !isEmailValid(e.target.value)) {
			setError({ field: 'user_email', message: 'E-mail inválido' })
		} else {
			removeError(key)
		}

		if (!e.target.value) {
			setError({ field: key, message: 'Campo obrigatório' })
		} else {
			removeError(key)
		}
	}

	const isFormValid = (
		user.user_email &&
		user.user_name &&
		user.user_register &&
		user.user_telephone &&
		errors.length === 0
	);

	const onSubmit = (e: any) => {
		e.preventDefault();
		

		console.log(data);
	}

	const handle = (index: number) => {
		const test = selectedCourses.some((el: number) => (index === el))
		return test;
	}


	return (
		<form
			onSubmit={(e) => onSubmit(e)}
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
							<RegisterForm error={getErrorMessageByFieldName('user_name')}>
								<label htmlFor="name">Nome completo</label>
								<Input
									name="name"
									type="text"
									placeholder="Digite o nome completo"
									value={user?.user_name}
									onChange={e => handleSetUser('user_name', e)}
								/>
							</RegisterForm>
							<RegisterForm error={getErrorMessageByFieldName('user_register')}>
								<label htmlFor="document">CPF</label>
								<Input
									name="document"
									type="text"
									placeholder="Digite aqui o CPF"
									value={user?.user_register}
									onChange={e => handleSetUser('user_register', e)}
								/>
							</RegisterForm>
						</Form>
					</Box>
					<Box>
						<p>Contato</p>
						<Form>
							<RegisterForm error={getErrorMessageByFieldName('user_email')}>
								<label htmlFor="email">E-mail</label>
								<Input
									name="email"
									type="email"
									placeholder="Digite o e-mail"
									value={user?.user_email}
									onChange={e => handleSetUser('user_email', e)}
								/>
							</RegisterForm>
							<RegisterForm error={getErrorMessageByFieldName('user_telephone')}>
								<label htmlFor="phone">Celular</label>
								<Input
									name="phone"
									type="tel"
									placeholder="Digite aqui o número"
									value={user?.user_telephone}
									onChange={e => handleSetUser('user_telephone', e)}
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