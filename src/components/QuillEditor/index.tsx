import { useQuill } from 'react-quilljs';
import "quill/dist/quill.snow.css";
import { useEffect } from "react";
import { ContainerQuill } from './styles';

interface IProps {
	setValue: Function,
}

const QuillEditor: React.FC<IProps> = ({ setValue }: IProps) => {

	const placeholder = 'Digite um conteúdo de curso épico 🚀';

	const { quill, quillRef } = useQuill({ placeholder });

	console.log(quill);    // undefined > Quill Object
	console.log(quillRef);

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

	return (
		<ContainerQuill>
			<div style={{ height: '100%', backgroundColor: '#ffff' }} ref={quillRef} />
		</ContainerQuill>
	)
}

export default QuillEditor;