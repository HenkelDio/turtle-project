import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { ICourse } from "../types";

function Lesson() {
	return (
		<Flex gap={5} flexDirection={"column"} mt={2} bg={"white"} p={2}>
			<input placeholder="Titulo da aula"></input>
			<input placeholder="URL do video"></input>
			<input placeholder="URL do pdf"></input>
			<input placeholder="Conteudo"></input>
		</Flex>
	);
}

function Module(props) {
	let { modules, setModules } = props;

	let moduleIndex = modules.length - 1;

	return (
		<div style={{ border: "2px solid #ccc", padding: "20px" }}>
			<input
				placeholder="Titulo do modulo"
				onChange={(e) =>
					setModules((prevState) => {
						console.log(moduleIndex);
						prevState[moduleIndex].module_title = e.target.value;
						return prevState;
					})
				}
			></input>

			<Button
				onClick={(_) =>
					setModules((prevState) => {
						console.log(moduleIndex);
						console.log("Antes", prevState);
						const newState = [...prevState];

						newState[moduleIndex].lessons = [
							...newState[moduleIndex].lessons,
							{ lesson_title: "" },
						];
						console.log("Depois", newState);
						return newState;
					})
				}
			>
				Adicionar aula +
			</Button>

			{modules[moduleIndex].lessons.map((lesson) => (
				<Lesson />
			))}
		</div>
	);
}

export default function CourseMockado() {
	const [course, setCourse] = useState<ICourse>();
	const [modules, setModules] = useState([]);

	return (
		<>
			<input
				placeholder="Titulo do curso"
				onChange={(e) => setCourse({ courseTitle: e.target.value })}
			/>

			{modules.map((_) => (
				<Module
					moduleIndex={modules.length}
					modules={modules}
					setModules={setModules}
				/>
			))}

			<Button
				onClick={(_) =>
					setModules((prevState) => [
						...prevState,
						{ module_title: "", lessons: [] },
					])
				}
			>
				Adicionar modulo +
			</Button>
			<Button onClick={(_) => console.log(modules)}>Cadastrar curso</Button>
		</>
	);
}
