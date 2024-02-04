/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, useToast } from "@chakra-ui/react";
import CardSelectWorkplace from "./CardSelectWorkplace";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { getCompanies } from "../../services/workplaceService";
import { IWorkplace } from "../../types";

interface IProps {
	isOpen: boolean,
	onClose: () => void,
	setSelectedNewWorkplace: Dispatch<SetStateAction<IWorkplace | undefined>>
}

const SelectWorkplaceDrawer: React.FC<IProps> = ({ isOpen, onClose, setSelectedNewWorkplace }:IProps ) => {
	const [workplaces, setWorkplaces] = useState<IWorkplace[]>([])
	const [selectedWorkplace, setSelectedWorkplace] = useState<IWorkplace>();
	const [searchTerm, setSearchTerm] = useState('');

	const filteredCards = useMemo(() => workplaces?.filter((workplace) => (
		workplace.company_name.toLowerCase().includes(searchTerm.toLowerCase()))), [workplaces, searchTerm]);


	const toast = useToast()

	function cancel() {
		setSelectedNewWorkplace(undefined);
		setSelectedWorkplace(undefined);
		onClose();
	}

	function compareByCompanyName(a: IWorkplace, b: IWorkplace) {
		const companyA = a.company_name.toUpperCase();
		const companyB = b.company_name.toUpperCase();

		let comparison = 0;
		if (companyA > companyB) {
			comparison = 1;
		} else if (companyA < companyB) {
			comparison = -1;
		}
		return comparison;
	}

	useEffect(() => {
		async function getWorkplaces() {
			const response = await getCompanies();
			if (response.data) {
				response.data.sort(compareByCompanyName);
				setWorkplaces(response.data);
			} else {
				toast({
					title: "Erro",
					description: "Erro ao carregar estabelecimentos",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}
		}
		getWorkplaces();
	}, []);

	useEffect(() => {
		setSelectedNewWorkplace(selectedWorkplace);
	}, [selectedWorkplace])

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Estabelecimento</DrawerHeader>

          <DrawerBody>
						<Input 
							placeholder="Pesquise pelo nome da empresa"
							onChange={(e) => setSearchTerm(e.target.value)}
						/>

						<Flex direction='column' gap={2} mt={5}>
						{
							filteredCards.map((item) => {
								return <CardSelectWorkplace 
								actualWorkplace={item}
								key={item.index}
								selectedWorkplace={selectedWorkplace}
								setSelectedWorkplace={setSelectedWorkplace}
								/>
							})
						}
						</Flex>

          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={cancel}>
              Cancelar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SelectWorkplaceDrawer;