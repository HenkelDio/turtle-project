import {
	Box,
	Center,
	Text,
	Stack,
	Button,
	useColorModeValue,
} from "@chakra-ui/react";
import { ICertificate, ICourse } from "../types";
import { Link } from "react-router-dom";
import useTurtleStore from "../store";

interface IProps {
	type: string;
	courseData?: ICourse;
	certificateData?: ICertificate;
	isDone: boolean
}

export default function GenericCard({
	type,
	courseData,
	certificateData,
	isDone
}: IProps) {
	const { setCourse } = useTurtleStore((state) => state);

	function selectCourse() {
		if(courseData) {
			setCourse([courseData])
		}
	}

	function Header() {
		return (
			<Text
				fontSize={"sm"}
				fontWeight={500}
				bg={useColorModeValue("green.50", "green.900")}
				p={2}
				px={3}
				color={"green.500"}
				rounded={"full"}
			>
				{type === "certificate" ? "Concluído" : "Curso"}
			</Text>
		);
	}

	function Body() {
		return (
			<Stack direction={"column"} align={"center"} justify={"center"} h={110}>
				<Text fontSize={"2xl"} fontWeight={800}>
					{type === "certificate"
						? certificateData?.title
						: courseData?.course_title}
				</Text>
				<Text color={"gray.500"}>
					{type === "certificate"
						? "Certificado"
						: isDone  ? 'Concluído' : 'Em progresso'}
				</Text>
			</Stack>
		);
	}

	return (
		<Center py={0}>
			<Box
				maxW={"400px"}
				minW={"300px"}
				w={"full"}
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"2xl"}
				rounded={"md"}
				overflow={"hidden"}
			>
				<Stack
					textAlign={"center"}
					p={6}
					color={useColorModeValue("gray.800", "white")}
					align={"center"}
				>
					<Header />
					<Body />
				</Stack>

				<Box px={6} pb={10}>
					<Link
						// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
						to={`/course/${courseData?.course_id}/${courseData?.modules[0].module_id}/${courseData?.modules[0].lessons[0].lesson_id}`}
						onClick={selectCourse}
					>
						<Button
							w={"full"}
							bg={"green.400"}
							color={"white"}
							rounded={"xl"}
							_hover={{
								bg: "green.500",
							}}
							_focus={{
								bg: "green.500",
							}}
						>
							{type === "certificate" ? "BAIXAR" : "Acessar curso"}
						</Button>
					</Link>
				</Box>
			</Box>
		</Center>
	);
}
