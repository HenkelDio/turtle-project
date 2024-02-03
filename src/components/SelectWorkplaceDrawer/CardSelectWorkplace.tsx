import { Card } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface IProps {
	index: number,
	name: string,
	cnpj: string
	selectedWorkplace: number,
	setSelectedWorkplace: Dispatch<SetStateAction<number>>
}

const CardSelectWorkplace: React.FC<IProps> = ({ index, name, cnpj, selectedWorkplace, setSelectedWorkplace }: IProps) => {
	return (
		<Card 
			padding={5} 
			variant={selectedWorkplace === index ? 'filled' : 'outline'}
			cursor='pointer'
			onClick={() => setSelectedWorkplace(index)}
		>
        <p><b>{name}</b></p>
        <p>{cnpj}</p>
    </Card>
	)
}

export default CardSelectWorkplace;