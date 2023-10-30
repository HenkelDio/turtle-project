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
	useDisclosure,
} from '@chakra-ui/react'
import CustomInput from './CustomInput'
import QuillEditor from './QuillEditor'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IContentClass } from '../types';
import GenericModal from './GenericModal';

interface IProps {
	titleInput: string,
	content: string,
	setContentClass: Dispatch<SetStateAction<IContentClass[]>>,
	onDelete: () => void
}

export default function AccordionClass({ titleInput, content, setContentClass, onDelete}: IProps) {
	const [value, setValue] = useState<string | TrustedHTML>("");
	const [title, setTitle] = useState();
	const { isOpen, onClose, onOpen } = useDisclosure();

	// useEffect(() => {
	// 	function getTitle() {
	// 		setContentClass(
	// 			(prevState) => [
	// 				...prevState,
	// 				{'title': title}
	// 			]
	// 		)
	// 	}
	// }, [])

	return (
		<>
				<Accordion bg="white" rounded="xl" width="800px" allowMultiple>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex='1' textAlign='left'>
								<CustomInput value={titleInput} setTitle={setTitle} />
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Flex marginBottom={5} gap={5}>
							<Input variant='outline' bg='white' placeholder='Digite a URL do vídeo'/>
							<Input variant='outline' bg='white' placeholder='Digite a URL do PDF'/>
						</Flex>
						
						<QuillEditor setValue={setValue} content={content}/>	

						<Button
							variant="solid"
							colorScheme="red"
							onClick={onOpen}
						>
							Deletar
						</Button>

					</AccordionPanel>
				</AccordionItem>
			</Accordion>

			<GenericModal 
				modalTitle='Deletar aula'
				isOpen={isOpen}
				onClose={onClose}
				actionLabel='Deletar'
				action={() => onDelete()}
			>
				<h2>Você tem certeza que deseja deletar essa aula?</h2>
			</GenericModal>
		</>
	)
}