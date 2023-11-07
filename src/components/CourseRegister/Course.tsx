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

  const addModule = () => {
    setModules([...modules, { module_title: newModuleTitle, lessons: [] }]);
    setNewModuleTitle('');
  };

	
const handleCourseTitleChange = (e: { target: { value: unknown; }; }) => {
  setCourseTitle(e.target.value);
  course.course_title = e.target.value; 
};

  return (
    <div>
      <Input
        type="text"
        placeholder='Título do curso'
				bg="white"
				_hover={{
					background: "white"
				}}
				_focus={{
					background: "white"
				}}
        onChange={handleCourseTitleChange}
      />

			{
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			modules.map((modulo: any, index: Key | null | undefined) => (
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
