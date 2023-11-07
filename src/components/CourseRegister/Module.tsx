import { Key, useState } from 'react';
import Lesson from './Lesson';
import { Box, Button, Input } from '@chakra-ui/react';

interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	module: any
}

const Module = ({ module }: IProps) => {
  const [module_title, setModuleTitle] = useState(module.module_title);
  const [lessons, setLessons] = useState(module.lessons);
  const [newLessonTitle, setNewLessonTitle] = useState('');

  const handleModuleTitleChange = (e: { target: { value: unknown; }; }) => {
    setModuleTitle(e.target.value);
    module.module_title = e.target.value;
  };

  const addLesson = () => {
    const newLesson = { lesson_title: newLessonTitle };
    setLessons([...lessons, newLesson]);
    setNewLessonTitle('');

    // Atualize o valor no objeto do módulo
    module.lessons = [...lessons, newLesson];
  };

  return (
    <Box 
			bg="white"
			p={5}
			my={5}
		>

      <Input
        type="text"
        value={module_title}
        onChange={handleModuleTitleChange}
      />
      {lessons.map((aula: unknown, index: Key | null | undefined) => (
        <Lesson key={index} lesson={aula} />
      ))}
      <button onClick={addLesson}>Adicionar Aula</button>
    </Box>
  );
};

export default Module;
