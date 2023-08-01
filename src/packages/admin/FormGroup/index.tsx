import { useEffect, useState } from "react"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import RegisterForm from "../../../components/RegisterForm"
import { Box, Form, Divider, Chip, ContainerChips, BackPage } from "./styles"
import { IoIosArrowBack } from "react-icons/io"

const FormGroup: React.FC = () => {
	const [step, setStep] = useState<number>(1);
	const [courses] = useState([
		{ index: 1, name: 'Como treinar o seu dragão' },
		{ index: 2, name: 'Como aaaa o seu dragão' },
		{ index: 3, name: 'Como trevvvvinar o seu dragão' },
		{ index: 4, name: 'Como treivvvedsadnar o seu dragão' },
	])
	const [selectedCourses, setSelectedCourses] = useState<any>([]);

	const handleSelectedCourse = (index: number) => {
		setSelectedCourses(prevState => [...prevState, index]);
	}

	return (
		<form
			style={{ textAlign: 'right' }}
		>
			{
				step === 1 &&
				<>
					<BackPage
						onClick={() => console.log('oi')}
					>
						<IoIosArrowBack />
					</BackPage>
					<Box>
						<h2>Dados<br />pessoais</h2>
						<Divider />
						<Form>
							<RegisterForm error="">
								<label htmlFor="name">Nome completo</label>
								<Input name="name" placeholder="Digite o nome completo" />
							</RegisterForm>
							<RegisterForm error="">
								<label htmlFor="name">CPF</label>
								<Input name="name" placeholder="Digite aqui o CPF" />
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
								<Input name="name" placeholder="Digite aqui o número" />
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
					>
						Continuar
					</Button>
				</>
			}
			{
				selectedCourses?.map((course) => {
					console.log(courses.filter((el) => el.index === course)[0].name);
				})
			}
			{
				selectedCourses?.map((course) => {
					return (
						<Chip >
							{
								courses.filter((el) => el.index === course)[0].name
							}
						</Chip>
					)
				})
			}
		</form>
	)
}

export default FormGroup;