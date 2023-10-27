import { useEffect, useMemo, useState } from "react";
import { Container, ContainerCards } from "./styles";
import delay from "../../../utils/delay";
import Input from "../../../components/Input";
import CourseCard from "../../../packages/student/CourseCard/courseCard";
import Loader from "../../../components/Loader";

const Courses: React.FC = () => {
	const [cards] = useState([
		{title: 'Ir ao mercado: como fazer? E como montar um macaco', percentage: 10},
		{title: 'Python básico para iniciantes', percentage: 85},
		{title: 'Como fazer uma API REST em Node.JS e ir ao mercado', percentage: 25},
		{title: 'Ir ao mercado: como fazer? E como montar um macaco', percentage: 10},
		{title: 'Python básico para iniciantes', percentage: 85},
		{title: 'Como fazer uma API REST em Node.JS e ir ao mercado', percentage: 25},
	]);
	const [searchTerm, setSearchTerm] = useState('');
	const [isLoading, setLoading] = useState(true);

	const filteredCards = useMemo(() => cards.filter((card) => (
    card.title.toLowerCase().includes(searchTerm.toLowerCase()))), [cards, searchTerm]);

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
							key={card.title}
							title={card.title}
							percentage={card.percentage}
						/>
					})
				}
			</ContainerCards>
		</Container>
	)
}

export default Courses;