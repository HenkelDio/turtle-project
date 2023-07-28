import { Container, Logo, Box, CloseSideMenu } from "./styles"
import { GiTurtleShell } from 'react-icons/gi';
import { BiBook } from 'react-icons/bi';
import { LiaCertificateSolid } from 'react-icons/lia';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { RiMenu4Fill } from 'react-icons/ri';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideMenuAdmin: React.FC = () => {
	const [isFold, setFold] = useState<string>('false');
	const [page, setPage] = useState<string>('');


	useEffect(() => {
		if(localStorage.getItem('page_admin')) {
			setPage(localStorage.getItem('page_admin')?? 'users')
		}
	})

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
				<Link to='/admin/users'>
					<Box
					page={page}
					isfold={isFold}
					style={{ backgroundColor: page === 'users' ? '#ccc' : 'transparent'}}
					onClick={() => handleSetPage('users')}
					>
						<BiBook />
						<p>Usuários</p>
					</Box>
				</Link>
				<Link to='/certificates'>
				<Box 
				style={{ backgroundColor: page === 'admin-courses' ? '#ccc' : 'transparent'}}
				page={page}
				isfold={isFold}
				onClick={() => handleSetPage('admin-courses')}
				>
						<LiaCertificateSolid />
						<p>Cursos</p>
					</Box>
				</Link>
				<Link to='/profile'>
					<Box 
					page={page}
					isfold={isFold}
					style={{ backgroundColor: page === 'profile' ? '#ccc' : 'transparent'}}
					onClick={() => handleSetPage('profile')}
					>	
						<CgProfile />
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