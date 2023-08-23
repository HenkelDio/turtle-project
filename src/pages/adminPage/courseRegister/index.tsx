import { IoIosArrowBack } from "react-icons/io";
import { BackPage } from "../../../packages/admin/FormGroup/styles";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useQuill } from 'react-quilljs';
import "quill/dist/quill.snow.css";
import { useEffect, useState } from "react";

const CourseRegister: React.FC = () => {

	const placeholder = 'Digite um conteúdo de curso épico 🚀';

	const { quill, quillRef } = useQuill({placeholder});

	const [value, setValue] = useState();

	useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log('Text change!');
        console.log(quill.getText()); // Get text only
        console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        setValue(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

	return(
		<Container>
			<BackPage>
				<Link to='/admin/courses'><IoIosArrowBack /></Link>
			</BackPage>

			<h1>Criar novo curso</h1>

			<div style={{ width: 1000, height: 400, background: '#ffff' }}>
				<div ref={quillRef} />
			</div>
			
			<div>
				{value}
			</div>
		</Container>
	)
}

export default CourseRegister;