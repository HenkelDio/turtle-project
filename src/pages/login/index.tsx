/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from "react";
import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Image,
	Switch,
	Spinner,
	useToast,
} from "@chakra-ui/react";
import useTurtleStore from "../../store";
import { ICheckEmail, ILogin, ILoginAdmin } from "../../types";
import { authLogin, authLoginAdmin, createPassword, verifyEmail } from "../../services/usersService";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [secondStep, setSecondStep] = useState(false);
	const [buttonLoading, setButtonLoading] = useState(false);
	const [actualPassword, setActualPassword] = useState('');
	const [type, setType] = useState("");
	const [username, setUsername] = useState("");
	const [document, setDocument] = useState("");
	const { setAuthenticated, setCredentials, credentials } = useTurtleStore(
		(state) => state,
	);
	const [firstLogin, setFirstLogin] = useState(false);
	const toast = useToast();

	const handleLogin = (username: string) => {
		setCredentials({
			username: username,
			type: type,
			email: email,
			document: document
		});
		setAuthenticated(true);
	};

	async function login() {

		if(type === 'admin') {

			const data: ILoginAdmin = {
				admin_email: email,
				admin_password: actualPassword
			};

			const response = await authLoginAdmin(data);
			

			if(response.data) {
				if(response.data.auth) {
					console.log(response.data)
					setUsername(response.data.adminInfoJSON.admin_name);
					handleLogin(response.data.adminInfoJSON.admin_name);
				} else {
					toast({
						title: "Erro.",
						description: "Senha ou e-mail inválidos",
						status: "error",
						duration: 5000,
						isClosable: true,
					});
				}
			} else {
				toast({
					title: "Erro.",
					description: "Não foi possível realizar o login. Tente novamente",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}
		} else {
			const data: ILogin = {
				student_email: email,
				student_password: actualPassword,
			};

			const response = await authLogin(data);
			

			if(response.data) {
				if(response.data.auth) {
					console.log(response.data.studentInfoJson.student_document)
					setUsername(response.data.studentInfoJson.student_name);
					setDocument(response.data.studentInfoJson.student_document)
					handleLogin(username);
				} else {
					toast({
						title: "Erro.",
						description: "Senha ou e-mail inválidos",
						status: "error",
						duration: 5000,
						isClosable: true,
					});
				}
			} else {
				toast({
					title: "Erro.",
					description: "Não foi possível realizar o login. Tente novamente",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}
		}

		
	}

	async function handleCreatePassword() {
		const data: ILogin = {
			student_email: email,
			student_password: confirmPassword,
		};

		const response = await createPassword(data);

		if (response.data) {
			toast({
				title: "Sucesso.",
				description: "Senha criada com sucesso.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
			setUsername(response.data.user.student_name);
			handleLogin(response.data.user.student_name);
		} else {
			toast({
				title: "Erro.",
				description: "Não foi possível criar a senha",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	}

	const handleNextStep = async () => {
		const data: ICheckEmail = {
			email: email,
		};
		setButtonLoading(true);
		const response = await verifyEmail(data);

		if (response.data) {
			if (response.data.found) {
				setFirstLogin(response.data.first_login);
				console.log(response.data);
				setType(response.data.type);
				setSecondStep(true);
			} else {
				toast({
					title: "Erro.",
					description: "E-mail não encontrado",
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			}
		}

		setButtonLoading(false);
		// await new Promise((resolve) => setTimeout(resolve, 1000));
		// setSecondStep(true);
		// setButtonLoading(false);
	};

	const handleTogglePassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	return (
		<Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
			<Flex p={8} flex={1} align={"center"} justify={"center"} bg={"white"}>
				<Stack spacing={4} w={"full"} maxW={"md"}>
					<Heading fontSize={"lg"} opacity={0.4}>
						ST Treinamentos
					</Heading>
					<Heading fontSize={"2xl"}>Entre em sua conta</Heading>
					<FormControl id="email">
						<FormLabel>Email</FormLabel>
						<Input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FormControl>

					{secondStep && (
						<>
							<FormControl id="password">
								{
									!firstLogin && <div>
									<FormLabel>Senha</FormLabel>
									<Input
										type={showPassword ? "text" : "password"}
										value={actualPassword}
										onChange={(e) => setActualPassword(e.target.value)}
									/>
								</div> 
								}

								{firstLogin && (
									<>
										<div>
											<FormLabel>Senha</FormLabel>
											<Input
												type={showPassword ? "text" : "password"}
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>
										<div>
											<FormLabel>Confirme a senha</FormLabel>
											<Input
												type={showPassword ? "text" : "password"}
												value={confirmPassword}
												onChange={(e) => setConfirmPassword(e.target.value)}
											/>
										</div>
									</>
								)}

								{password !== confirmPassword && (
									<p style={{ color: "red" }}>
										As senhas não coincidem. Por favor, insira senhas iguais.
									</p>
								)}
							</FormControl>
							<Stack
								direction={{ base: "column", sm: "row" }}
								align={"start"}
								justify={"space-between"}
							>
								<FormControl display="flex" alignItems="center">
									<FormLabel htmlFor="email-alerts" mb="0">
										Mostrar senha
									</FormLabel>
									<Switch id="email-alerts" onChange={handleTogglePassword} />
								</FormControl>
							</Stack>
						</>
					)}

					<Stack spacing={6}>
						{!firstLogin && (
							<Button
								colorScheme={"green"}
								variant={"solid"}
								onClick={secondStep ? login : handleNextStep}
							>
								{buttonLoading ? (
									<Spinner />
								) : secondStep ? (
									"Entrar"
								) : (
									"Próximo"
								)}
							</Button>
						)}

						{firstLogin && (
							<Button
								colorScheme={"green"}
								variant={"solid"}
								onClick={handleCreatePassword}
							>
								{buttonLoading ? <Spinner /> : "Criar senha e entrar"}
							</Button>
						)}
					</Stack>
				</Stack>
			</Flex>
			<Flex flex={1} display={{ base: "none", md: "flex" }}>
				<Image
					alt={"Login Image"}
					objectFit={"cover"}
					src={
						"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
					}
				/>
			</Flex>
		</Stack>
	);
}
