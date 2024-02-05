import {
	Box,
	FormControl,
	FormHelperText,
	FormLabel,
	Radio,
	RadioGroup,
	Stack,
} from "@chakra-ui/react";
import { IOptions } from "../types";

interface IProps {
	title: string | undefined;
	options: IOptions[] | undefined;
	onSelect: any
}

export default function ExamQuestion({ title, options, onSelect }: IProps) {
	return (
		<Box bg="white" p={5} rounded={8} shadow={"lg"} marginBottom={4}>
		<FormControl as="fieldset">
			<FormLabel as="legend"><b>{title}</b></FormLabel>
			<RadioGroup defaultValue="" onChange={(value) => onSelect(value)}>
				<Stack spacing="24px">
					{options?.map((option) => {
						return <Radio key={option.question_option_id} value={option.question_option_letter}>{option.question_option_text}</Radio>;
					})}
				</Stack>
			</RadioGroup>
		</FormControl>
	</Box>
	);
}
