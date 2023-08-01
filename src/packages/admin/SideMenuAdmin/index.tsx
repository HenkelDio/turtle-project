import { Container, Logo, Box, CloseSideMenu, ContainerMenu } from "./styles"
import { GiTurtleShell } from 'react-icons/gi';
import { GoPeople } from 'react-icons/go';
import { IoIosArrowForward, IoIosArrowDown} from 'react-icons/io';
import { LiaCertificateSolid } from 'react-icons/lia';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { RiMenu4Fill } from 'react-icons/ri';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideMenuAdmin: React.FC = () => {
	const [isFold, setFold] = useState<string>('false');
	const [page, setPage] = useState<string>('');
	const [isOpenContainerMenu, setOpenContainerMenu] = useState<boolean>(false);


	useEffect(() => {
		if (localStorage.getItem('page_admin')) {
			setPage(localStorage.getItem('page_admin') ?? 'users')
		}
	}, [])

	const handleFoldMenu = () => {
		setFold(
			prevState => prevState === 'true' ? 'false' : 'true'
		)
	}

	const handleSetPage = (page: string) => {
		setPage(page)
		localStorage.setItem('page_admin', page);
	}

	return (
		<Container
			isfold={isFold}
		>
			<CloseSideMenu
				isfold={isFold}
				onClick={handleFoldMenu}
			>
				{
					isFold ? <RiMenu4Fill /> : <MdOutlineMenuOpen />
				}
			</CloseSideMenu>

			<Logo
				isfold={isFold}
			>
				<GiTurtleShell />
			</Logo>
			<div className="containerBox">
				<p>overview</p>
				<ContainerMenu>
				<Box
					onClick={() => setOpenContainerMenu(prevState => !prevState)}
					page={page}
					isfold={isFold}
				>
					<div><GoPeople /></div>
					<p>Usuários</p>
					<div>{isOpenContainerMenu ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
				</Box>
				{
					isOpenContainerMenu && <>
					<Link to="/admin/users">Gerenciar usuários</Link>
					<Link to="/admin/users/register">Adicionar usuário</Link>
					</>
				}
				</ContainerMenu>
				<Link to='/certificates'>
					<Box
						style={{ backgroundColor: page === 'admin-courses' ? '#ccc' : 'transparent' }}
						page={page}
						isfold={isFold}
						onClick={() => handleSetPage('admin-courses')}
					>
						<div><LiaCertificateSolid /></div>
						<p>Cursos</p>
					</Box>
				</Link>
				<Link to='/profile'>
					<Box
						page={page}
						isfold={isFold}
						style={{ backgroundColor: page === 'profile' ? '#ccc' : 'transparent' }}
						onClick={() => handleSetPage('profile')}
					>
						<div><CgProfile /></div>
						<p>Perfil</p>
					</Box>
				</Link>
			</div>
			<div className="boxExit">
				<p>Sair</p>
			</div>
		</Container>
	)
}

export default SideMenuAdmin;