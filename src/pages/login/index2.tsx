import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import useTurtleStore from "../../store";

export default function LoginPage() {

	const { setAuthenticated,  setCredentials} = useTurtleStore((state) => state);

	function login() {
		setCredentials({
			username: "Willian Henkel",
			type: "workplace",
		});
		setAuthenticated(true);
	}

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"}>Entre em sua conta</Heading>
					<Text fontSize={"lg"} color={"gray.600"}>
						para se divertir usando nossas{" "}
						<Text color={"blue.400"}>ferramentas</Text> ✌️
					</Text>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Stack spacing={4}>
						<FormControl id="email">
							<FormLabel>Email</FormLabel>
							<Input type="email" />
						</FormControl>
						<FormControl id="password">
							<FormLabel>Senha</FormLabel>
							<Input type="password" />
						</FormControl>
						<Stack spacing={10}>
							<Stack
								direction={{ base: "column", sm: "row" }}
								align={"start"}
								justify={"space-between"}
							>
								<Checkbox>Lembre de mim</Checkbox>
							</Stack>
							<Button onClick={() => login()} colorScheme="green">
								Entrar
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
