import { Link } from "react-router-dom"
import Input from "../../../components/Input"
import { Container, ContainerList, Box } from "./styles"
import CardCourse from "../../../packages/admin/CardCourse"
import Button from "../../../components/Button"

const CourseAdministration: React.FC = () => {
	return (
		<Container>
			<h1>Cursos</h1>
			<Box>
				<p>3 cursos</p>
				<Link to="/admin/courses/register">
					<Button>
						Novo curso
					</Button>
				</Link>
			</Box>
			<Input placeholder="Procure pelo nome do curso" />
			<ContainerList>
				<CardCourse />
				<CardCourse />
				<CardCourse />
				<CardCourse />
			</ContainerList>
		</Container>
	)
}

export default CourseAdministration