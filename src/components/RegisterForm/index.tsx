import React from "react";
import { Container } from "./styles";

interface IProps {
	children: any;
}

const RegisterForm: React.FC<IProps> = ({ children }: IProps) => {
	return <Container>{children}</Container>;
};

export default RegisterForm;
