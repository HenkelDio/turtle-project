import { IoIosArrowBack } from "react-icons/io";
import { BackPage } from "../../../packages/admin/FormGroup/styles";
import { Container, Box, ContainerPreview } from "./styles";
import { Link } from "react-router-dom";
import QuillEditor from "../../../components/QuillEditor";
import Button from "../../../components/Button";
import { useState } from "react";

const CourseRegister: React.FC = () => {
	const [step, setStep] = useState(1);
	const [value, setValue] = useState<string | TrustedHTML>("");

	return (
		<Container>
			<BackPage>
				<Link to='/admin/courses'><IoIosArrowBack /></Link>
			</BackPage>

			<h1>Criar novo curso</h1>

			{
				step === 1 &&
				<>
					<QuillEditor
						setValue={setValue}
					/>
					<Button
						onClick={() => setStep(2)}
						style={{ marginTop: '100px' }}>
						Continuar
					</Button>
				</>
			}

			{
				step === 2 &&
				<>
					<BackPage
						onClick={() => setStep(1)}
					>
						<IoIosArrowBack />
					</BackPage>
					<ContainerPreview dangerouslySetInnerHTML={{ __html: value }} />
				</>
			}

		</Container>
	)
}

export default CourseRegister;