import { useEffect, useMemo, useState } from "react";
import Input from "../../components/Input";
import CertificateCard from "../../components/user/CertificateCard";
import { Container, ContainerCertificates } from "./styles";
import delay from "../../utils/delay";
import Loader from "../../components/loader";

const Certificates: React.FC = () => {
	const [cards] = useState([
		{title: 'Ir ao mercado: como fazer? E como montar um macaco'},
		{title: 'Python básico para iniciantes'},
		{title: 'Como fazer uma API REST em Node.JS e ir ao mercado'},
	]);
	const [searchTerm, setSearchTerm] = useState('');
	const [isLoading, setLoading] = useState(true);

	const filteredCards = useMemo(() => cards.filter((card) => (
    card.title.toLowerCase().includes(searchTerm.toLowerCase()))), [cards, searchTerm]);

	const handleSearch = (e: any) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		setSearchTerm(e.target.value);
	}

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
			<h1>Seus certificados</h1>
			<Input 
				placeholder="Pesquise pelo nome do certificado"
				onChange={(e) => handleSearch(e)}
			/>
			{
				filteredCards.length > 0 
				? <span>{filteredCards.length} certificados encontrados</span>
				: <span>Não foi encontrado o certificado com o nome: {searchTerm}</span>
			}
			<ContainerCertificates>
				{
					filteredCards.map((card) => {
						return <CertificateCard 
							title={card.title}
						/>
					})
				}
			</ContainerCertificates>
		</Container>
	)
}

export default Certificates;