import { useEffect, useState } from "react";
import Field from "../../components/profileField";
import { Container, ContainerFields } from "./styles";
import delay from "../../utils/delay";
import Loader from "../../components/loader";

const Profile: React.FC = () => {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		async function handleDelay() {
			setLoading(true);
			await delay();
			setLoading(false);
		}

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		handleDelay();

	}, [])

	if(isLoading) {
		return (
			<Loader />
		)
	}
	
	return(
		<Container>
			<h1>Meu perfil</h1>
			<ContainerFields>
				<Field title="Nome" content="Willian José Henkel de Deus"/>
				<Field title="CPF" content="124.400.389-11"/>
			</ContainerFields>
		</Container>
	)
}

export default Profile;