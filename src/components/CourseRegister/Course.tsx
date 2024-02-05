import { useState } from "react";
import Module from "./Module";
import { Button, Input } from "@chakra-ui/react";
import { IModule } from "../../types";

interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	course: any;
}

const Course = ({ course }: IProps) => {
	const [course_title, setCourseTitle] = useState(course.course_title);
	const [course_description, setCourseDescription] = useState(
		course.course_description,
	);
	const [course_rule, setCourseRule] = useState(course.course_rule);
	const [modules, setModules] = useState(course.modules);
	const [newModuleTitle, setNewModuleTitle] = useState("");

	const handleCourseTitleChange = (e: { target: { value: unknown } }) => {
		setCourseTitle(e.target.value);
		course.course_title = e.target.value;
	};

	const handleCourseDescriptionChange = (e: { target: { value: unknown } }) => {
		setCourseDescription(e.target.value);
		course.course_description = e.target.value;
	};

	const handleCourseRuleChange = (e: { target: { value: unknown } }) => {
		setCourseRule(e.target.value);
		course.course_rule = e.target.value;
	};

	const addModule = () => {
		const newModule = {
			module_title: newModuleTitle,
			lessons: [], // Inicializa o array de aulas vazio
		};
		setModules([...modules, newModule]);
		setNewModuleTitle("");

		// Atualize o valor no objeto do curso
		course.modules = [...modules, newModule];
	};

	return (
		<div>
			<Input
				mt={5}
				placeholder="Título do curso"
				bg="white"
				type="text"
				value={course_title}
				onChange={handleCourseTitleChange}
			/>

			<Input
				mt={5}
				placeholder="Descrição do curso"
				bg="white"
				type="text"
				value={course_description}
				onChange={handleCourseDescriptionChange}
			/>

			<Input
				mt={5}
				placeholder="Norma Regulamentadora [] (NR []), da Portaria SIT Nº [], de 23/03/2012 do Ministério do Trabalho"
				bg="white"
				type="text"
				value={course_rule}
				onChange={handleCourseRuleChange}
			/>

			{modules.map((module: IModule, index: number) => (
				<Module key={index} module={module} />
			))}
			<Button onClick={addModule}>Adicionar Módulo</Button>
		</div>
	);
};

export default Course;
