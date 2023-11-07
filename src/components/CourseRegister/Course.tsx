import React, { useState } from 'react';
import Modulo from './Module';

const Curso = ({ curso }) => {
  const [course_title, setCourseTitle] = useState(curso.course_title);
  const [modules, setModules] = useState(curso.modules);
  // Adicione um estado para controlar o título do novo módulo.
  const [newModuleTitle, setNewModuleTitle] = useState('');

  // Função para adicionar um novo módulo ao curso.
  const addModule = () => {
    setModules([...modules, { module_title: newModuleTitle, lessons: [] }]);
    setNewModuleTitle(''); // Limpa o campo de entrada do novo módulo.
  };

	
const handleCourseTitleChange = (e) => {
  setCourseTitle(e.target.value);
  curso.course_title = e.target.value; // Atualiza o valor no objeto do curso
};

  return (
    <div>
      <h2>Curso: {course_title}</h2>
      <input
        type="text"
        value={course_title}
        onChange={handleCourseTitleChange}
      />

      {/* Renderize a lista de módulos existentes. */}
      {modules.map((modulo, index) => (
        <Modulo key={index} modulo={modulo} />
      ))}

      {/* Adicione um campo de entrada e um botão para adicionar um novo módulo. */}
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

export default Curso;
