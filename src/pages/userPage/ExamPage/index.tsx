/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Button, Container, useDisclosure } from "@chakra-ui/react";
import ExamQuestion from "../../../components/ExamQuestion";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICourse, IQuestion } from "../../../types";
import useTurtleStore from "../../../store";
import GenericModal from "../../../components/GenericModal";

export default function ExamPage() {
	const [questions, setQuestions] = useState<IQuestion[]>();
	const [selectedAnswers, setSelectedAnswers] =
		useState<Record<string, string>>();

	const { idCourse } = useParams();
	const { course } = useTurtleStore((state) => state);
	const { isOpen, onClose, onOpen } = useDisclosure();
	const navigate = useNavigate()
	const [approved, setApproved] = useState(false)

	useEffect(() => {
		function handleGetQuestions() {
			setQuestions(
				course.filter(
					(val: ICourse) => val.course_id?.toString() === idCourse,
				)[0].questions,
			);
		}

		handleGetQuestions();
	}, [idCourse, course]);

	const handleSelectAnswer = (questionId: number, selectedOption: string) => {
		setSelectedAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionId]: selectedOption,
		}));
	};

	const handleFinishExam = () => {
		// Implemente a lógica para verificar os acertos
		const correctAnswers = questions?.reduce((acc: number, question) => {
			const userAnswer = selectedAnswers?.[question.question_id!];
			const correctAnswer = question.question_answer;

			if (userAnswer === correctAnswer) {
				acc += 1;
			}

			return acc;
		}, 0);



		if(correctAnswers) {
			const percentageCorrect = (correctAnswers / (questions?.length || 1)) * 100;

			console.log(`Você acertou ${correctAnswers} de ${questions?.length} questões.`);
		
			if (percentageCorrect >= 60) {
				setApproved(true)
				console.log('Parabéns, você foi aprovado!');
			} else {
				setApproved(false)
				console.log('Infelizmente, você foi reprovado. Estude mais e tente novamente.');
			}

			onOpen();
		}
	};

	return (
		<Container>
			<h1 style={{ marginBottom: "20px" }}>Prova</h1>

			{questions?.map((question) => {
				return (
					<ExamQuestion
						key={question.question_id}
						title={question?.question_text}
						options={question?.questionsOptions}
						onSelect={(selectedOption: any) => handleSelectAnswer(question.question_id!, selectedOption)}
					/>
				);
			})}

			<Button onClick={handleFinishExam} colorScheme="green" width='100%' mt={5}>Finalizar prova</Button>

			<GenericModal
				modalTitle={approved ? "Sucesso!" : 'Puxa...'}
				isOpen={isOpen}
				onClose={onClose}
				actionLabel="OK"
				action={() => navigate('/courses')}
			>
				{
					approved ? 
					<h2>Parabéns! Você foi aprovado.</h2> 
					:
					<h2>Infelizmente, você não passou. Estude mais e tente novamente</h2>
				}
			</GenericModal>
		</Container>
	);
}
