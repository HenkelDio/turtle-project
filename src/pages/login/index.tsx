import { useState } from 'react';
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
} from '@chakra-ui/react';
import useTurtleStore from '../../store';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [secondStep, setSecondStep] = useState(false);
	const [buttonLoading, setButtonLoading] = useState(false);
	const { setAuthenticated, setCredentials } = useTurtleStore((state) => state);


	const handleLogin = () => {
		setCredentials({
			username: "Willian Henkel",
			type: "admin"
		})
		setAuthenticated(true)
	};

	const handleNextStep = async () => {
		setButtonLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setSecondStep(true);
		setButtonLoading(false);
	};

	const handleTogglePassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	return (
		<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
			<Flex p={8} flex={1} align={'center'} justify={'center'} bg={'white'}>
				<Stack spacing={4} w={'full'} maxW={'md'}>
					<Heading fontSize={'lg'} opacity={0.4}>
						ST Treinamentos
					</Heading>
					<Heading fontSize={'2xl'}>Entre em sua conta</Heading>
					<FormControl id="email">
						<FormLabel>Email</FormLabel>
						<Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					</FormControl>

					{secondStep && (
						<>
							<FormControl id="password">
								<FormLabel>Senha</FormLabel>
								<Input
									type={showPassword ? 'text' : 'password'}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</FormControl>
							<Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
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
						<Button colorScheme={'green'} variant={'solid'} onClick={secondStep ? handleLogin : handleNextStep}>
							{buttonLoading ? <Spinner /> : secondStep ? 'Entrar' : 'Próximo'}
						</Button>
					</Stack>
				</Stack>
			</Flex>
			<Flex flex={1} display={{ base: 'none', md: 'flex' }}>
				<Image
					alt={'Login Image'}
					objectFit={'cover'}
					src={
						'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
					}
				/>
			</Flex>
		</Stack>
	);
}
