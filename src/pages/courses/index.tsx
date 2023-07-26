import CourseCard from "../../components/CourseCard/courseCard";
import Input from "../../components/Input";
import { Container, ContainerCards } from "./styles";

const Courses: React.FC = () => {
	return(
		<Container>
			<h1>Seus cursos</h1>
			<Input placeholder="Pesquise pelo nome do curso"/>
			<span>3 cursos encontrados</span>
			<ContainerCards>
				<CourseCard></CourseCard>
				<CourseCard></CourseCard>
				<CourseCard></CourseCard>
				<CourseCard></CourseCard>
				<CourseCard></CourseCard>
				<CourseCard></CourseCard>
				<CourseCard></CourseCard>
				<CourseCard></CourseCard>
				<CourseCard></CourseCard>
				<CourseCard></CourseCard>
			</ContainerCards>
		</Container>
	)
}

export default Courses;