/* eslint-disable @typescript-eslint/no-floating-promises */
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Input,
	useToast,
} from "@chakra-ui/react";
import CardSelectCourse from "./CardSelectCourse";
import { useEffect, useState } from "react";
import { getAdminCourses } from "../../services/coursesService";
import { ICourse, ICreateRegister, IRegister, IUserStudent } from "../../types";
import { createRegister } from "../../services/usersService";
import { UseQueryResult } from "react-query";

interface IProps {
	isOpen: boolean;
	onClose: () => void;
	registers: IRegister[],
	student: IUserStudent | undefined
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

const SelectCourseDrawer: React.FC<IProps> = ({
	isOpen,
	onClose,
	registers,
	student,
	getRegisterQuery
}: IProps) => {
	const [courses, setCourses] = useState<ICourse[]>([]);
	const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
	const toast = useToast();

	useEffect(() => {
		async function getCourses() {
			const response = await getAdminCourses();
			if (response.data) {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				setCourses(response.data);
			} else {
				toast({
					title: "Erro",
					description: "Erro ao carregar cursos",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}
		}
		getCourses();
	}, []);

	function isAlreadySelected(id: number) {
		if(registers) {
			return registers?.some((item: IRegister) => {
				return item.course_id === id;
			})
		}
	}

	async function saveSelectedCourses() {
		const data: ICreateRegister = {
			courses_id: selectedCourses,
			student_document: student?.student_document
		}

		const response = await createRegister(data);

		if(response.data) {
			toast({
				title: "Sucesso",
				description: "Matriculas realizadas com sucesso",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
			getRegisterQuery.refetch()
			onClose()
		} else {
			toast({
				title: "Erro",
				description: "Erro ao carregar cursos",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	}

	return (
		<>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Nova matricula</DrawerHeader>

					<DrawerBody>
						<Input placeholder="Pesquise pelo nome do curso" />

						<Flex mt={5} direction="column" gap={4}>
							{courses &&
								courses.map((item: ICourse) => {
									return (
										<CardSelectCourse
											course={item}
											key={item.course_id}
											setSelectedCourses={setSelectedCourses}
											isAlreadySelected={isAlreadySelected(item.course_id)}
											selectedCourses={selectedCourses}
										/>
									);
								})}
						</Flex>
					</DrawerBody>

					<DrawerFooter>
						<Button variant="solid" colorScheme="green" mr={3} onClick={saveSelectedCourses}>
							Salvar
						</Button>
						<Button variant="outline" mr={3}>
							Cancelar
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default SelectCourseDrawer;
