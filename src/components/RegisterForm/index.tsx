import React from "react";
import { Container } from "./styles";

interface IProps {
	error: string,
	children: any,
}

const RegisterForm: React.FC<IProps> = ({ error, children }: IProps) => {
	return(
		<Container>
			{children}
			{error && <span>{error}</span>}
		</Container>
	)
}

export default RegisterForm;