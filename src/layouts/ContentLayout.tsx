import {
	IconButton,
	Avatar,
	Box,
	CloseButton,
	Flex,
	HStack,
	VStack,
	Icon,
	useColorModeValue,
	Text,
	Drawer,
	DrawerContent,
	useDisclosure,
	BoxProps,
	FlexProps,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { FiUsers, FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { LuBook } from "react-icons/lu";
import { IconType } from "react-icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useTurtleStore from "../store";

interface LinkItemProps {
	name: string;
	icon: IconType;
	link: string;
}

interface NavItemProps extends FlexProps {
	icon: IconType;
	children: React.ReactNode;
}

interface MobileProps extends FlexProps {
	onOpen: () => void;
}

interface SidebarProps extends BoxProps {
	onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
	{ name: "Usuários", icon: FiUsers, link: "/users" },
	{ name: "Treinamentos", icon: LuBook, link: "/courses" },
];

const LinkWorkplaceItems: Array<LinkItemProps> = [
	{ name: "Usuários", icon: FiUsers, link: "/users" },
];

const SideBarContent = ({ onClose, ...rest }: SidebarProps) => {
	const { credentials } = useTurtleStore((state) => state);

	return (
		<Box
			transition="3s ease"
			bg={useColorModeValue("white", "gray.900")}
			borderRight="1px"
			borderRightColor={useColorModeValue("gray.200", "gray.700")}
			w={{ base: "full", md: 60 }}
			pos="fixed"
			h="full"
			{...rest}
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Text fontSize="lg" fontWeight="bold">
					ST Treinamentos
				</Text>
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>

			{credentials.type === "admin" &&
				LinkItems.map((link) => (
					<Link to={link.link}>
						<NavItem key={link.name} icon={link.icon}>
							{link.name}
						</NavItem>
					</Link>
				))}

			{credentials.type === "workplace" &&
				LinkWorkplaceItems.map((link) => (
					<Link to={link.link}>
						<NavItem key={link.name} icon={link.icon}>
							{link.name}
						</NavItem>
					</Link>
				))}
		</Box>
	);
};

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
	return (
		<Box
			as="a"
			href="#"
			style={{ textDecoration: "none" }}
			_focus={{ boxShadow: "none" }}
		>
			<Flex
				align="center"
				p="4"
				mx="4"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_hover={{
					bg: "#099268",
					color: "white",
				}}
				{...rest}
			>
				{icon && (
					<Icon
						mr="4"
						fontSize="16"
						_groupHover={{
							color: "white",
						}}
						as={icon}
					/>
				)}
				{children}
			</Flex>
		</Box>
	);
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
	const { setAuthenticated, setCredentials, credentials } = useTurtleStore((state) => state);

	const navigate = useNavigate();

	console.log("credentials", credentials)

	function logoff() {
		setCredentials({
			type: '',
			username: '',
			email: ''
		});
		setAuthenticated(false)
		navigate('/login')
	}

	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue("white", "gray.900")}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue("gray.200", "gray.700")}
			justifyContent={{ base: "space-between", md: "flex-end" }}
			{...rest}
		>
			<IconButton
				display={{ base: "flex", md: "none" }}
				onClick={onOpen}
				variant="outline"
				aria-label="open menu"
				icon={<FiMenu />}
			/>

			<Text
				display={{ base: "flex", md: "none" }}
				fontSize="2xl"
				fontWeight="bold"
			>
				ST Treinamentos
			</Text>

			<HStack spacing={{ base: "0", md: "6" }}>
				<IconButton
					size="lg"
					variant="ghost"
					aria-label="open menu"
					icon={<FiBell />}
				/>
				<Flex alignItems={"center"}>
					<Menu>
						<MenuButton
							py={2}
							transition="all 0.3s"
							_focus={{ boxShadow: "none" }}
						>
							<HStack>
								<Avatar
									size={"sm"}
									src={
										"https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									}
								/>
								<VStack
									display={{ base: "none", md: "flex" }}
									alignItems="flex-start"
									spacing="1px"
									ml="2"
								>
									<Text fontSize="sm">{credentials.username}</Text>
									<Text fontSize="xs" color="gray.600">
										Administrador
									</Text>
								</VStack>
								<Box display={{ base: "none", md: "flex" }}>
									<FiChevronDown />
								</Box>
							</HStack>
						</MenuButton>
						<MenuList
							bg={useColorModeValue("white", "gray.900")}
							borderColor={useColorModeValue("gray.200", "gray.700")}
						>
							{/* <Link to="/profile">
								<MenuItem>Perfil</MenuItem>
							</Link> */}
							{/* <MenuItem>Configurações</MenuItem> */}
							<MenuDivider />
							<MenuItem onClick={logoff}>Sair</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};

const ContentLayout = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
			<SideBarContent
				onClose={() => onClose}
				display={{ base: "none", md: "block" }}
			/>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SideBarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav onOpen={onOpen} />

			<Box ml={{ base: 0, md: 60 }} p="4">
				<Outlet />
			</Box>
		</Box>
	);
};

export default ContentLayout;
