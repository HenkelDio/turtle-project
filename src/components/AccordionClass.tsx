import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Input,
	Flex,
} from '@chakra-ui/react'
import CustomInput from './CustomInput'
import QuillEditor from './QuillEditor'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IContentClass } from '../types';

interface IProps {
	titleInput: string,
	content: string,
	setContentClass: Dispatch<SetStateAction<IContentClass[]>>,
}

export default function AccordionClass({ titleInput, content, setContentClass}: IProps) {
	const [value, setValue] = useState<string | TrustedHTML>("");
	const [title, setTitle] = useState();

	useEffect(() => {
		function getTitle() {
			setContentClass(
				(prevState) => [
					...prevState,
					{'title': title}
				]
			)
		}
	}, [])

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

					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	)
}