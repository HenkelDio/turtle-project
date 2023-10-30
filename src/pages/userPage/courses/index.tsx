import { useEffect, useMemo, useState } from "react";
import { Container } from "./styles";
import delay from "../../../utils/delay";
import Loader from "../../../components/Loader";
import { coursesMock } from "../../../mocks/states";
import { Flex, Input } from "@chakra-ui/react";
import GenericCard from "../../../components/GenericCard";

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
				variant="filled"
				bg="white"
				_hover={{
					background: 'white'
				}}
				_focus={{
					background: 'white'
				}}
			/>


			<Flex gap={5} wrap="wrap" mt={50}>
				{
					filteredCards.map((card) => {
						return <GenericCard
							key={card.id}
							type="course"
							courseData={card}
						/>
					})
				}
			</Flex>
		</Container>
	)
}

export default Courses;