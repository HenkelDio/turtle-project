import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { courseMock } from "../mocks/states";
import { ModuleContainer } from "./ModuleContainer";

interface IProps {
	onClose: () => void,
	isOpen: boolean
}

export default function ModuleDrawer({ onClose, isOpen }: IProps) {
	return (
		<>
			<Drawer placement="left" onClose={onClose} isOpen={isOpen} size="sm">
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader borderBottomWidth='1px'>Nome do curso</DrawerHeader>
					<DrawerBody>
							<Box>
							{
								courseMock.map((module) => {
									return <ModuleContainer modules={module.modules} title={module.title} key={module.title} />
								})
							}
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}