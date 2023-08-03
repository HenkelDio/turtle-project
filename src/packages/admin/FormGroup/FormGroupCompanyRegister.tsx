import { useState } from "react"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import RegisterForm from "../../../components/RegisterForm"
import { Box, Form, Chip, ContainerChips, BackPage } from "./styles"
import { IoIosArrowBack } from "react-icons/io"
import { useMutation, useQueryClient } from "react-query"
import { addStudentUser } from "../../../services"
import { IUser } from "../../../types"

const FormGroupCompanyRegister: React.FC = () => {
	const [step, setStep] = useState<number>(1);
	const [courses] = useState([
		{ index: 15, name: 'Como treinar o seu dragão' },
		{ index: 457, name: 'Como aaaa o seu dragão' },
		{ index: 488, name: 'Como trevvvvinar o seu dragão' },
		{ index: 789, name: 'Como treivvvedsadnar o seu dragão' },
		{ index: 788, name: 'Como treivvvedsadnar o seu dragão' },
		{ index: 755, name: 'Como treivvvedsadnar o seu dragão' },
		{ index: 782, name: 'Como treivvvedsadnar o seu dragão' },
	])
	const [selectedCourses, setSelectedCourses] = useState<any>([]);
	const [user, setUser] = useState<IUser>({
		user_name: '',
		user_company_id: 0,
		user_email: '',
		user_register: '',
		user_telephone: ''
	});

	const queryClient = useQueryClient();

	const handleSelectedCourse = (index: number) => {
		if(!selectedCourses.some((el: number) => el === index)) {
		setSelectedCourses((prevState: any) => [...prevState, index]);	
		}
	}

	const { mutate, isLoading, status } = useMutation(['user'], addStudentUser, {
		onSuccess: data => {
			 console.log(status);
			 const message = status
			 alert(message)
		},
			onError: () => {
						alert("there was an error")
		},
			onSettled: () => {
					queryClient.invalidateQueries('create')
		}
		});

		const handleSetUser = (key: string, value: string | number) => {
			setUser((prevState: any) => ({
				...prevState,
				[key]: value
			}));	
		}

		const onSubmit = (e: any) => {
			e.preventDefault();
			const data = {
				"user_company_id": 4,
				user
			}

			 console.log(data);
		}

	return (
		<form
			onSubmit={(e) => onSubmit(e)}
			style={{ textAlign: 'right' }}
		>
			{
				step === 1 &&
				<>
					<Box>
						<h2>Dados da empresa</h2>
						<Divider />
						<Form>
							<RegisterForm error="">
								<label htmlFor="name">Nome da empresa</label>
								<Input 
								name="name"
								type="text"
								placeholder="Digite o nome da empresa"
								value={user?.user_name}
								onChange={e => handleSetUser('user_name', e.target.value)}
								/>
							</RegisterForm>
							<RegisterForm error="">
								<label htmlFor="document">CNPJ</label>
								<Input 
									name="document" 
									type="text"
									placeholder="Digite aqui o CNPJ" 
									value={user?.user_register}
									onChange={e => handleSetUser('user_register', e.target.value)}
								/>
							</RegisterForm>
						</Form>
					</Box>
					<Box>
						<h2>Contato</h2>
						<Divider />
						<Form>
						<RegisterForm error="">
								<label htmlFor="contact">Nome do contato responsável</label>
								<Input 
									name="contact" 
									type="text" 
									placeholder="Digite o nome do contato do responsável"
									value={user?.user_email}
									onChange={e => handleSetUser('user_email', e.target.value)}
									/>
							</RegisterForm>
							<RegisterForm error="">
								<label htmlFor="email">E-mail do responsável</label>
								<Input 
									name="email" 
									type="email" 
									placeholder="Digite o e-mail do responsável"
									value={user?.user_email}
									onChange={e => handleSetUser('user_email', e.target.value)}
									/>
							</RegisterForm>
							<RegisterForm error="">
								<label htmlFor="phone">Telefone</label>
								<Input 
									name="phone"
									type="tel" 
									placeholder="Digite aqui o número" 
									value={user?.user_telephone}
									onChange={e => handleSetUser('user_telephone', e.target.value)}
									/>
							</RegisterForm>
						</Form>
					</Box>
					<Box>
						<h2>Endereço</h2>
						<Divider />
						<Form>
						<RegisterForm error="">
								<label htmlFor="cep">CEP</label>
								<Input 
									name="cep" 
									type="text" 
									placeholder="Digite o CEP"
									value={user?.user_email}
									onChange={e => handleSetUser('user_email', e.target.value)}
									/>
							</RegisterForm>
							<RegisterForm error="">
								<label htmlFor="email">E-mail do responsável</label>
								<Input 
									name="email" 
									type="email" 
									placeholder="Digite o e-mail do responsável"
									value={user?.user_email}
									onChange={e => handleSetUser('user_email', e.target.value)}
									/>
							</RegisterForm>
							<RegisterForm error="">
								<label htmlFor="phone">Telefone</label>
								<Input 
									name="phone"
									type="tel" 
									placeholder="Digite aqui o número" 
									value={user?.user_telephone}
									onChange={e => handleSetUser('user_telephone', e.target.value)}
									/>
							</RegisterForm>
						</Form>
					</Box>
					<Button
						disabled={false}
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
						<h2>Selecione os cursos</h2>
						<Divider />
						<ContainerChips>
							{
								courses.map((course) => {
									return (
										<Chip
											key={course.index}
											onClick={() => handleSelectedCourse(course.index)}
										>
											{course.name}
										</Chip>
									)
								})
							}
						</ContainerChips>
					</Box>
					<Box>
						<h2>Cursos selecionados</h2>
						<Divider />
						<ContainerChips>
							{
								selectedCourses?.map((course: any) => {
									return (
										<Chip 
										key={course.index}
										>
											{
												courses.filter((el) => el.index === course)[0].name
											}
										</Chip>
									)
								})
							}
						</ContainerChips>
					</Box>
					<Button
						disabled={false}
						type="submit"
					>
						Salvar
					</Button>
				</>
			}
		</form>
	)
}

export default FormGroupCompanyRegister;