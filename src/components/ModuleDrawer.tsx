import { Box, Button, CloseButton, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text } from "@chakra-ui/react";
import { ModuleContainer } from "./ModuleContainer";
import { IModule } from "../types";
import { Link } from "react-router-dom";

interface IProps {
	onClose: () => void,
	isOpen: boolean,
	courseName: string | undefined,
	modules: IModule[] | undefined
	idCourse: string | undefined
}

export default function ModuleDrawer({ onClose, isOpen, courseName, modules, idCourse }: IProps) {
	return (
		<>
			<Drawer placement="left" onClose={onClose} isOpen={isOpen} size="sm">
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader borderBottomWidth='1px'>
						<Flex>
							{courseName}
							<CloseButton onClick={onClose} />
						</Flex>
					</DrawerHeader>
					<DrawerBody>
							<Box>
							{
								modules?.map((module) => {
									return <ModuleContainer 
										modules={module.modules} 
										title={module.title} 
										key={module.title} 
										idCourse={idCourse}
										idModule={module.id}
										onClose={onClose}
									/>
								})
							}
						</Box>
						<Box marginTop={10}>
							<Link to={`/course/exam/${idCourse}`}>
								<Button
									variant="solid" 
									bg="green.400"
									_hover={{
										background: "green.500"
									}}
									isDisabled={true}
									color="white"
									w={['full', 300]}
									h={50}
									mx='auto'
								>
									Ir para a prova
								</Button>
							</Link>
							<Text fontSize='sm' color='gray.600' mt={2}>Finalize todos os módulos para fazer a prova*</Text>
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}