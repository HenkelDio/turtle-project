import { Container } from "@chakra-ui/react";
import ExamQuestion from "../../../components/ExamQuestion";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IQuestion } from "../../../types";
import { coursesMock } from "../../../mocks/states";
import Button from "../../../components/Button";

export default function ExamPage() {
	const [questions, setQuestions] = useState<IQuestion[]>();

	const { idCourse } = useParams();

	useEffect(() => {
		function handleGetQuestions() {
			setQuestions(coursesMock.filter((val) => val.id === idCourse)[0].questions);
		}

		handleGetQuestions();


		console.log(questions)
	})

	return(
		<Container>

			<h1>Prova</h1>

			{
				questions?.map((question) => {
					return <ExamQuestion title={question?.title} options={question?.options}/>
				})
			}

			<Button>
				Finalizar prova
			</Button>


	

		</Container>
	)
}