import { PiStudentLight, PiSuitcaseSimpleThin } from "react-icons/pi";
import { Container } from "./styles"
import { RiAdminLine } from "react-icons/ri";
import { useState } from "react";
import useTurtleStore from "../../store";

const Select: React.FC = () => {
	const { registerType, setRegisterType } = useTurtleStore((state) => state);

	return (
		<Container>
			<details className="custom-select">
				<summary className="radios">
					<input type="radio" name="item" id="default" title="Selecione o tipo de usuário" checked={registerType === 'default' ? true : false} />
					<input type="radio" name="item" id="item1" title="Estudante" checked={registerType === 'student' ? true : false} />
					<input type="radio" name="item" id="item2" title="Empresa" checked={registerType === 'company' ? true : false} />
					<input type="radio" name="item" id="item3" title="Administrador" checked={registerType === 'admin' ? true : false} />
				</summary>
				<ul className="list">
					<li onClick={() => setRegisterType('student')}>
						<label htmlFor="student">
							<PiStudentLight /> Estudante
							<span></span>
						</label>
					</li>
					<li onClick={() => setRegisterType('company')}>
						<label htmlFor="company"><PiSuitcaseSimpleThin /> Empresa</label>
					</li>
					<li onClick={() => setRegisterType('admin')}>
						<label htmlFor="admin"><RiAdminLine /> Administrador</label>
					</li>
				</ul>
			</details>
		</Container>
	)
}

export default Select;