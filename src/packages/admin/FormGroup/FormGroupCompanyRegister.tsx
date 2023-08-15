import { useState } from "react"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import RegisterForm from "../../../components/RegisterForm"
import { Box, FormContainer, Chip, ContainerChips, BackPage, BoxAddress } from "./styles"
import { IoIosArrowBack } from "react-icons/io"
import { ICompany } from "../../../types"
import ConfirmUserModal from "../../../components/modals/ConfirmUserModal"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { workplaceValidation } from "../../../validations"
import MaskedInput from "react-text-mask"
import { cepMask, cnpjMask } from "../../../utils/masks"
import FieldInput from "../../../components/Fields/FieldInput"
import FieldSelect from "../../../components/Fields/FieldSelect"

const FormGroupCompanyRegister: React.FC = () => {
	const [step, setStep] = useState<number>(1);
	const [isOpen, setOpen] = useState(false);
	const [isFormValid, setFormValid] = useState(false);
	const [courses] = useState([
		{ index: 15, name: 'Como treinar o seu dragão' },
		{ index: 457, name: 'Como aaaa o seu dragãoaaaaaaaaaaaaaaaaa' },
		{ index: 448, name: 'Como aaaa o seu dasdasd' },
		{ index: 459, name: 'Como aaaa o seu yyty' },
		{ index: 450, name: 'Como aaaa o seu kugb' },
	])
	const [selectedCourses, setSelectedCourses] = useState<any>([]);
	const [document, setDocument] = useState('');
	const [workplace, setWorkplace] = useState<ICompany | undefined>();


	const handleSelectedCourse = (index: number) => {
		selectedCourses.some((el: any) => (index === el))
			? setSelectedCourses([...selectedCourses.filter((course: any) => index !== course)])
			: setSelectedCourses([...selectedCourses, index])
	}


	const initialValuesEmpty = {
		company_name: undefined,
		company_contact: undefined,
		company_register: undefined,
		company_telephone: undefined,
		company_email: undefined,
		company_cep: undefined,
		company_street: undefined,
		company_district: undefined,
		company_address_number: undefined
	}

	const handleSetWorkplace = async (values: ICompany) => {
		console.log(values)
		setStep(2)
		setWorkplace({
			company_name: values.company_name,
			company_contact: values.company_contact,
			company_register: values.company_register,
			company_telephone: values.company_telephone,
			company_email: values.company_email,
			company_cep: values.company_cep,
			company_street: values.company_street,
			company_district: values.company_district,
			company_state: values.company_state,
			company_city: values.company_city,
			company_address_number: values.company_address_number
		})
		// await workplaceValidation
		// .isValid(values)
		// .then(valid => {
		// 	console.log(valid);
		// 	setFormValid(valid);
		// })
	}

	


	const handle = (index: number) => {
		const test = selectedCourses.some((el: number) => (index === el))
		return test;
	}

	return (
		<>
			{/* <ConfirmUserModal
				user={user}
				selectedCourses={selectedCourses}
				courses={courses}
				isOpen={isOpen}
				setOpen={setOpen}
			/> */}
		
			{
				step === 1 &&
				<Formik
				style={{ textAlign: 'right' }}
				onSubmit={handleSetWorkplace}
				initialValues={workplace || initialValuesEmpty}
				validationSchema={workplaceValidation}
				>
				<Form>
					<Box>
						<p>Dados da empresa</p>
						<FormContainer>
							<FieldInput 
								name="company_name"
								title="Nome da empresa"
								placeholder="Digite o nome da empresa"
							/>
						<RegisterForm>
							<label htmlFor="company_register">CNPJ</label>
							<Field name="company_register">
							 {
                  ({ field }: any) => <MaskedInput
                    {...field}
                    type="text"
										id="company_register"
                    mask={cnpjMask}
                    placeholder="Digite o CNPJ"
                    className="text-input"
                  />
                }
								</Field>
								<ErrorMessage 
								name="company_register"
								component="span"
							/>
						</RegisterForm>
						</FormContainer>
					</Box>
					<Box>
						<p>Contato</p>
						<FormContainer>
							<FieldInput 
								name="company_contact"
								title="Nome do responsável"
								placeholder="Digite o nome do responsáve"
							/>
							<FieldInput 
								name="company_email"
								title="E-mail do responsável"
								placeholder="Digite o e-mail do responsável"
							/>
							<FieldInput 
								name="company_telephone"
								title="Celular"
								placeholder="Digite o número de celular"
							/>
						</FormContainer>
					</Box>
					<Box>
						<p>Endereço</p>
						<FormContainer>
							<BoxAddress>
							<RegisterForm>
							<label htmlFor="company_cep">CEP</label>
							<Field name="company_cep">
							 {
                  ({ field }: any) => <MaskedInput
                    {...field}
                    type="text"
										id="company_cep"
                    mask={cepMask}
                    placeholder="Digite o CEP"
                    className="text-input"
                  />
                }
								</Field>
								<ErrorMessage 
								name="company_cep"
								component="span"
							/>
						</RegisterForm>
							<FieldSelect
								name="company_state" 
								title="UF"
								placeholder="UF"
							/>
							</BoxAddress>
							<BoxAddress>
							<FieldInput 
								name="company_street"
								title="Logradouro"
								placeholder="Digite o Logradouro"
							/>
							<FieldInput 
								name="company_address_number"
								title="Número"
								placeholder="Número"
							/>
							</BoxAddress>
							<FieldInput 
								name="company_city"
								title="Cidade"
								placeholder="Digite a cidade"
							/>
							<FieldInput 
								name="company_district"
								title="Bairro"
								placeholder="Digite o bairro"
							/>
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
		</>
	)
}

export default FormGroupCompanyRegister;