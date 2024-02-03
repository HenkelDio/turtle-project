import { Container } from "./styles";
import { Menu, MenuButton, MenuList, Icon, MenuItem } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ModuleBox: React.FC = () => {
	return (
		<Container>
			<p>Seu primeiro módulo</p>

			<div className="menuOptions">
				<Menu>
					<MenuButton>
						<Icon as={BsThreeDotsVertical} />
					</MenuButton>
					<MenuList>
						<MenuItem as="button">Editar</MenuItem>
						<MenuItem as="button">Excluir</MenuItem>
					</MenuList>
				</Menu>
			</div>
		</Container>
	);
};

export default ModuleBox;
