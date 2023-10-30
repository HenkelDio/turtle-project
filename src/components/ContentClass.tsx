import { Button, useMediaQuery } from "@chakra-ui/react"
import { Content } from "../pages/userPage/classesPage/styles"
import { BiCheckboxChecked } from "react-icons/bi";

interface IProps {
	title: string | undefined,
	videoUrl: string | undefined,
	description: string | undefined,
	pdfPath: string | undefined
}

export default function ContentClass({ title, videoUrl, description, pdfPath }: IProps){

	const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

	console.log(title, videoUrl)

	return (
		<Content style={isLargerThan800 ? { width: '60%' } : { width: '100%' }}>
			<h1>{title}</h1>
			
			{
				videoUrl && <div className="video">
				<iframe width="100%" height="100%" src={videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
			</div>
			}

			{
				pdfPath && <details>
				<summary>Abrir PDF</summary>
				<iframe src={pdfPath} width="100%" height="500"></iframe>
			</details>
			}


			<div className="text">
				{description}	
			</div>

			<Button 
				variant="solid" 
				bg="green.400"
				_hover={{
					background: "green.500"
				}}
				color="white"
				w={['full', 300]}
				h={50}
				mx='auto'
			>	
				<BiCheckboxChecked />Conclur módulo
			</Button>
		</Content>
	)
}