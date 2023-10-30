/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { TbSquareCheckFilled, TbSquareCheck } from 'react-icons/tb';
import { IModuleClass } from "../../types";
import { Link } from "react-router-dom";

interface IProps {
	title: string,
	modules: IModuleClass[],
	idCourse: string | undefined,
	idModule: string | undefined,
	onClose: () => void
}

export function ModuleContainer({ title, modules, idCourse, idModule, onClose }: IProps) {
	return (
		<Accordion allowToggle>
			<AccordionItem>
				<h2>
				<AccordionButton>
					<Box as="span" flex='1' textAlign='left' fontWeight='bold' py={3}>
						{title}
					</Box>
					<AccordionIcon />
				</AccordionButton>
				</h2>
			<AccordionPanel pb={4}>
			{
					modules.map((module) => {
						return <Link 
							to={`/course/${idCourse}/${idModule}/${module.id}`} key={module.title}
							onClick={onClose}
							>
							<Flex
							_hover={{
								background: "#E2E8F0"
							}}	
							py={3}
							px={2}
							alignItems={'center'} 
							rounded='md'
							gap={5}>
								<Text w={[250,300]}>{module.title}</Text> 
								<Icon
									as={module.completed ? TbSquareCheckFilled : TbSquareCheck}
									color={module.completed ? 'green' : 'black'}
									boxSize={6}
								/>
							</Flex>
							</Link>
					})
				}
			</AccordionPanel>
			</AccordionItem>
		</Accordion>
	)
}