import {
	Box,
	Center,
	Text,
	Stack,
	Button,
	useColorModeValue,
} from '@chakra-ui/react'
import { ICertificate, ICourse } from '../types'
import { Link } from 'react-router-dom'

interface IProps {
	type: string,
	courseData?: ICourse,
	certificateData?: ICertificate
}

export default function GenericCard({ type, courseData, certificateData }: IProps) {

	function Header() {
		return (
			<Text
				fontSize={'sm'}
				fontWeight={500}
				bg={useColorModeValue('green.50', 'green.900')}
				p={2}
				px={3}
				color={'green.500'}
				rounded={'full'}>

				{type === "certificate" ? "Concluído" : "Curso"}
			</Text>
		)
	}

	function Body() {
		return (
			<Stack direction={'column'} align={'center'} justify={'center'} h={110}>
				<Text fontSize={'2xl'} fontWeight={800}>
					{type === "certificate" ? certificateData?.title : courseData?.courseTitle}
				</Text>
				<Text color={'gray.500'}>{type === "certificate" ? "Certificado" : courseData && `Em progresso - ${courseData?.percentage}%`}</Text>
			</Stack>
		)
	}

	return (
		<Center py={0}>
			<Box
				maxW={'400px'}
				w={'full'}
				bg={useColorModeValue('white', 'gray.800')}
				boxShadow={'2xl'}
				rounded={'md'}
				overflow={'hidden'}>
				<Stack
					textAlign={'center'}
					p={6}
					color={useColorModeValue('gray.800', 'white')}
					align={'center'}>
					<Header />
					<Body />
				</Stack>

				<Box px={6} pb={10}>

					<Link to={`/course/${courseData?.id}/${courseData?.modules[0].id}/${courseData?.modules[0].modules[0].id}`}>
						<Button
							w={'full'}
							bg={'green.400'}
							color={'white'}
							rounded={'xl'}
							_hover={{
								bg: 'green.500',
							}}
							_focus={{
								bg: 'green.500',
							}}>
							{type === "certificate" ? 'BAIXAR' : 	"Acessar curso"}
						</Button>
					</Link>
				</Box>
			</Box>
		</Center>
	)
}