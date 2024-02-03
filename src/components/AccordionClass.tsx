import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Input,
	Flex,
	Button,
	useDisclosure,
} from "@chakra-ui/react";
import CustomInput from "./CustomInput";
import QuillEditor from "./QuillEditor";
import { Dispatch, SetStateAction, useState } from "react";
import { IContentClass } from "../types";
import GenericModal from "./GenericModal";

interface IProps {
	titleInput: string;
	content: string;
	setContentClass: Dispatch<SetStateAction<IContentClass[]>>;
	contentClass: IContentClass[];
	onDelete: () => void;
}

export default function AccordionClass({
	titleInput,
	content,
	setContentClass,
	onDelete,
	contentClass,
}: IProps) {
	const [value, setValue] = useState<string | TrustedHTML>("");
	const [title, setTitle] = useState();
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [saved, setSaved] = useState<boolean>(false);

	function addUrlVideo(e: React.ChangeEvent<HTMLInputElement>) {
		setContentClass((prevState) => ({
			...prevState,
			urlVideo: e.target.value,
		}));
	}

	function addUrlPdf(e: React.ChangeEvent<HTMLInputElement>) {
		setContentClass((prevState) => ({
			...prevState,
			urlPdf: e.target.value,
		}));
	}

	function saveContentClass() {
		setContentClass((prevState) => ({
			...prevState,
			title: title,
			content: value,
		}));
		setSaved(true);
	}

	return (
		<>
			<Accordion bg="white" rounded="xl" width="800px" allowMultiple>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								<CustomInput value={titleInput} setTitle={setTitle} />
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Flex marginBottom={5} gap={5}>
							<Input
								variant="outline"
								bg="white"
								placeholder="Digite a URL do vídeo"
								onChange={(e) => addUrlVideo(e)}
							/>
							<Input
								variant="outline"
								bg="white"
								placeholder="Digite a URL do PDF"
								onChange={(e) => addUrlPdf(e)}
							/>
						</Flex>

						<QuillEditor setValue={setValue} content={content} />

						<Flex gap={5}>
							<Button
								variant="solid"
								colorScheme="green"
								onClick={() => saveContentClass()}
							>
								{saved ? "Salvo!" : "Salvar aula"}
							</Button>

							<Button variant="solid" colorScheme="red" onClick={onOpen}>
								Deletar
							</Button>
						</Flex>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>

			<GenericModal
				modalTitle="Deletar aula"
				isOpen={isOpen}
				onClose={onClose}
				actionLabel="Deletar"
				action={() => onDelete()}
			>
				<h2>Você tem certeza que deseja deletar essa aula?</h2>
			</GenericModal>
		</>
	);
}
