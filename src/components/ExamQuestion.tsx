import { Box, FormControl, FormHelperText, FormLabel, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { IOptions } from "../types";

interface IProps {
	title: string | undefined,
	options: IOptions[] | undefined
}

export default function ExamQuestion({ title, options }: IProps) {
	return (
		<Box bg="white" p={5} rounded={8} shadow={"lg"} marginBottom={4}>
			<FormControl as='fieldset'>
				<FormLabel as='legend'>
					{title}
				</FormLabel>
				<RadioGroup defaultValue='Itachi'>
					<Stack spacing='24px'>
						{
							options?.map((option) => {
								return <Radio value={option.option}>{option.text}</Radio>
							})
						}
					</Stack>
				</RadioGroup>
				{/* <FormHelperText>Select only if you're a fan.</FormHelperText> */}
			</FormControl>
		</Box>
	)
}