import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import { Container, ContainerList, Box } from "./styles";
import CardCourse from "../../../packages/admin/CardCourse";
import { Button, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAdminCourses } from "../../../services/coursesService";
import { ICourse } from "../../../types";
import GenericModal from "../../../components/GenericModal";

const CourseAdministration: React.FC = () => {

	const [courses, setCourses] = useState<ICourse[]>();
	const toast = useToast();
	const [deleted, setDeleted] = useState(false);

	useEffect(() => {
		console.log('start')
		async function getCourses() {
			const response = await getAdminCourses();
			if (response.data) {
				console.log(response.data)
				console.log('oiiiiiii')
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				setCourses(response.data);
				setDeleted(false);
			} else {
				toast({
					title: "Erro",
					description: "Erro ao carregar cursos",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}
		}
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getCourses();
	}, [deleted]);

	return (
		<Container>
			<h1>Cursos</h1>
			<Box>
				<p>{courses ? `${courses.length} cursos` : 'Carregando...'}</p>
				<Link to="/createCourse">
					<Button colorScheme="green">Novo curso</Button>
				</Link>
			</Box>
			<Input placeholder="Procure pelo nome do curso" />
			<ContainerList>
				{courses?.map((course: ICourse) => (
					<CardCourse key={course.course_id} course={course} setDeleted={setDeleted} />
				))}
			</ContainerList>
		</Container>
	);
};

export default CourseAdministration;