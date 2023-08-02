import { useState } from "react"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import RegisterForm from "../../../components/RegisterForm"
import { Box, Form, Divider, Chip, ContainerChips, BackPage } from "./styles"
import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"
import { useMutation, useQueryClient } from "react-query"
import { addStudentUser } from "../../../services"
import { GiDatabase } from "react-icons/gi"

const FormGroupStudentRegister: React.FC = () => {
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
	const [name, setName] = useState<any>();
	const [document, setDocument] = useState<any>();
	const [phone, setPhone] = useState<any>();
	const [email, setEmail] = useState<any>();

	const handleSelectedCourse = (index: number) => {
		if(!selectedCourses.some((el: number) => el === index)) {
		setSelectedCourses((prevState: any) => [...prevState, index]);	
	}
	}

	const queryClient = useQueryClient()

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


		const onSubmit = (e) => {
			e.preventDefault();
			const data = {
				"user_company_id": 4,
				"user_name": name,
				"user_register": document,
				"user_telephone": phone,
				"user_email": email,
			}

			 mutate(data);
		}

	return (
		<form
			onSubmit={(e) => onSubmit(e)}
			style={{ textAlign: 'right' }}
		>
			{
				step === 1 &&
				<>
					<BackPage>
						<Link to='/admin/users'><IoIosArrowBack /></Link>
					</BackPage>
					<Box>
						<h2>Dados<br />pessoais</h2>
						<Divider />
						<Form>
							<RegisterForm error="">
								<label htmlFor="name">Nome completo</label>
								<Input 
								name="name" 
								placeholder="Digite o nome completo" 
								onChange={e => setName(e.target.value)}
								/>
							</RegisterForm>
							<RegisterForm error="">
								<label htmlFor="name">CPF</label>
								<Input 
									name="name" 
									placeholder="Digite aqui o CPF" 
									onChange={e => setDocument(e.target.value)}
								/>
							</RegisterForm>
						</Form>
					</Box>
					<Box>
						<h2>Contato</h2>
						<Divider />
						<Form>
							<RegisterForm error="">
								<label htmlFor="name">E-mail</label>
								<Input name="name" type="email" placeholder="Digite o e-mail" />
							</RegisterForm>
							<RegisterForm error="">
								<label htmlFor="name">Celular</label>
								<Input 
									name="name" 
									placeholder="Digite aqui o número" 
									onChange={e => setPhone(e.target.value)}
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

export default FormGroupStudentRegister;