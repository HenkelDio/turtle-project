import { Button, Flex, Input, useDisclosure } from "@chakra-ui/react";
import { Container } from "./styles";
import AccordionClass from "../../../components/AccordionClass";
import { ClassesMock } from "../../../mocks/states";
import { useState } from "react";
import { IContentClass } from "../../../types";
import useTurtleStore from "../../../store";

const FormModule: React.FC = () => {
	const [classModel, setClassModel] = useState<IContentClass[]>([ClassesMock]);
	const [contentClass, setContentClass] = useState<IContentClass[]>([]);
	const [title, setTitle] = useState<string>();
	const { onClose } = useDisclosure();

	const { setModules, modules } = useTurtleStore((state) => state);

	function onDeleteClass(id: any) {
		setClassModel(classModel.filter((item) => item.id !== id));
		onClose();
	}

	function addNewClass() {
		setClassModel((prevState) => [
			...prevState,
			{ ...ClassesMock, id: Math.random().toString() },
		]);
	}

	function addTitle(e: React.ChangeEvent<HTMLInputElement>) {
		setTitle(e.target.value);
	}

	function addModule() {
		setModules([
			{
				title: title,
				classes: {
					...contentClass,
					contentClass,
				},
			},
		]);

		console.log("modules", modules);
	}

	return (
		<Container>
			<h1>Adicionar novo módulo</h1>

			<Input
				variant="filled"
				bg="white"
				h={50}
				_hover={{
					background: "white",
				}}
				_focus={{
					background: "white",
				}}
				placeholder="Título do seu novo módulo"
				marginBottom={10}
				onChange={(e) => addTitle(e)}
			/>

			<p style={{ marginBottom: "10px" }}>Aulas</p>
			<Flex gap={10} flexDirection="column">
				{classModel.map((val) => {
					return (
						<AccordionClass
							titleInput={val.title}
							content={val.content}
							setContentClass={setContentClass}
							contentClass={contentClass}
							onDelete={() => onDeleteClass(val.id)}
						/>
					);
				})}
			</Flex>

			<Flex marginTop={10} gap={10} alignItems="end">
				<Button onClick={() => addNewClass()}>Adicionar nova aula</Button>
				<Button colorScheme="green" onClick={() => addModule()}>
					Salvar novo módulo
				</Button>
			</Flex>
		</Container>
	);
};

export default FormModule;
