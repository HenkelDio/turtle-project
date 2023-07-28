import { FieldContainer } from "./styles"

interface IProps {
	title: string,
	content: string,
}

const Field: React.FC<IProps> = ({ title, content }: IProps) => {
	return (
		<FieldContainer>
			<label>{title}</label>
			<p>{content}</p>
		</FieldContainer>
	)
}

export default Field;