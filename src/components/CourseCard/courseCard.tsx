import { Link } from "react-router-dom"
import { Body, Card, Header } from "./styles"

const CourseCard: React.FC = () => {
	return(
		<Card>
			<Header>
			<h2>Como treinar o seu dragão</h2>
			</Header>
			<Body>
				<div className="details">
					<p>58%</p>
					<Link to='/'>
						Acessar curso
					</Link>
				</div>
			</Body>
		</Card>
	)
}

export default CourseCard;