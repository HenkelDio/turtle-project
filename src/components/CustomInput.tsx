import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons"
import { ButtonGroup, Editable, EditableInput, EditablePreview, Flex, IconButton, useEditableControls } from "@chakra-ui/react"
import Input from "./Input"

export default function CustomInput() {
	/* Here's a custom control */
	function EditableControls() {
		const {
			isEditing,
			getSubmitButtonProps,
			getCancelButtonProps,
			getEditButtonProps,
		} = useEditableControls()

		return isEditing ? (
			<ButtonGroup justifyContent='center' size='sm'>
				<IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
				<IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
			</ButtonGroup>
		) : (
			<Flex justifyContent='center'>
				<IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
			</Flex>
		)
	}

	return (
		<Editable
			textAlign='center'
			defaultValue='Título da sua primeira aula'
			fontSize='2xl'
			isPreviewFocusable={false}
		>
			<Flex alignItems='center' justifyContent='center' gap={10}>
				<EditablePreview />
				<Input as={EditableInput} />
				<EditableControls />
			</Flex>
		</Editable>
	)
}