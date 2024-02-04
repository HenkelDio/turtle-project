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
} from "@chakra-ui/react";
import useTurtleStore from "../../store";
import { useState } from "react";
import delay from "../../utils/delay";

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const [secondStep, setSecondStep] = useState(false);
	const [buttonLoading, setButtonLoading] = useState(false);
	const { setAuthenticated, setCredentials } = useTurtleStore((state) => state);

	function login() {
		setCredentials({
			username: "Willian Henkel",
			type: "admin",
		});
		setAuthenticated(true);
	}

	async function nextStep() {
		setButtonLoading(true);
		await delay();
		setSecondStep(true);
		setButtonLoading(false);
	}

	function Password() {
		return (
			<>
				<FormControl id="password">
					<FormLabel>Senha</FormLabel>
					<Input type={showPassword ? "text" : "password"} />
				</FormControl>
				<Stack spacing={6}>
					<Stack
						direction={{ base: "column", sm: "row" }}
						align={"start"}
						justify={"space-between"}
					>
						<FormControl display="flex" alignItems="center">
							<FormLabel htmlFor="email-alerts" mb="0">
								Mostrar senha
							</FormLabel>
							<Switch
								id="email-alerts"
								onChange={(e) => setShowPassword(true)}
							/>
						</FormControl>
						<p>a{showPassword ? "true" : "false"}</p>
					</Stack>
					<Button
						colorScheme={"green"}
						variant={"solid"}
						onClick={() => login()}
					>
						Entrar
					</Button>
				</Stack>
			</>
		);
	}

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
						<Input type="email" />
					</FormControl>

					{secondStep && <Password />}
					{!secondStep && (
						// eslint-disable-next-line @typescript-eslint/no-misused-promises
						<Button
							colorScheme={"green"}
							variant={"solid"}
							// eslint-disable-next-line @typescript-eslint/no-misused-promises
							onClick={() => nextStep()}
						>
							{buttonLoading ? <Spinner /> : "Próximo"}
						</Button>
					)}
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
