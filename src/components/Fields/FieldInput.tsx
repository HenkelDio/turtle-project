import { ErrorMessage, Field } from "formik"
import RegisterForm from "../RegisterForm";
import { ICompany } from "../../types";

interface IProps {
	name: string,
	placeholder: string,
	title: string,
	maxLength?: number | undefined,
	value?: string,	
}

const FieldInput: React.FC<IProps> = ({ name, placeholder, title, maxLength }: IProps) => {
	return(
		<RegisterForm>
			<label htmlFor={name}>{title}</label>
			<Field name={name} placeholder={placeholder} maxLength={maxLength}></Field>
			<ErrorMessage 
				name={name}
				component="span"
			/>
		</RegisterForm>
	)
}

export default FieldInput;