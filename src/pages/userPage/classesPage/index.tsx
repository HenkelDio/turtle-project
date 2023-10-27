import { BiCheckboxChecked } from "react-icons/bi";
import Button from "../../../components/Button";
import { Content } from "./styles";
import { Box, useMediaQuery, Flex, Icon, useDisclosure } from "@chakra-ui/react";
import ModuleDrawer from "../../../components/ModuleDrawer";
import { BsArrowUpLeftSquareFill } from "react-icons/bs";

const ClassPage: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

	console.log(isLargerThan800)

	return(
			<>
				<Box 
					onClick={onOpen}
					opacity={0.8}
					cursor="pointer"
					w={100}
					p={1}
					rounded="xl"
					_hover={{opacity: 1, background: "#E2E8F0"}}
				>
					<Flex alignItems='center' gap={1} justifyContent='center'>
						<Icon as={BsArrowUpLeftSquareFill} />
						<p>Módulos</p>
					</Flex>
				</Box>

				<ModuleDrawer 
					onClose={onClose}
					isOpen={isOpen}
				/>

				<Content style={isLargerThan800 ? { width: '60%'} : { width: '100%'} }>
					<div className="video">
					<iframe width="100%" height="100%" src="https://www.youtube.com/embed/l9VEfxCkWRc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
					</div>
					<details>
						<summary>Abrir PDF</summary>
						<iframe src="https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf" width="100%" height="500"></iframe>
					</details>
					<div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit delectus dolores eaque nam debitis repudiandae suscipit qui veniam hic, quis, molestias dolorum officiis nobis dolore iure consequuntur odio aperiam praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					<br />
					<br />
					Laudantium laborum ut temporibus accusamus repellat ratione, porro aliquam officia ab totam aliquid rerum nesciunt alias quidem dolor consequuntur ea neque minus?</div>

					<Button>
						<BiCheckboxChecked />Conclur módulo
					</Button>
				</Content>
			</>
	)
}



export default ClassPage;