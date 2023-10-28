import { useState } from "react";
import QuillEditor from "../../../components/QuillEditor";
import { Container } from "./styles";
import { IoMdAddCircle } from "react-icons/io";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
	Box,
	Input,
	Flex,
	Button,
} from '@chakra-ui/react'
import CustomInput from "../../../components/CustomInput";

const FormModule: React.FC = () => {
	const [value, setValue] = useState<string | TrustedHTML>("");

	return (
		<Container>

			<Accordion>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex='1' textAlign='left'>
								<CustomInput />
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Flex marginBottom={5} gap={5}>
							<Input variant='outline' bg='white' placeholder='Digite a URL do vídeo'/>
							<Input variant='outline' bg='white' placeholder='Digite a URL do PDF'/>
						</Flex>
						
						<QuillEditor setValue={setValue} />	

					</AccordionPanel>
				</AccordionItem>
			</Accordion>

			<Button marginTop={6}>Adicionar aula</Button>
			<Button marginTop={6} colorScheme='green'>Salvar novo módulo</Button>
		</Container>
	)
}

export default FormModule;