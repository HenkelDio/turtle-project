import { Link } from "react-router-dom"
import { Body, Card } from "./styles"

interface IProps {
	title: string,
	percentage: number,
}

const CourseCard: React.FC<IProps> = ({ title, percentage }: IProps) => {
	return(
		<Card>
			<div className="dot"></div>
			<Body>
				<h2>{title}</h2>
				<div className="details">
					<p>{percentage}%</p>
					<Link to='/course'>
						Acessar curso
					</Link>
				</div>
			</Body>
		</Card>
	)
}

export default CourseCard;