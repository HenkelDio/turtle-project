import { Box, Button } from "@chakra-ui/react";
import { Dispatch } from "react";

interface IProps {
	setPage: Dispatch<React.SetStateAction<number>>;
	page: number;
	totalPages: number;
}

const Paginator: React.FC<IProps> = ({ setPage, page, totalPages }: IProps) => {
	return (
		<Box textAlign="center">
			{page > 1 && (
				<Button onClick={() => setPage((prevState: number) => prevState - 1)}>
					Voltar
				</Button>
			)}
			{totalPages !== page && (
				<Button onClick={() => setPage((prevState: number) => prevState + 1)}>
					Avançar
				</Button>
			)}
		</Box>
	);
};

export default Paginator;
