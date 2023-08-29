import { useState } from "react";
import { Container } from "./styles";
import { AiFillDelete } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdModeEditOutline } from 'react-icons/md';

const ModuleBox: React.FC = () => {
	const [isOptionsOpen, setOptionsOpen] = useState<boolean>();

	const handleOpenOptions = () => {
		setOptionsOpen((prevState) => !prevState);
	}

	return (
		<Container>
			<p>Seu primeiro módulo</p>


			<div
				className="menuOptions"
				onClick={handleOpenOptions}
			><BsThreeDotsVertical /></div>
			{
				isOptionsOpen &&
				<div className="options">
					<span className="delete"><AiFillDelete /> excluir</span>
					<span className="edit"><MdModeEditOutline /> editar</span>
				</div>
			}
		</Container>
	)
}

export default ModuleBox;