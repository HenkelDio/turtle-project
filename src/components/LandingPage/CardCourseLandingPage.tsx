import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";

export default function CardCourseLandingPage() {
	return (
		<Card maxW="sm">
			<CardBody>
				<Stack mt="6" spacing="3">
					<Heading size="md">NR 20: Incêndio</Heading>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab
						dolor perspiciatis deleniti alias adipisci molestias voluptates
						officia impedit aperiam eaque optio beatae, nisi aliquam ratione.
						Magni numquam impedit tempore.
					</Text>
					<Text color="blue.600" fontSize="2xl">
						R$ 400,00
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing="2">
					<Button variant="solid" colorScheme="blue">
						Comprar agora
					</Button>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
}
