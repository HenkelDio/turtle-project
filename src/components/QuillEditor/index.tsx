import { useQuill } from 'react-quilljs';
import "quill/dist/quill.snow.css";
import { useEffect } from "react";
import { ContainerQuill } from './styles';

interface IProps {
	setValue: Function,
	content: string
}

const modules = {
	toolbar: [
		['bold', 'italic', 'underline', 'strike'],
	],
};

const formats = ['bold', 'italic', 'underline', 'strike'];

const QuillEditor: React.FC<IProps> = ({ setValue, content }: IProps) => {

	const placeholder = content;

	const { quill, quillRef } = useQuill({ placeholder, modules, formats	 });

	// console.log(quill);    // undefined > Quill Object
	// console.log(quillRef);

	useEffect(() => {
		if (quill) {
			quill.on('text-change', (delta, oldDelta, source) => {
				// console.log('Text change!');
				// console.log(quill.getText()); // Get text only
				// console.log(quill.getContents()); // Get delta contents
				// console.log(quill.root.innerHTML); // Get innerHTML using quill
				setValue(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
			});
		}
	}, [quill]);

	return (
		<ContainerQuill>
			<div style={{ height: '200px', backgroundColor: '#ffff' }} ref={quillRef} />
		</ContainerQuill>
	)
}

export default QuillEditor;