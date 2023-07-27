import { useEffect, useMemo, useState } from "react";
import Input from "../../components/Input";
import { Container, ContainerCards, FormInput } from "./styles";
import { HiFilter } from 'react-icons/hi';
import CourseCard from "../../components/user/CourseCard/courseCard";
import delay from "../../utils/delay";
import Loader from "../../components/loader";

const Courses: React.FC = () => {
	const [cards] = useState([
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
			<h1>Seus cursos</h1>
			<FormInput>
				<Input 
				onChange={(e) => handleSearch(e)}
				placeholder="Pesquise pelo nome do curso"/>
				<p><HiFilter /></p>
			</FormInput>
			
			{
				filteredCards.length > 0 
				? <span>{filteredCards.length} cursos encontrados</span>
				: <span>Não foi encontrado nenhum curso no nome: {searchTerm}</span>
			}
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