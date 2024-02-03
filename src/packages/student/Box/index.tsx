import { IconType } from "react-icons";
import { Container } from "./styles";

interface IProps {
	icon: Element;
	title: string;
}

const Box: React.FC<IProps> = ({ icon, title }: IProps) => {
	return (
		<Container>
			{icon}
			{title}
		</Container>
	);
};

export default Box;
