import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { ReactNode } from "react"

interface IProps {
	onClose: () => void,
	isOpen: boolean,
	modalTitle: string,
	children: ReactNode
	action?: () => void,
	actionLabel?: string
}

export default function GenericModal({ onClose, isOpen, modalTitle, children, actionLabel, action }: IProps) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
						{children}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button variant='ghost' onClick={action}>{actionLabel}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}