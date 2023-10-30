import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	useColorModeValue,
	Avatar,
	AvatarBadge,
	IconButton,
	Center,
	useDisclosure,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import GenericModal from '../../components/GenericModal';
import useTurtleStore from '../../store';

export default function UserProfileEdit() {
	const { userIcon, setUserIcon } = useTurtleStore((state) => state);
	const { onOpen, onClose, isOpen } = useDisclosure()


	return (
		<>
			<Flex
				minH={'100vh'}
				align={'center'}
				justify={'center'}>
				<Stack
					spacing={4}
					w={'full'}
					maxW={'md'}
					bg={useColorModeValue('white', 'gray.700')}
					rounded={'xl'}
					boxShadow={'lg'}
					p={6}
					my={12}>
					<Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
						Perfil
					</Heading>
					<FormControl id="userName">
						<FormLabel>Icone do usuário</FormLabel>
						<Stack direction={['column', 'row']} spacing={6}>
							<Center>
								<Avatar size="xl" src={userIcon}>
									<AvatarBadge
										as={IconButton}
										size="sm"
										rounded="full"
										top="-10px"
										colorScheme="red"
										aria-label="remove Image"
										icon={<SmallCloseIcon />}
									/>
								</Avatar>
							</Center>
							<Center w="full">
								<Button w="full" onClick={onOpen}>Mudar icone</Button>
							</Center>
						</Stack>
					</FormControl>
					<FormControl id="userName" isRequired>
						<FormLabel>Nome de usuário</FormLabel>
						<Input
							placeholder="Seu nome de usuário"
							_placeholder={{ color: 'gray.500' }}
							type="text"
						/>
					</FormControl>
					<FormControl id="email" isRequired>
						<FormLabel>Email</FormLabel>
						<Input
							placeholder="your-email@example.com"
							_placeholder={{ color: 'gray.500' }}
							type="email"
						/>
					</FormControl>
					<FormControl id="password" isRequired>
						<FormLabel>Senha</FormLabel>
						<Input
							placeholder="Sua senha"
							_placeholder={{ color: 'gray.500' }}
							type="password"
						/>
					</FormControl>
					<Stack spacing={6} direction={['column', 'row']}>
						<Button
							bg={'red.400'}
							color={'white'}
							w="full"
							_hover={{
								bg: 'red.500',
							}}>
							Cancelar
						</Button>
						<Button
							bg={'blue.400'}
							color={'white'}
							w="full"
							_hover={{
								bg: 'blue.500',
							}}>
							Salvar
						</Button>
					</Stack>
				</Stack>
			</Flex>

			<GenericModal 
				onClose={onClose} 
				isOpen={isOpen}
				modalTitle='Mudar icone'
			>
				<Input placeholder='Cole aqui seu novo ícone' onChange={(e) => setUserIcon(e.target.value)} defaultValue={userIcon}/>
			</GenericModal>
		</>
	)
}