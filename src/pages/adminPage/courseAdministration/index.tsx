import { Link } from "react-router-dom"
import Input from "../../../components/Input"
import { Container, ContainerList, Box } from "./styles"
import { Button } from "../usersAdministration/styles"

const CourseAdministration: React.FC = () => {
	return (
		<Container>
			<h1>Cursos</h1>
			<Box>
				3 cursos
				<Link to="/admin/users/register">
					<Button>
						Novo curso
					</Button>
				</Link>
			</Box>
			<Input placeholder="Procure pelo nome do curso" />
		</Container>
	)
}

export default CourseAdministration