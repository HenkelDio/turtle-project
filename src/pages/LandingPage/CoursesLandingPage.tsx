import { Box, Flex, Text } from "@chakra-ui/react";
import CardCourseLandingPage from "../../components/LandingPage/CardCourseLandingPage";

export default function CoursesLandingPage() {
	return (
		<Box p={10}>
			<Text fontSize='4xl' mb={10} fontWeight="bold">Cursos</Text>
			<Flex wrap="wrap" gap={10} justifyContent='center'>
				<CardCourseLandingPage />
				<CardCourseLandingPage />
				<CardCourseLandingPage />
				<CardCourseLandingPage />
				<CardCourseLandingPage />
				<CardCourseLandingPage />
			</Flex>
		</Box>
	)
}