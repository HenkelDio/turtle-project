import { Container, Logo, Box } from "./styles"
import { GiTurtleShell } from 'react-icons/gi';
import { BiBook } from 'react-icons/bi';
import { LiaCertificateSolid } from 'react-icons/lia';
import { CgProfile } from 'react-icons/cg';

const SideMenu: React.FC = () => {
	return (
		<Container>
			<Logo>
				<GiTurtleShell />
				<p>TurtleSheel</p>
			</Logo>
			<div className="containerBox">
				<Box
				isSelected={true}
				>
					<BiBook />
					<p>Cursos</p>
				</Box>
				<Box>
					<LiaCertificateSolid />
					<p>Certificados</p>
				</Box>
				<Box>
					<CgProfile />
					<p>Perfil</p>
				</Box>
			</div>
		</Container>
	)
}

export default SideMenu;