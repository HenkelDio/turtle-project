import { BiCheckboxChecked } from "react-icons/bi";
import Button from "../../../components/Button";
import { Container, Content, Modules } from "./styles";

const ClassPage: React.FC = () => {
	return(
		<Container>
			<Content>
				<div className="video">
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/l9VEfxCkWRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
			<Modules>
				<details>
					<summary>COMO IR AO MERCADO. PT1</summary>
					<p>É fácil ir ao mercado?</p>
					<p>Fazendo as primeiras compras</p>
					<p>Feijão com arroz combinam?</p>
				</details>
				<details>
					<summary>COMO IR AO MERCADO. PT1</summary>
					<p>É fácil ir ao mercado?</p>
					<p>Fazendo as primeiras compras</p>
					<p>Feijão com arroz combinam?</p>
				</details>
				<details>
					<summary>COMO IR AO MERCADO. PT1</summary>
					<p>É fácil ir ao mercado?</p>
					<p>Fazendo as primeiras compras</p>
					<p>Feijão com arroz combinam?</p>
				</details>
				<details>
					<summary>COMO IR AO MERCADO. PT1</summary>
					<p>É fácil ir ao mercado?</p>
					<p>Fazendo as primeiras compras</p>
					<p>Feijão com arroz combinam?</p>
				</details>
			</Modules>
		</Container>
	)
}

export default ClassPage;