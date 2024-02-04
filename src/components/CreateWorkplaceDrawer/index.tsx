/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Box,
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
import { useEffect, useState } from "react";
import { IWorkplace } from "../../types";
import { cnpjFormatter } from "../../utils/documentFormat";
import formatPhone from "../../utils/phoneFormat";
import { createCompany, verifyCnpj } from "../../services/workplaceService";

interface IProps {
	isOpen: boolean;
	onClose: () => void;
	setCreated: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateWorkplaceDrawer: React.FC<IProps> = ({
	isOpen,
	onClose,
	setCreated
}: IProps) => {
	const [workplace, setWorplace] = useState<IWorkplace>();
	const [error, setError] = useState(false);
	const [cnpjExists, setCnpjExists] = useState<boolean>(false);
	const toast = useToast();

	async function handleWorkplace(field: string, value: string) {

		if(field === 'company_register') {
			if(value.length === 14) {
				const cnpj = value.replace(/\D/g, "");
				await checkIfCnpjAlreadyExists(cnpj);
			}
		}

		if(field === 'company_number') {
			setWorplace((prevState: any) => ({
				...prevState,
				company_number: value.replace(/\D/g, ""),
			}));
			return;
		}

		setWorplace((prevState: any) => ({
			...prevState,
			[field]: value,
		}));
	}

	async function checkIfCnpjAlreadyExists(cnpj: string) {
		const response = await verifyCnpj(cnpj);
		
		if(response.data) {
			if(response.data.found) {
				setCnpjExists(true);
			} else {
				setCnpjExists(false)
			}
		} else {
			toast({
				title: 'Erro',
				description: "Erro ao verificar CNPJ",
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
		}
	}

	function validateFields() {
		if(
			!workplace?.company_email ||
			!workplace?.company_name ||
			!workplace?.company_number ||
			!workplace?.company_register
		) {
			console.log('erro')
			setError(true);
		} else {
			console.log('não erro')
			setError(false)
		}
	}

	useEffect(() => {
		validateFields();
	}, [workplace])

	async function saveWorkplace() {
		if(!error && !cnpjExists && workplace) {
			const response = await createCompany(workplace);
			setError(false);

			if(response.data) {
				setCreated(true);
				toast({
          title: 'Sucesso',
          description: "Estabelecimento criado com sucesso",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

				setWorplace({
					company_email: '',
					company_name: '',
					company_number: '',
					company_register: ''
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
						<Box mr={10}>
							{
								error && <Box color='red.600'>Preencha todos os campos necessários</Box>
							}
							{
								cnpjExists && <Box  color='red.600' >Esse CNPJ já existe</Box>
							}
						</Box>
						<Button 
							variant="solid" 
							colorScheme="green" 
							mr={3} 
							onClick={saveWorkplace}
							isDisabled={error || cnpjExists ? true : false}
						>
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
