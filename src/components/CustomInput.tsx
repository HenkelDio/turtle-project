import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons"
import { ButtonGroup, Editable, EditableInput, EditablePreview, Flex, IconButton, useEditableControls } from "@chakra-ui/react"
import Input from "./Input"
import { Dispatch, SetStateAction } from "react"

interface IProps {
	value: string,
	setTitle: Dispatch<SetStateAction<undefined>>
}

export default function CustomInput({ value, setTitle }: IProps) {
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
			defaultValue={value}
			fontSize='2xl'
			isPreviewFocusable={false}
			onChange={(e) => setTitle(e)}
		>
			<Flex alignItems='center' justifyContent='center' gap={10}>
				<EditablePreview />
				<Input as={EditableInput} />
				<EditableControls />
			</Flex>
		</Editable>
	)
}