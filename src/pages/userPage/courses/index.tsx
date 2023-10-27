import { useEffect, useMemo, useState } from "react";
import { Container, ContainerCards } from "./styles";
import delay from "../../../utils/delay";
import Input from "../../../components/Input";
import CourseCard from "../../../packages/student/CourseCard/courseCard";
import Loader from "../../../components/Loader";
import { coursesMock } from "../../../mocks/states";

const Courses: React.FC = () => {
	const [cards] = useState(coursesMock);
	const [searchTerm, setSearchTerm] = useState('');
	const [isLoading, setLoading] = useState(true);

	const filteredCards = useMemo(() => cards.filter((card) => (
    card.courseTitle[0].toLowerCase().includes(searchTerm.toLowerCase()))), [cards, searchTerm]);

	const handleSearch = (e: any) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		setSearchTerm(e.target.value);
	}

	useEffect(() => {
		async function handleDelay() {
			setLoading(true);
			await delay();
			setLoading(false);
		}

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		handleDelay();

	}, [])

	if(isLoading) {
		return (
			<Loader />
		)
	}

	return(
		<Container>
			
			<h1>Meus cursos</h1>
			<Input 
				onChange={(e) => handleSearch(e)}
				placeholder="Pesquise pelo nome do curso"
			/>


			<ContainerCards>
				{
					filteredCards.map((card) => {
						return <CourseCard 
							key={card.id}
							title={card.courseTitle}
							percentage={card.percentage}
							idCourse={card.id}
							modules={card.modules}
						/>
					})
				}
			</ContainerCards>
		</Container>
	)
}

export default Courses;