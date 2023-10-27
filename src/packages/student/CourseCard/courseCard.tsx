import { Link } from "react-router-dom"
import { Body, Card } from "./styles"
import { IModule } from "../../../types"

interface IProps {
	title: string,
	percentage: string,
	idCourse: string,
	modules: IModule[]
}

const CourseCard: React.FC<IProps> = ({ title, percentage, idCourse, modules }: IProps) => {
	console.log(modules)

	return(
		<Card>
			<div className="dot"></div>
			<Body>
				<h2>{title}</h2>
				<div className="details">
					<p>{percentage}%</p>
					<Link to={`/course/${idCourse}/${modules[0].id}/${modules[0].modules[0].id}`}>
						Acessar curso
					</Link>
				</div>
			</Body>
		</Card>
	)
}

export default CourseCard;