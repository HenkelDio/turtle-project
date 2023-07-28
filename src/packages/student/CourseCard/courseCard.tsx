import { Link } from "react-router-dom"
import { Body, Card, Icon } from "./styles"
import { MdBookmarkBorder } from 'react-icons/md'

interface IProps {
	title: string,
	percentage: number,
}

const CourseCard: React.FC<IProps> = ({ title, percentage }: IProps) => {
	return(
		<Card>
			<div className="dot"></div>
			<Icon>
				<MdBookmarkBorder />
			</Icon>
			<Body>
				<h2>{title}</h2>
				<div className="details">
					<p>{percentage}%</p>
					<Link to='/'>
						Acessar curso
					</Link>
				</div>
			</Body>
		</Card>
	)
}

export default CourseCard;