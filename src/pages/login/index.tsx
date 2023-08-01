import useTurtleStore from "../../store";
import { useHistory } from "react-router-dom";
import { Container, FieldLogin, Button, Loader } from "./styles";
import Input from "../../components/Input";
import delay from "../../utils/delay";
import { useState } from "react";

const Login: React.FC = () => {
	const { setAuthenticated, setCredentials } = useTurtleStore((state) => state);
	const [isLoading, setLoading] = useState(false);

	const history = useHistory();

	const hangleAuthenticate = async () => {
		setLoading(true)
		await delay();
		setLoading(false)
		setCredentials({type: 'admin'})
		setAuthenticated(true);
		history.push('/courses');
	}

	return(
		<Container>
		<h1>Login</h1>
		<FieldLogin>
			<label>Seu e-mail</label>
			<Input type="email" placeholder="e-mail"/>
		</FieldLogin>
		<FieldLogin>
			<label>Sua senha</label>
			<Input type="password" placeholder="senha"/>
		</FieldLogin>

		{
			isLoading 
			? <Loader>
				<span className='loader'></span>
			</Loader>
			: <Button
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					onClick={hangleAuthenticate}
				>Entrar</Button>
		}
		
		</Container>
	)
}

export default Login;