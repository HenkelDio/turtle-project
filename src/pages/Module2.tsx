import { useState } from "react";
import Course from "../components/CourseRegister/Course";
import { Box, Button, Flex, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from "@chakra-ui/react";
import { formatCourseToJson } from "../utils/formatCourseToJson";
import { ICourse } from "../types";
import Question from "../components/CourseRegister/Question";


const steps = [
	{ title: 'Primeiro passo', description: 'Informações do curso' },
	{ title: 'Segundo passo', description: 'Questões da prova' },
]

const ContainerCourse = () => {
	const [formattedData, setFormattedData] = useState('');
	const [courses, setCourses] = useState<ICourse[]>([
		{
			course_title: "",
			modules: [
				{
					id: "",
					module_title: "Módulo 1",
					lessons: []
				}
			],
			questions: [
				{
					question_title: "Questão 1",
					options: [
						{
							option: "",
							text: ""
						}
					],
					correct_answer: ""
				}
			]
		}
	]);
	const [questions, setQuestions] = useState(courses[0].questions);

	// eslint-disable-next-line @typescript-eslint/unbound-method
	const { activeStep, goToNext, goToPrevious } = useSteps({
		index: 1,
		count: steps.length,
	})

	const addQuestion = () => {
		const newQuestion = {
			question_title: "",
			options: [],
			correct_answer: ""
		};
		setQuestions([...questions, newQuestion]);

		courses[0].questions = [...questions, newQuestion];
	};

	const formatDataToJSON = () => {
		const formattedCourses = formatCourseToJson(courses);
		setFormattedData(JSON.stringify(formattedCourses, null, 2));

		console.log(formattedData)
	};

	return (
		<Box w={1000} mx='auto'>
			<h1>Criar novo curso</h1>

			<Box p={10} mx="auto">
				<Stepper size='lg' index={activeStep} colorScheme='green'>
					{steps.map((step, index) => (
						<Step key={index}>
							<StepIndicator>
								<StepStatus
									complete={<StepIcon />}
									incomplete={<StepNumber />}
									active={<StepNumber />}
								/>
							</StepIndicator>

							<Box flexShrink='0'>
								<StepTitle>{step.title}</StepTitle>
								<StepDescription>{step.description}</StepDescription>
							</Box>

							<StepSeparator />

						</Step>
					))}
				</Stepper>
			</Box>

			{
				activeStep === 1 &&
				<>
					{courses.map((curso, index) => (
						<Course key={index} course={curso} />
					))}

					<Flex justifyContent="center" alignItems="center">
						<Button
							mt={20}
							w={200}
							colorScheme="green"
							onClick={goToNext}
						>
							Próximo
						</Button>
					</Flex>
				</>
			}

			{
				activeStep === 2 &&
				<>

					{courses[0].questions?.map((question, index) => (
						<Question key={index} question={question} />
					))}

					<Button
						mt={5}
						onClick={addQuestion}
					>
						Adicionar nova questão
					</Button>

					<Flex justifyContent="center" alignItems="center" gap={5}>
						<Button
							mt={20}
							w={200}
							onClick={goToPrevious}
						>
							Voltar
						</Button>
						<Button
							mt={20}
							w={200}
							colorScheme="green"
							onClick={formatDataToJSON}
						>
							Salvar
						</Button>
					</Flex>
				</>
			}

		</Box>
	);
};

export default ContainerCourse;
