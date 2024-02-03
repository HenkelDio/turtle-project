import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input } from "@chakra-ui/react";
import CardSelectWorkplace from "./CardSelectWorkplace";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProps {
	isOpen: boolean,
	onClose: () => void,
	setSelectedNewWorkplace: Dispatch<SetStateAction<number>>

}

const SelectWorkplaceDrawer: React.FC<IProps> = ({ isOpen, onClose, setSelectedNewWorkplace }:IProps ) => {

	const [workplaces] = useState([
		{index: 1, name: 'Souza Treinamentos', cnpj: '02.541.094/0001-31'},
		{index: 2, name: 'Code e Code', cnpj: '02.541.094/0001-31'},
		{index: 3, name: 'Souza Treinamentos 2',cnpj: '02.541.094/0001-31'},
		{index: 4, name: 'Souza Treinamentos', cnpj: '02.541.094/0001-31'},
		{index: 5, name: 'Code e Code', cnpj: '02.541.094/0001-31'},
		{index: 6, name: 'Souza Treinamentos 2',cnpj: '02.541.094/0001-31'},
		{index: 7, name: 'Souza Treinamentos', cnpj: '02.541.094/0001-31'},
		{index: 8, name: 'Code e Code', cnpj: '02.541.094/0001-31'},
		{index: 9, name: 'Souza Treinamentos 2',cnpj: '02.541.094/0001-31'}
	])

	const [selectedWorkplace, setSelectedWorkplace] = useState(0);

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
						/>

						<Flex direction='column' gap={2} mt={5}>
						{
							workplaces.map((item) => {
								return <CardSelectWorkplace 
								index={item.index}
								name={item.name}
								cnpj={item.cnpj}	
								key={item.index}
								selectedWorkplace={selectedWorkplace}
								setSelectedWorkplace={setSelectedWorkplace}
								/>
							})
						}
						</Flex>

          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancelar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SelectWorkplaceDrawer;