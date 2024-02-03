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
import { ICourse, IModule, IModuleClass } from "../../../types";
import ContentClass from "../../../components/ContentClass";

const ClassPage: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [data, setData] = useState<ICourse>();
	const [module, setModule] = useState<IModule | undefined>();
	const [content, setContent] = useState<IModuleClass | undefined>();

	const { idCourse, idModule, idContent } = useParams();

	useEffect(() => {
		function handleSetData() {
			setData(coursesMock.filter((val) => val.id === idCourse)[0]);
			setModule(data?.modules.filter((val) => val.id === idModule)[0]);
			setContent(module?.modules.filter((val) => val.id === idContent)[0]);
		}

		handleSetData();
	});

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
				courseName={data?.courseTitle}
				modules={data?.modules}
				idCourse={data?.id}
			/>

			<ContentClass
				title={content?.title}
				videoUrl={content?.videoUrl}
				description={content?.description}
				pdfPath={content?.pdfPath}
			/>
		</>
	);
};

export default ClassPage;
