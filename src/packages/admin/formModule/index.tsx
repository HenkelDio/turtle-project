import { Button, Flex, Input } from "@chakra-ui/react";
import { Container } from "./styles";
import AccordionClass from "../../../components/AccordionClass";
import { ClassesMock } from "../../../mocks/states";
import { Dispatch, SetStateAction, useState } from "react";
import { IContentClass, IModule } from "../../../types";
import useTurtleStore from "../../../store";


const FormModule: React.FC = () => {
	const [contentClass, setContentClass] = useState<IContentClass[]>(
		[ClassesMock]
	);

	const { setModules } = useTurtleStore((state) => state);

	function addNewClass() {
		setContentClass(
			(prevState) => [
				...prevState,
				ClassesMock
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
				placeholder="Título do seu novo módulo" 
				marginBottom={10} 
				onClick={(e) => addTitle(e)}	
			/>

			<p style={{ marginBottom: '10px'}}>Aulas</p>
			<Flex gap={10} flexDirection="column">
				{
					contentClass.map((val) => {
						return <AccordionClass titleInput={val.title} content={val.content} setContentClass={setContentClass} />
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