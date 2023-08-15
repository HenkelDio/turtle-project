import { ErrorMessage, Field } from "formik"
import RegisterForm from "../RegisterForm";

interface IProps {
	name: string,
	placeholder: string,
	title: string,
	maxLength?: number | undefined,
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