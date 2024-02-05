import { useEffect, useMemo, useState } from "react";
import { Container } from "./styles";
import delay from "../../../utils/delay";
import Loader from "../../../components/Loader";
import { coursesMock } from "../../../mocks/states";
import { Flex, Input, useToast } from "@chakra-ui/react";
import GenericCard from "../../../components/GenericCard";
import { useQuery } from "react-query";
import { getRegistersByEmail } from "../../../services/usersService";
import useTurtleStore from "../../../store";
import { ICourseRegister } from "../../../types";

const Courses: React.FC = () => {
	const [cards] = useState(coursesMock);
	const [searchTerm, setSearchTerm] = useState("");
	const [isLoading, setLoading] = useState(true);
	const [courses, setCourses] = useState<ICourseRegister[]>([]);
	const { credentials } = useTurtleStore((state) => state);

	const toast = useToast();

	useQuery(
		["getCoursesByStudents"],
		() => getRegistersByEmail(credentials.email),
		{
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSuccess: ({ data, err }) => {
				setLoading(true)
	
				if (!err) {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					setCourses(data.registers)
					setLoading(false);
				}
				if (err) {
					toast({
						title: "Erro.",
						description: "Não foi possível carregar os cursos.",
						status: "error",
						duration: 5000,
						isClosable: true,
					});
	
					setLoading(false);
				}
			},
		},
	);

	// const filteredCards = useMemo(
	// 	() =>
	// 		cards.filter((card) =>
	// 			card.courseTitle[0].toLowerCase().includes(searchTerm.toLowerCase()),
	// 		),
	// 	[cards, searchTerm],
	// );

	const handleSearch = (e: any) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		setSearchTerm(e.target.value);
	};

	useEffect(() => {
		async function handleDelay() {
			setLoading(true);
			await delay();
			setLoading(false);
		}

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		handleDelay();
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<Container>
			<h1>Meus cursos</h1>
			<Input
				onChange={(e) => handleSearch(e)}
				placeholder="Pesquise pelo nome do curso"
				variant="filled"
				bg="white"
				_hover={{
					background: "white",
				}}
				_focus={{
					background: "white",
				}}
			/>

			<Flex gap={5} wrap="wrap" mt={50}>
				{courses && courses.length > 0 && courses.map((card) => {
					return (
						<>
						<GenericCard key={card.course_id} type="course" courseData={card.course} />
						</>
					)
				})}
			</Flex>
		</Container>
	);
};

export default Courses;
