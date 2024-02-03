import { Link } from "react-router-dom";
import { Card, Icon } from "./styles";
import { PiCertificateFill } from "react-icons/pi";

interface IProps {
	title: string;
}

const CertificateCard: React.FC<IProps> = ({ title }: IProps) => {
	return (
		<Card>
			<Icon>
				<PiCertificateFill />
			</Icon>
			<b>{title}</b>
			<Link to="/">Baixar</Link>
		</Card>
	);
};

export default CertificateCard;
