import { Container, Logo, Box, CloseSideMenu, ContainerMenu } from "./styles";
import { GiTurtle } from "react-icons/gi";
import {
	IoIosArrowForward,
	IoIosArrowDown,
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { BiSolidBookAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideMenuAdmin: React.FC = () => {
	const [isFold, setFold] = useState<string>("true");
	const [page, setPage] = useState<string>("");
	const [isOpenContainerMenu, setOpenContainerMenu] = useState<boolean>(false);

	useEffect(() => {
		if (localStorage.getItem("page_admin")) {
			setPage(localStorage.getItem("page_admin") ?? "users");
		}
	}, []);

	const handleFoldMenu = () => {
		setFold((prevState) => (prevState === "true" ? "false" : "true"));
	};

	const handleSetPage = (page: string) => {
		setPage(page);
		localStorage.setItem("page_admin", page);
	};

	return (
		<Container isfold={isFold}>
			<CloseSideMenu isfold={isFold} onClick={handleFoldMenu}>
				{isFold === "true" ? (
					<IoIosArrowDroprightCircle />
				) : (
					<IoIosArrowDropleftCircle />
				)}
			</CloseSideMenu>

			<Logo isfold={isFold}>
				<GiTurtle />
			</Logo>
			<div className="containerBox">
				<p>overview</p>
				<ContainerMenu
					isfold={isFold}
					onMouseEnter={() => setOpenContainerMenu(true)}
					onMouseLeave={() => setOpenContainerMenu(false)}
				>
					<Box
						style={{
							backgroundColor: page === "users" ? "#ccc" : "transparent",
						}}
						page={page}
						isfold={isFold}
					>
						<div>
							<BsFillPeopleFill />
						</div>
						<p>Usuários</p>
						{isFold && (
							<>
								{isOpenContainerMenu ? (
									<p>
										<IoIosArrowDown />
									</p>
								) : (
									<p>
										<IoIosArrowForward />
									</p>
								)}
							</>
						)}
					</Box>
					{isOpenContainerMenu && (
						<div className="options">
							<Link onClick={() => handleSetPage("users")} to="/admin/users">
								Gerenciar usuários
							</Link>
							<Link
								onClick={() => handleSetPage("users")}
								to="/admin/users/register"
							>
								Adicionar usuário
							</Link>
						</div>
					)}
				</ContainerMenu>
				<Link to="/admin/courses">
					<Box
						style={{
							backgroundColor:
								page === "admin-courses" ? "#ccc" : "transparent",
						}}
						page={page}
						isfold={isFold}
						onClick={() => handleSetPage("admin-courses")}
					>
						<div>
							<BiSolidBookAlt />
						</div>
						<p>Cursos</p>
					</Box>
				</Link>
				<Link to="/profile">
					<Box
						page={page}
						isfold={isFold}
						style={{
							backgroundColor: page === "profile" ? "#ccc" : "transparent",
						}}
						onClick={() => handleSetPage("profile")}
					>
						<div>
							<BsFillPersonFill />
						</div>
						<p>Perfil</p>
					</Box>
				</Link>
			</div>
			<div className="boxExit">
				<p>Sair</p>
			</div>
		</Container>
	);
};

export default SideMenuAdmin;
