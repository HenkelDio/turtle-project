import { Link } from "react-router-dom";
import { Button, Card } from "./styles";
import { BiSolidBookOpen } from "react-icons/bi";

const CardCourse: React.FC = () => {
	return (
		<Card>
			<span>
				<BiSolidBookOpen />
			</span>
			<p>NR 20: Como parar os fogos do mundo as vezes</p>
			<Link to="/">
				<Button>Editar</Button>
			</Link>
		</Card>
	);
};

export default CardCourse;
