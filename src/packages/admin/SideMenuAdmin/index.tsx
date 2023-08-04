import { Container, Logo, Box, CloseSideMenu, ContainerMenu } from "./styles"
import { GiTurtleShell } from 'react-icons/gi';
import { GoPeople } from 'react-icons/go';
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const SideMenuAdmin: React.FC = () => {
	const [isFold, setFold] = useState<string>('true');
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
					isFold === 'true' ? <IoIosArrowDroprightCircle /> : <IoIosArrowDropleftCircle />
				}
			</CloseSideMenu>

			<Logo
				isfold={isFold}
			>
				<GiTurtleShell />
			</Logo>
			<div className="containerBox">
				<p>overview</p>
				<ContainerMenu
					isfold={isFold}
					onMouseEnter={() => setOpenContainerMenu(true)}
					onMouseLeave={() => setOpenContainerMenu(false)}
				>
				<Box
					style={{ backgroundColor: page === 'users' ? '#ccc' : 'transparent' }}
					page={page}
					isfold={isFold}
				>
					<div><GoPeople /></div>
					<p>Usuários</p>
					{
						isFold && <>
						{
						isOpenContainerMenu ? <p><IoIosArrowDown/></p> : <p><IoIosArrowForward /></p>
						}
					</> 
					}
				</Box>
				{
					isOpenContainerMenu && <div className="options">
					<Link onClick={() => handleSetPage('users')} to="/admin/users">Gerenciar usuários</Link>
					<Link onClick={() => handleSetPage('users')} to="/admin/users/register">Adicionar usuário</Link>
					</div>
				}
				</ContainerMenu>
				<Link to='/admin/courses'>
					<Box
						style={{ backgroundColor: page === 'admin-courses' ? '#ccc' : 'transparent' }}
						page={page}
						isfold={isFold}
						onClick={() => handleSetPage('admin-courses')}
					>
						<div><MdOutlineBookmarkAdd /></div>
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