import { useDisclosure } from "@chakra-ui/react";
import SelectCourseDrawer from "../SelectCourseDrawer";
import { IRegister, IUserStudent } from "../../types";
import { UseQueryResult } from "react-query";

interface IProps {
	registers: IRegister[];
	student: IUserStudent | undefined;
	getRegisterQuery: UseQueryResult<
		| {
				data: any;
				err: null;
		  }
		| {
				data: null;
				err: unknown;
		  },
		unknown
	>;
}

const AddRegisterCourse: React.FC<IProps> = ({
	registers,
	student,
	getRegisterQuery
}: IProps) => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<SelectCourseDrawer
				onClose={onClose}
				isOpen={isOpen}
				registers={registers}
				student={student}
				getRegisterQuery={getRegisterQuery}
			/>

			<p
				style={{
					fontWeight: "bold",
					textDecoration: "underline",
					cursor: "pointer",
				}}
				onClick={onOpen}
			>
				Atribuir curso
			</p>
		</>
	);
};

export default AddRegisterCourse;
