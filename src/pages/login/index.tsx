import { Container, BackIcon, Button, Loader, Overlay, Form } from "./styles";
import Input from "../../components/Input";
import delay from "../../utils/delay";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useState } from "react";
import RegisterForm from "../../components/RegisterForm";
import { IoIosArrowBack } from "react-icons/io";

const Login: React.FC = () => {
	const [isLoading, setLoading] = useState(false);
	const [step, setStep] = useState(1);

	const hangleAuthenticate = async () => {
		setLoading(true)
		await delay();
		setLoading(false)
	}

	return (
		<Overlay>
			<div className="bg-layout"></div>
			<Container>

			{
				isLoading 
				? <Loader><span className="loader"></span></Loader>
				: 
				<>
				{
					step === 2 && 
					<BackIcon onClick={() => setStep(1)}>
					<IoIosArrowBack />
				</BackIcon>
				}

				<Form>
					<h1 className="animate-form">Login</h1>
					{
						step === 1 && 
						<p className="animate-form">Olá! insira seu e-mail para entrar</p>
					}
					{
						step === 2 && 
						<p className="animate-form">Agora insira sua senha super secreta</p>
					}


					{
						step === 1 &&
						<div className="animate-form">
						<RegisterForm>
							<label>Seu e-mail</label>
							<Input type="email" placeholder="e-mail" />
						</RegisterForm>
						</div>
					}
					{
						step === 2 &&
						<div className="animate-form">
						<RegisterForm>
							<label>Sua senha</label>
							<Input type="password" placeholder="senha" />
						</RegisterForm>
						</div>
					}

				

					{
						step === 1 &&
						<div className="animate-form">
						<Button
						// eslint-disable-next-line @typescript-eslint/no-misused-promises
						onClick={() => setStep(2)}
					>Continuar
					</Button>
					</div>
					}

					{
						step === 2 && 
						<div className="animate-form">
						<Button
						// eslint-disable-next-line @typescript-eslint/no-misused-promises
						onClick={hangleAuthenticate}
					>Entrar <span><AiOutlineArrowRight /></span>
					</Button>
					</div>
					}
				</Form>
				</>
			}

			</Container>
		</Overlay>
	)
}

export default Login;