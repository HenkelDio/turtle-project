import { Box, Flex, Input, Select } from "@chakra-ui/react";
import { useState } from "react";

interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	question: any
}

export default function Question({ question }: IProps) {

	function handleSetTitleQuestion(value: string) {
		question.question_title = value;
	}

	function handleSetQuestion(value: string, position: number) {
		question.options[position].text = value;
	}

	function handleSetCorrectAnswer(value: string) {
		question.correct_answer = value;
	} 

	return(
		<Box bg="white" p={5} rounded="lg" shadow="lg" mt={5}>
			<Input 
				onChange={e => handleSetTitleQuestion(e.target.value)}
				placeholder="Título da questão"
			/>
			
			<Flex justifyContent="center" align="center" gap={3} mt={4}>
				<Flex bg="gray.100" rounded="3xl" p={2} w={10} justifyContent="center"><b>A</b></Flex>
				<Input 
				onChange={e => handleSetQuestion(e.target.value, 0)}
				placeholder="Primeira opção"
			/>
			</Flex>
			
			<Flex justifyContent="center" align="center" gap={3} mt={4}>
				<Flex bg="gray.100" rounded="3xl" p={2} w={10} justifyContent="center"><b>B</b></Flex>
				<Input 
				onChange={e => handleSetQuestion(e.target.value, 1)}
				placeholder="Segunda opção"
			/>
			</Flex>

			<Flex justifyContent="center" align="center" gap={3} mt={4}>
				<Flex bg="gray.100" rounded="3xl" p={2} w={10} justifyContent="center"><b>C</b></Flex>
				<Input 
				onChange={e => handleSetQuestion(e.target.value, 2)}
				placeholder="Terceira opção"
			/>
			</Flex>

			<Flex justifyContent="center" align="center" gap={3} mt={4}>
				<Flex bg="gray.100" rounded="3xl" p={2} w={10} justifyContent="center"><b>D</b></Flex>
				<Input 
				onChange={e => handleSetQuestion(e.target.value, 3)}
				placeholder="Quarta opção"
			/>
			</Flex>

			<Select 
				placeholder='Selecione a opção correta' 
				mt={4} 
				w={300}
				onChange={e => handleSetCorrectAnswer(e.target.value)}
				>
				<option value='a'>Opção A</option>
				<option value='b'>Opção B</option>
				<option value='c'>Opção C</option>
				<option value='d'>Opção D</option>
			</Select>
	

		</Box>
	)
}