/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { BiSolidBookOpen } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { ICourse } from "../../../types";
import { Card } from "./styles";
import { Box, useDisclosure, useToast } from "@chakra-ui/react";
import GenericModal from "../../../components/GenericModal";
import { deleteCourse } from "../../../services/coursesService";

interface IProps {
	course: ICourse;
	setDeleted: React.Dispatch<React.SetStateAction<boolean>>;
}


const CardCourse: React.FC<IProps> = ({ course, setDeleted }: IProps) => {

	const { isOpen, onClose, onOpen } = useDisclosure();
	const toast = useToast();

	async function deleteCourseById(){
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		const response = await deleteCourse(course.course_id);

		if(response.data){
			toast({
				title: "Sucesso",
				description: "Curso excluido com sucesso.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
			setDeleted(true);
			onClose()
		} else{
			toast({
				title: "Erro",
				description: "Erro ao excluir curso",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	}

	return (
		<Card>
			<span>
				<BiSolidBookOpen />
			</span>
			<p>{course.course_title}</p>
			<Box onClick={onOpen} cursor='pointer'>
				<MdDelete size={20} />
			</Box>
			<GenericModal
				modalTitle="Deletar Curso"
				isOpen={isOpen}
				onClose={onClose}
				actionLabel="Deletar"
				action={deleteCourseById}
			>
				<h2>Você tem certeza que deseja deletar esse curso?</h2>
			</GenericModal>
		</Card>
	);
};

export default CardCourse;