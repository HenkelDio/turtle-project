import React, { useState } from 'react';
import Aula from './Lesson';

const Module = ({ modulo }) => {
  const [module_title, setModuleTitle] = useState(modulo.module_title);
  const [lessons, setLessons] = useState(modulo.lessons);
  const [newLessonTitle, setNewLessonTitle] = useState('');

  const handleModuleTitleChange = (e) => {
    setModuleTitle(e.target.value);
    modulo.module_title = e.target.value;
  };

  const addLesson = () => {
    const newLesson = { lesson_title: newLessonTitle };
    setLessons([...lessons, newLesson]);
    setNewLessonTitle('');

    // Atualize o valor no objeto do módulo
    modulo.lessons = [...lessons, newLesson];
  };

  return (
    <div>
      <h3>Módulo: {module_title}</h3>
      <input
        type="text"
        value={module_title}
        onChange={handleModuleTitleChange}
      />
      {lessons.map((aula, index) => (
        <Aula key={index} aula={aula} />
      ))}
      <input
        type="text"
        value={newLessonTitle}
        onChange={(e) => setNewLessonTitle(e.target.value)}
        placeholder="Nova Aula"
      />
      <button onClick={addLesson}>Adicionar Aula</button>
    </div>
  );
};

export default Module;
