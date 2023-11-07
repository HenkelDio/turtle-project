import { Key, useState } from 'react';
import Module from './Module';
import { Input } from '@chakra-ui/react';

interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	course: any
}

const Course = ({ course }: IProps) => {
	const [course_title, setCourseTitle] = useState(course.course_title);
	const [modules, setModules] = useState(course.modules);
	const [newModuleTitle, setNewModuleTitle] = useState('');

	const handleCourseTitleChange = (e) => {
		setCourseTitle(e.target.value);
		course.course_title = e.target.value;
	};

	const addModule = () => {
		const newModule = {
			module_title: newModuleTitle,
			lessons: [] // Inicializa o array de aulas vazio
		};
		setModules([...modules, newModule]);
		setNewModuleTitle('');

		// Atualize o valor no objeto do curso
		course.modules = [...modules, newModule];
	};

	return (
		<div>
			<h2>Curso: {course_title}</h2>
			<input
				type="text"
				value={course_title}
				onChange={handleCourseTitleChange}
			/>
			{modules.map((modulo, index) => (
				<Module key={index} module={modulo} />
			))}
			<input
				type="text"
				value={newModuleTitle}
				onChange={(e) => setNewModuleTitle(e.target.value)}
				placeholder="Novo Módulo"
			/>
			<button onClick={addModule}>Adicionar Módulo</button>
		</div>
	);
};

export default Course;
