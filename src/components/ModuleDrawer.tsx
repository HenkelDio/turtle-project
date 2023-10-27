import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";

import { ModuleContainer } from "./ModuleContainer";
import { IModule } from "../types";
import Button from "./Button";
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
					<DrawerHeader borderBottomWidth='1px'>{courseName}</DrawerHeader>
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
								<Button>
									Ir para a prova
								</Button>
							</Link>
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}