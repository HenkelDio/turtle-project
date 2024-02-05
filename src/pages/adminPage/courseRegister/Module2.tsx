import { useState } from "react";
import {
	Box,
	Button,
	Flex,
	Step,
	StepDescription,
	StepIcon,
	StepIndicator,
	StepNumber,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
	useSteps,
	useToast,
} from "@chakra-ui/react";
import { ICourse } from "../../../types";
import { formatCourseToJson } from "../../../utils/formatCourseToJson";
import Course from "../../../components/CourseRegister/Course";
import Question from "../../../components/CourseRegister/Question";
import { createCourse } from "../../../services/coursesService";
import { useNavigate } from "react-router-dom";

const steps = [
	{ title: "Primeiro passo", description: "Informações do curso" },
	{ title: "Segundo passo", description: "Questões da prova" },
];

const ContainerCourse = () => {
	const [formattedData, setFormattedData] = useState("");
	const [courses, setCourses] = useState<ICourse[]>([
		{
			course_title: "",
			course_description: "",
			modules: [
				{
					module_id: 0,
					module_title: "Módulo 1",
					lessons: [],
				},
			],
			questions: [
				{
					question_text: "Questão 1",
					questionsOptions: [
						{
							question_option_letter: "a",
							question_option_text: "",
						},
						{
							question_option_letter: "b",
							question_option_text: "",
						},
						{
							question_option_letter: "c",
							question_option_text: "",
						},
						{
							question_option_letter: "d",
							question_option_text: "",
						},
					],
					question_answer: "",
				},
			],
		},
	]);

	const toast = useToast();
	const navigate = useNavigate();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [questions, setQuestions] = useState<any>(courses[0].questions);

	// eslint-disable-next-line @typescript-eslint/unbound-method
	const { activeStep, goToNext, goToPrevious } = useSteps({
		index: 1,
		count: steps.length,
	});

	const addQuestion = () => {
		const newQuestion = {
			question_text: "",
			questionsOptions: [
				{
					question_option_letter: "a",
					question_option_text: "",
				},
				{
					question_option_letter: "b",
					question_option_text: "",
				},
				{
					question_option_letter: "c",
					question_option_text: "",
				},
				{
					question_option_letter: "d",
					question_option_text: "",
				},
			],
			question_answer: "",
		};
		setQuestions([...questions, newQuestion]);

		courses[0].questions = [...questions, newQuestion];
	};

	const formatDataToJSON = async () => {
		const formattedCourses = formatCourseToJson(courses);
		setFormattedData(JSON.stringify(formattedCourses, null, 2));

		const response = await createCourse(formattedCourses);

		if(response.data) {
			toast({
				title: "Sucesso.",
				description: "Curso criado com sucesso.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
			navigate('/courses');
		} else {
			toast({
				title: "Erro.",
				description: "Não foi possível carregar as matrículas.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	};

	return (
		<Box w={1000} mx="auto">
			<h1>Criar novo curso</h1>

			<Box p={10} mx="auto">
				<Stepper size="lg" index={activeStep} colorScheme="green">
					{steps.map((step, index) => (
						<Step key={index}>
							<StepIndicator>
								<StepStatus
									complete={<StepIcon />}
									incomplete={<StepNumber />}
									active={<StepNumber />}
								/>
							</StepIndicator>

							<Box flexShrink="0">
								<StepTitle>{step.title}</StepTitle>
								<StepDescription>{step.description}</StepDescription>
							</Box>

							<StepSeparator />
						</Step>
					))}
				</Stepper>
			</Box>

			{activeStep === 1 && (
				<>
					{courses.map((curso, index) => (
						<Course key={index} course={curso} />
					))}

					<Flex justifyContent="center" alignItems="center">
						<Button mt={20} w={200} colorScheme="green" onClick={goToNext}>
							Próximo
						</Button>
					</Flex>
				</>
			)}

			{activeStep === 2 && (
				<>
					{courses[0].questions?.map((question, index) => (
						<Question key={index} question={question} />
					))}

					<Button mt={5} onClick={addQuestion}>
						Adicionar nova questão
					</Button>

					<Flex justifyContent="center" alignItems="center" gap={5}>
						<Button mt={20} w={200} onClick={goToPrevious}>
							Voltar
						</Button>
						<Button
							mt={20}
							w={200}
							colorScheme="green"
							// eslint-disable-next-line @typescript-eslint/no-misused-promises
							onClick={formatDataToJSON}
						>
							Salvar
						</Button>
					</Flex>
				</>
			)}
		</Box>
	);
};

export default ContainerCourse;
