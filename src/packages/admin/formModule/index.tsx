import { Button, Flex, Input, useDisclosure } from "@chakra-ui/react";
import { Container } from "./styles";
import AccordionClass from "../../../components/AccordionClass";
import { ClassesMock } from "../../../mocks/states";
import {useState } from "react";
import { IContentClass } from "../../../types";
import useTurtleStore from "../../../store";


const FormModule: React.FC = () => {
	const [contentClass, setContentClass] = useState<IContentClass[]>(
		[ClassesMock]
	);
	const { onClose } = useDisclosure();

	const { setModules } = useTurtleStore((state) => state);

	function onDeleteClass(id: string) {
		setContentClass(contentClass.filter((item) => item.id !== id))
		onClose
	}

	function addNewClass() {
		setContentClass(
			(prevState) => [
				...prevState,
				{...ClassesMock, id: Math.random().toString()},
			]
		)
	}

	function addTitle(e: any) {
		const newTitle = e.target.value;
	}

	function addModule() {
		setModules(
			[
				{
					title: "Como treinar o seu dragão",
					classes: contentClass
				}
			]
		);
	}

	return (
		<Container>

			<h1>Adicionar novo módulo</h1>

			<Input
				variant="filled" 
				bg="white" 
				h={50} 
				_hover={{
					background: "white"
				}}
				_focus={{
					background: "white"
				}}
				placeholder="Título do seu novo módulo" 
				marginBottom={10} 
				onClick={(e) => addTitle(e)}	
			/>

			<p style={{ marginBottom: '10px'}}>Aulas</p>
			<Flex gap={10} flexDirection="column">
				{
					contentClass.map((val) => {
						return <AccordionClass titleInput={val.title} content={val.content} setContentClass={setContentClass} onDelete={() => onDeleteClass(val.id)}/>
					})
				}
			</Flex>

			<Flex marginTop={10} gap={10} alignItems='end'>
				<Button onClick={() => addNewClass()}>Adicionar nova aula</Button>
				<Button colorScheme='green' onClick={() => addModule()}>Salvar novo módulo</Button>
			</Flex>
			
		</Container>
	)
}

export default FormModule;