import { Input } from '@chakra-ui/react';
import { useState } from 'react';

interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	lesson: any
}

const Lesson = ({ lesson }: IProps) => {
  const [lesson_title, setLessonTitle] = useState(lesson.lesson_title);

	const handleLessonTitleChange = (e: { target: { value: unknown; }; }) => {
		setLessonTitle(e.target.value);
		lesson.lesson_title = e.target.value; // Atualiza o valor no objeto da aula
	};

  return (
    <div>
      <Input
        type="text"
        value={lesson_title}
        onChange={handleLessonTitleChange}
      />
    </div>
  );
};

export default Lesson;
