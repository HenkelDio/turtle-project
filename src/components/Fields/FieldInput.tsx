import { ErrorMessage, Field } from "formik";
import RegisterForm from "../RegisterForm";

interface IProps {
	name: string;
	placeholder: string;
	title: string;
	maxLength?: number | undefined;
	value?: string;
	onBlur?: (e: any) => Promise<void>
}

const FieldInput: React.FC<IProps> = ({
	name,
	placeholder,
	title,
	maxLength,
	onBlur
}: IProps) => {
	return (
		<RegisterForm>
			<label htmlFor={name}>{title}</label>
			<Field
				name={name}
				placeholder={placeholder}
				maxLength={maxLength}
				onBlur={onBlur}
			></Field>
			<ErrorMessage name={name} component="span" />
		</RegisterForm>
	);
};

export default FieldInput;
