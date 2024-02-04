import { Card } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { IWorkplace } from "../../types";

interface IProps {
	actualWorkplace: IWorkplace,
	selectedWorkplace: IWorkplace | undefined,
	setSelectedWorkplace: Dispatch<SetStateAction<IWorkplace | undefined>>
}

const CardSelectWorkplace: React.FC<IProps> = ({ actualWorkplace, selectedWorkplace, setSelectedWorkplace }: IProps) => {
	return (
		<Card 
			padding={5} 
			variant={selectedWorkplace?.company_register === actualWorkplace.company_register ? 'filled' : 'outline'}
			cursor='pointer'
			onClick={() => setSelectedWorkplace(actualWorkplace)}
		>
        <p><b>{actualWorkplace.company_name}</b></p>
        <p>{actualWorkplace.company_register}</p>
    </Card>
	)
}

export default CardSelectWorkplace;