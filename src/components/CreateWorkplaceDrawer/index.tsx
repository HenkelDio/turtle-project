/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Input,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { IWorkplace } from "../../types";
import { cnpjFormatter } from "../../utils/documentFormat";
import formatPhone from "../../utils/phoneFormat";
import { createCompany } from "../../services/workplaceService";

interface IProps {
	isOpen: boolean;
	onClose: () => void;
}

const CreateWorkplaceDrawer: React.FC<IProps> = ({
	isOpen,
	onClose,
}: IProps) => {
	const [workplace, setWorplace] = useState<IWorkplace>();
	const [error, setError] = useState(false);
	const toast = useToast();

	function handleWorkplace(field: string, value: string) {
		setWorplace((prevState: any) => ({
			...prevState,
			[field]: value,
		}));
	}

	async function saveWorkplace() {
		if(
			!workplace?.company_email ||
			!workplace?.company_name ||
			!workplace?.company_number ||
			!workplace?.company_register
		) {
			setError(true);
		} else {
			const response = await createCompany(workplace);
		
			if(response.data) {
				toast({
          title: 'Sucesso',
          description: "Estabelecimento criado com sucesso",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

				onClose()
			} else {
				toast({
          title: 'Erro',
          description: "Erro ao criar estabelecimento",
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
			}
		}

	}

	return (
		<>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Novo estabelecimento</DrawerHeader>

					<DrawerBody>
						<Flex direction="column" gap={4}>
							<Input 
								placeholder="Digite o nome do estabelecimento" 
								onChange={(e) => handleWorkplace('company_name', e.target.value)}
							/>
							<Input 
								placeholder="Digite o CNPJ do estabelecimento" 
								value={cnpjFormatter(workplace?.company_register)}
								maxLength={18}
								onChange={(e) => handleWorkplace('company_register', e.target.value)}	
							/>
							<Input 
								placeholder="Digite o telefone do estabelecimento" 
								value={formatPhone(workplace?.company_number)}
								maxLength={14}
								onChange={(e) => handleWorkplace('company_number', e.target.value)}	
							/>
							
							<Input 
								placeholder="Digite o email do responsável" 
								onChange={(e) => handleWorkplace('company_email', e.target.value)}	
							/>
						</Flex>
					</DrawerBody>

					<DrawerFooter>
						{
							error && <p>Preencha todos os campos necessários</p>
						}
						<Button variant="solid" colorScheme="green" mr={3} onClick={saveWorkplace}>
							Salvar
						</Button>
						<Button variant="outline" mr={3} onClick={onClose}>
							Cancelar
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default CreateWorkplaceDrawer;
