import { Container, Logo, Box, CloseSideMenu } from "./styles"
import { GiTurtleShell } from 'react-icons/gi';
import { BiBook } from 'react-icons/bi';
import { LiaCertificateSolid } from 'react-icons/lia';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { RiMenu4Fill } from 'react-icons/ri';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideMenuStudent: React.FC = () => {
	const [isFold, setFold] = useState<string>('false');
	const [page, setPage] = useState<string>('');

	useEffect(() => {
		if(localStorage.getItem('page_student')) {
			setPage(localStorage.getItem('page_student')?? 'courses')
		}
	}, [])

	const handleFoldMenu = () => {
		setFold(
			prevState => prevState === 'true' ? 'false' : 'true'
		)
	}

	const handleSetPage = (page: string) => {
		setPage(page)
		localStorage.setItem('page_student', page);
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
				<Link to='/courses'>
					<Box
					page={page}
					isfold={isFold}
					style={{ backgroundColor: page === 'courses' ? '#ccc' : 'transparent'}}
					onMouseDown={() => handleSetPage('courses')}
					>
						<div><BiBook /></div>
						<p>Cursos</p>
					</Box>
				</Link>
				<Link to='/certificates'>
				<Box 
				style={{ backgroundColor: page === 'certificates' ? '#ccc' : 'transparent'}}
				page={page}
				isfold={isFold}
				onClick={() => handleSetPage('certificates')}
				>
						<div><LiaCertificateSolid /></div>
						<p>Certificados</p>
					</Box>
				</Link>
				<Link to='/profile'>
					<Box 
					page={page}
					isfold={isFold}
					style={{ backgroundColor: page === 'profile' ? '#ccc' : 'transparent'}}
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

export default SideMenuStudent;