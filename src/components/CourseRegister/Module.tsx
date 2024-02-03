import { Key, useState } from "react";
import Lesson from "./Lesson";
import { Box, Button, Input } from "@chakra-ui/react";

interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	module: any;
}

const Module = ({ module }: IProps) => {
	const [module_title, setModuleTitle] = useState(module.module_title);
	const [lessons, setLessons] = useState(module.lessons);
	const [newLessonTitle, setNewLessonTitle] = useState("");
	const [videoUrl, setVideoUrl] = useState("");
	const [pdfUrl, setPdfUrl] = useState("");
	const [content, setContent] = useState("");

	const handleModuleTitleChange = (e: { target: { value: unknown } }) => {
		setModuleTitle(e.target.value);
		module.module_title = e.target.value;
	};

	const addLesson = () => {
		const newLesson = {
			lesson_title: newLessonTitle,
			video_url: videoUrl,
			pdf_url: pdfUrl,
			content: content,
		};
		setLessons([...lessons, newLesson]);
		setNewLessonTitle("");
		setVideoUrl("");
		setPdfUrl("");
		setContent("");
		module.lessons = [...lessons, newLesson];
	};

	return (
		<Box bg="white" p={5} my={5} rounded="lg" shadow="lg">
			<Input
				type="text"
				value={module_title}
				onChange={handleModuleTitleChange}
			/>
			{lessons.map((aula: unknown, index: Key | null | undefined) => (
				<Lesson key={index} lesson={aula} />
			))}
			<Button onClick={addLesson} mt={2}>
				Adicionar Aula
			</Button>
		</Box>
	);
};

export default Module;
