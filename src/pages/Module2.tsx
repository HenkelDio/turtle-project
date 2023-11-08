import { useState } from "react";
import Course from "../components/CourseRegister/Course";
import { Box } from "@chakra-ui/react";

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
								video_url: aula.video_url,
								pdf_url: aula.pdf_url,
								content: aula.content
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
      course_title: "",
      modules: [
        {
          module_title: "Módulo 1",
          lessons: []
        },
      ]
    },
  ]);

  return (
    <Box>
      <h1>Criar novo curso</h1>
      {cursos.map((curso, index) => (
        <Course key={index} course={curso} />
      ))}

		<button onClick={formatDataToJSON}>Formatar e Imprimir JSON</button>
    <pre>{formattedData}</pre>


		<iframe src="https://drive.google.com/file/d/1weJnHARZvTV2Tj0MoD3Ov9Fph5cXHrmj/preview" width="640" height="480" allow="autoplay"></iframe>
    </Box>
  );
};

export default ContainerCourse;
