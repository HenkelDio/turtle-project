import { Box, Flex, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import QuillEditor from "../QuillEditor";

interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	lesson: any;
}

const Lesson = ({ lesson }: IProps) => {
	const [lesson_title, setLessonTitle] = useState(lesson.lesson_title);
	const [videoUrl, setVideoUrl] = useState(lesson.lesson_video_url);
	const [pdfUrl, setPdfUrl] = useState(lesson.lesson_pdf_url);
	const [content, setContent] = useState(lesson.lesson_richtext);
	const [value, setValue] = useState("");

	const handleLessonTitleChange = (e: { target: { value: unknown } }) => {
		setLessonTitle(e.target.value);
		lesson.lesson_title = e.target.value;
	};

	const handleUrlVideoChange = (e: { target: { value: unknown } }) => {
		setVideoUrl(e.target.value);
		lesson.lesson_video_url = e.target.value;
	};

	const handleUrlPdfChange = (e: { target: { value: unknown } }) => {
		setPdfUrl(e.target.value);
		lesson.lesson_pdf_url = e.target.value;
	};

	const handleContentChange = (value: string) => {
		setContent(value);
		lesson.lesson_richtext = value;
	};

	useEffect(() => {
		handleContentChange(value);
	}, [value]);

	return (
		<Box p={5} bg="gray.200" mt={5}>
			<Input
				bg="white"
				type="text"
				value={lesson_title}
				placeholder="Título da aula"
				onChange={handleLessonTitleChange}
			/>

			<Flex gap={5} mt={5}>
				<Input
					bg="white"
					type="text"
					placeholder="URL do vídeo"
					value={videoUrl}
					onChange={handleUrlVideoChange}
				/>

				<Input
					bg="white"
					type="text"
					placeholder="URL do PDF"
					value={pdfUrl}
					onChange={handleUrlPdfChange}
				/>
			</Flex>

			<Box mt={5}>
				<QuillEditor
					content="Digite um conteúdo incrível 🤓"
					setValue={setValue}
				/>
			</Box>
		</Box>
	);
};

export default Lesson;
