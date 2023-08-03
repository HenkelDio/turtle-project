import { useState } from "react"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import RegisterForm from "../../../components/RegisterForm"
import { Box, Form, Chip, ContainerChips, BackPage, BoxAddress } from "./styles"
import { IoIosArrowBack } from "react-icons/io"
import { ICompany } from "../../../types"
import useErrors from "../../../hooks/useErrors"
import formatPhone from "../../../utils/phoneFormat"
import isEmailValid from "../../../utils/emailFormat"
import ConfirmUserModal from "../../../components/modals/ConfirmUserModal"

const FormGroupCompanyRegister: React.FC = () => {
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
	const [user, setUser] = useState<ICompany>({
		company_name: '',
		company_address: {
			cep: '',
			street: '',
			number: '',
			district: '',
		},
		company_contact: '',
		company_register: '',
		company_telephone: '',
		company_email: '',
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
		user.company_address.cep &&
		user.company_address.district &&
		user.company_address.number &&
		user.company_address.street &&
		user.company_contact &&
		user.company_email &&
		user.company_name &&
		user.company_register &&
		user.company_telephone &&
		errors.length === 0
	);

	const onSubmit = (e: any) => {
		e.preventDefault();
		const data = {
			"user_company_id": 4,
			"user_email": user.user_email,
			"user_name": user.user_name,
			"user_register": user.user_register,
			"user_telephone": user.user_telephone.replace(/\D/g, '')
		}

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
							<RegisterForm error={getErrorMessageByFieldName('company_name')}>
								<label htmlFor="name">Nome da empresa</label>
								<Input
									name="name"
									type="text"
									placeholder="Digite o nome da empresa"
									value={user?.company_name}
									onChange={e => handleSetUser('company_name', e)}
								/>
							</RegisterForm>
							<RegisterForm error={getErrorMessageByFieldName('company_register')}>
								<label htmlFor="document">CNPJ</label>
								<Input
									name="document"
									type="text"
									placeholder="Digite aqui o CNPJ"
									value={user?.company_register}
									onChange={e => handleSetUser('company_register', e)}
								/>
							</RegisterForm>
						</Form>
					</Box>
					<Box>
						<p>Contato</p>
						<Form>
						<RegisterForm error={getErrorMessageByFieldName('company_contact')}>
								<label htmlFor="contact_name">Nome do responsável</label>
								<Input
									name="contact_name"
									type="text"
									placeholder="Digite o nome do responsável"
									value={user?.company_contact}
									onChange={e => handleSetUser('company_contact', e)}
								/>
							</RegisterForm>
							<RegisterForm error={getErrorMessageByFieldName('company_email')}>
								<label htmlFor="email">E-mail do responsável</label>
								<Input
									name="email"
									type="email"
									placeholder="Digite o e-mail do responsável"
									value={user?.company_email}
									onChange={e => handleSetUser('company_email', e)}
								/>
							</RegisterForm>
							<RegisterForm error={getErrorMessageByFieldName('company_telephone')}>
								<label htmlFor="phone">Celular</label>
								<Input
									name="phone"
									type="tel"
									placeholder="Digite aqui o número"
									value={user?.company_telephone}
									onChange={e => handleSetUser('company_telephone', e)}
									maxLength={15}
								/>
							</RegisterForm>
						</Form>
					</Box>
					<Box>
						<p>Endereço</p>
						<Form>
						<RegisterForm error={getErrorMessageByFieldName('company_address.cep')}>
								<label htmlFor="cep">CEP</label>
								<Input
									name="cep"
									type="text"
									placeholder="Digite o CEP"
									value={user?.company_address.cep}
									onChange={e => handleSetUser('company_address.cep', e)}
								/>
							</RegisterForm>
							<BoxAddress>
							<RegisterForm error={getErrorMessageByFieldName('company_address.street')}>
								<label htmlFor="street">Logradouro</label>
								<Input
									name="street"
									type="text"
									placeholder="Digite o Logradouro"
									value={user?.company_address.street}
									onChange={e => handleSetUser('company_address.street', e)}
								/>
							</RegisterForm>
							<RegisterForm error={getErrorMessageByFieldName('company_address.number')}>
								<label htmlFor="number">Número</label>
								<Input
									name="number"
									type="string"
									placeholder="Número"
									value={user?.company_address.number}
									onChange={e => handleSetUser('company_address.number', e)}
								/>
							</RegisterForm>
							</BoxAddress>
							<RegisterForm error={getErrorMessageByFieldName('company_address.district')}>
								<label htmlFor="district">Bairro</label>
								<Input
									name="district"
									type="text"
									placeholder="Digite o bairro"
									value={user?.company_address.district}
									onChange={e => handleSetUser('company_address.district', e)}
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

export default FormGroupCompanyRegister;