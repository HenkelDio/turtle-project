import { Button, Flex } from "@chakra-ui/react"
import { useState } from "react"

export default function CourseMockado() {
	const [modules, setModules] = useState([]);
	const [modulesCount, setModulesCount] = useState([]);

	function Lesson() {
		return (
			<Flex gap={5} flexDirection={'column'} mt={2} bg={'white'} p={2}>
				<input placeholder="Titulo da aula"></input>
				<input placeholder="URL do video"></input>
				<input placeholder="URL do pdf"></input>
				<input placeholder="Conteudo"></input>
			</Flex>
		)
	}

	function Module(props) {
		console.log(props)
		return (
			<div style={{ border: "2px solid #ccc", padding: '20px' }}>
				<input 
					placeholder="Titulo do modulo"
					onChange={(e) => setModules([
						{title: e.targe.value}
					])}
				>	
				</input>
				
				
				
				<Button >Adicionar aula +</Button>
				{
					
				}
			</div>
		)
	}

	return (
		<>
			<input placeholder="Titulo do curso" />

			{
				modules.map((item) => <Module moduleNumber={modules.length - 1}/>)
			}

			<Button onClick={_ => setModules(prevState => [...prevState, []])}>Adicionar modulo +</Button>
		</>


	)
}