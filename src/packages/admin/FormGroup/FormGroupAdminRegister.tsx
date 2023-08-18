import { useState } from "react"
import Button from "../../../components/Button"
import { Box, FormContainer } from "./styles"
import { IUserAdmin } from "../../../types"
import { Formik, Form } from "formik"
import FieldInput from "../../../components/Fields/FieldInput"
import { adminValidation } from "../../../validations"
import ConfirmAdminModal from "../../../components/modals/ConfirmUserModal/ConfirmAdminModal"

const FormGroupAdminRegister: React.FC = () => {
	const [isOpen, setOpen] = useState(false);
	const [admin, setAdmin] = useState<IUserAdmin | undefined>();

	const initialValuesEmpty = {
		admin_name: undefined,
		admin_email: undefined,
	}


	const handleSetAdmin = (values: IUserAdmin) => {
		console.log(values)
		setOpen(true)
		setAdmin({
			admin_name: values.admin_name,
			admin_email: values.admin_email,
		})
	}

	return (
		<div
			style={{ textAlign: 'right' }}
		>
			
				{
					admin &&
					<ConfirmAdminModal
						admin={admin}
						isOpen={isOpen}
						setOpen={setOpen}
					/>
				}

				<Formik
					onSubmit={handleSetAdmin}
					initialValues={admin || initialValuesEmpty}
					validationSchema={adminValidation}
				>
					<Form>
					<Box>
						<p>Principais dados</p>
						<FormContainer>
							<FieldInput 
								name="admin_name"
								title="Nome do administrador"
								placeholder="Digite o nome do administrador"
							/>
							<FieldInput 
								name="admin_email"
								title="E-mail"
								placeholder="Digite o e-mail do administrador"
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
		</div>
	)
}

export default FormGroupAdminRegister;