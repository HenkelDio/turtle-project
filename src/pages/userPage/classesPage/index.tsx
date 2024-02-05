import { Content } from "./styles";
import {
	Box,
	useMediaQuery,
	Flex,
	Icon,
	useDisclosure,
} from "@chakra-ui/react";
import ModuleDrawer from "../../../components/ModuleDrawer";
import { BsArrowUpLeftSquareFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { SetStateAction, useEffect, useState } from "react";
import { coursesMock } from "../../../mocks/states";
import { ICourse, ILesson, IModule, IModuleClass } from "../../../types";
import ContentClass from "../../../components/ContentClass";
import useTurtleStore from "../../../store";

const ClassPage: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [data, setData] = useState<ICourse>();
	const [module, setModule] = useState<IModule | undefined>();
	const [content, setContent] = useState<ILesson | undefined>();

	const { idCourse, idModule, idContent } = useParams();

	const { course } = useTurtleStore((state) => state);

	useEffect(() => {
		function handleSetData() {
			const selectedCourse = course.find((val: ICourse) => val.course_id.toString() === idCourse);
	
			if (selectedCourse) {
				setData(selectedCourse);
	
				const selectedModule = selectedCourse.modules.find((val: IModule) => val.module_id.toString() === idModule);
				if (selectedModule) {
					setModule(selectedModule);
	
					const selectedContent = selectedModule.lessons?.find((val: ILesson) => val.lesson_id.toString() === idContent);
					if (selectedContent) {
						setContent(selectedContent);
					}
				}
			}

			console.log('content', content)
		}
	
		handleSetData();
	}, [course, idCourse, idModule, idContent]);

	return (
		<>
			<Box
				onClick={onOpen}
				opacity={0.8}
				cursor="pointer"
				w={100}
				p={1}
				rounded="xl"
				_hover={{ opacity: 1, background: "#E2E8F0" }}
			>
				<Flex alignItems="center" gap={1} justifyContent="center">
					<Icon as={BsArrowUpLeftSquareFill} />
					<p>Módulos</p>
				</Flex>
			</Box>

			<ModuleDrawer
				onClose={onClose}
				isOpen={isOpen}
				courseName={data?.course_title}
				modules={data?.modules}
				idCourse={data?.course_id.toString()}
			/>

			<ContentClass
				title={content?.lesson_title}
				videoUrl={content?.lesson_video_url}
				description={content?.lesson_richtext}
				pdfPath={content?.lesson_pdf_url}
			/>
		</>
	);
};

export default ClassPage;
