import { useState } from "react";
import QuillEditor from "../../../components/QuillEditor";
import { Container, ContentBox, FileBox, VideoBox } from "./styles";
import { IoMdAddCircle } from "react-icons/io";

const FormModule: React.FC = () => {
	const [value, setValue] = useState<string | TrustedHTML>("");

	return(
		<Container>
			<VideoBox>
				<div>
					<p>adicione a <b>URL</b> do vídeo</p><span><IoMdAddCircle /></span>
				</div>
			</VideoBox>
			<FileBox>

			</FileBox>
			<ContentBox>
				<QuillEditor setValue={setValue}/>
			</ContentBox>
		</Container>
	)
}

export default FormModule;