import { Container, FooterLoading, Overlay } from "./styles";
import ReactDOM from "react-dom";
import { GrValidate } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";

interface IProps {
	isOpen: boolean;
	success: boolean;
	error: boolean;
	label: string;
}

const Alert: React.FC<IProps> = ({ isOpen, success, label, error }: IProps) => {
	if (!isOpen) {
		return null;
	}

	return ReactDOM.createPortal(
		<Overlay>
			<Container success={success} error={error}>
				<span>
					{success && <GrValidate />}
					{error && <RiErrorWarningLine />}
				</span>

				<p>{label}</p>
				<FooterLoading success={success} error={error} />
			</Container>
		</Overlay>,
		document.getElementById("alert")!,
	);
};

export default Alert;
