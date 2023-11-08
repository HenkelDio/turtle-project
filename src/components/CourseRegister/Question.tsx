import { Box, Flex, Input, Select } from "@chakra-ui/react";
import { useState } from "react";

interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	question: any
}

export default function Question({ question }: IProps) {
	const [questionTitle, setQuestionTitle] = useState(question.question_title);

	return(
		<Box bg="white" p={5} rounded="lg" shadow="lg" mt={5}>
			<Input 
				value={questionTitle}
				placeholder="Título da questão"
			/>
			
			<Flex justifyContent="center" align="center" gap={3} mt={4}>
				<Flex bg="gray.100" rounded="3xl" p={2} w={10} justifyContent="center"><b>A</b></Flex>
				<Input 
				placeholder="Primeira opção"
			/>
			</Flex>
			
			<Flex justifyContent="center" align="center" gap={3} mt={4}>
				<Flex bg="gray.100" rounded="3xl" p={2} w={10} justifyContent="center"><b>B</b></Flex>
				<Input 
				placeholder="Segunda opção"
			/>
			</Flex>

			<Flex justifyContent="center" align="center" gap={3} mt={4}>
				<Flex bg="gray.100" rounded="3xl" p={2} w={10} justifyContent="center"><b>C</b></Flex>
				<Input 
				placeholder="Terceira opção"
			/>
			</Flex>

			<Flex justifyContent="center" align="center" gap={3} mt={4}>
				<Flex bg="gray.100" rounded="3xl" p={2} w={10} justifyContent="center"><b>D</b></Flex>
				<Input 
				placeholder="Quarta opção"
			/>
			</Flex>

			<Select placeholder='Selecione a opção correta' mt={4} w={300}>
				<option value='a'>Opção A</option>
				<option value='b'>Opção B</option>
				<option value='c'>Opção C</option>
				<option value='d'>Opção C</option>
			</Select>
	

		</Box>
	)
}