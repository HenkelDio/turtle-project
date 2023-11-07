import React, { useState } from 'react';

const Aula = ({ aula }) => {
  const [lesson_title, setLessonTitle] = useState(aula.lesson_title);

	const handleLessonTitleChange = (e) => {
		setLessonTitle(e.target.value);
		aula.lesson_title = e.target.value; // Atualiza o valor no objeto da aula
	};

  return (
    <div>
      <p>Aula: {lesson_title}</p>
      <input
        type="text"
        value={lesson_title}
        onChange={handleLessonTitleChange}
      />
    </div>
  );
};

export default Aula;
