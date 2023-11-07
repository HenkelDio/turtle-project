import { useState } from "react";
import Curso from "../components/CourseRegister/Course";

const ContainerCourse = () => {
	const [formattedData, setFormattedData] = useState(null);

	const formatDataToJSON = () => {
		const formattedCourses = cursos.map((curso) => {
			return {
				course_title: curso.course_title,
				modules: curso.modules.map((modulo) => {
					return {
						module_title: modulo.module_title,
						lessons: modulo.lessons.map((aula) => {
							return {
								lesson_title: aula.lesson_title,
							};
						}),
					};
				}),
			};
		});
		setFormattedData(JSON.stringify(formattedCourses, null, 2));
	};
	

  const [cursos, setCursos] = useState([
    {
      course_title: "Curso 1",
      modules: [
        {
          module_title: "Módulo 1",
          lessons: []
        },
        {
          module_title: "Módulo 2",
          lessons: []
        }
      ]
    },
    {
      course_title: "Curso 2",
      modules: [
        {
          module_title: "Módulo 1",
          lessons: []
        }
      ]
    }
  ]);

  return (
    <div>
      <h1>Plataforma de Criação de Cursos</h1>
      {cursos.map((curso, index) => (
        <Curso key={index} curso={curso} />
      ))}

<button onClick={formatDataToJSON}>Formatar e Imprimir JSON</button>
    <pre>{formattedData}</pre>
    </div>
  );
};

export default ContainerCourse;
