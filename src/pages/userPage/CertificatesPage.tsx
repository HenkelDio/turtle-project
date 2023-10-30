import { Box, Flex, Input } from "@chakra-ui/react";
import GenericCard from "../../components/GenericCard";
import { CertificateMock } from "../../mocks/states";

export default function CertificatesPage() {
	return (
		<Box p={"20px"} textAlign="center">
			<h1 style={{ fontSize: '2rem', marginBottom: '50px'}}>Meus certificados</h1>

			<Input
				variant="filled"
				bg="white"
				_hover={{
					background: 'white'
				}}
				_focus={{
					background: 'white'
				}}
				placeholder="Pesquise pelo nome do certificado"
			/>

			<Flex gap={5} wrap="wrap" mt={50} justifyContent='center'>
				{
					CertificateMock?.map((card) => {
						return <GenericCard
							key={card.title}
							type="certificate"
							certificateData={card}
						/>
					})
				}
			</Flex>

		</Box>
	)
}