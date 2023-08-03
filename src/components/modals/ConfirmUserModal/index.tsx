import ReactDOM from 'react-dom';
import { Container, Footer, Overlay, ContainerField } from '../styles';
import Field from '../../ProfileField';
import Button from '../../Button';
import { IUser } from '../../../types';

interface IProps {
	user: IUser,
	courses: any,
	selectedCourses: [],
	isOpen: boolean,
	setOpen: Function,
}

const ConfirmUserModal: React.FC<IProps> = ({user, courses, isOpen, selectedCourses, setOpen}: IProps) => {
	if (!isOpen) {
    return null;
  }

	return ReactDOM.createPortal(
		<Overlay>
			<Container>
				<h1>Confirme os dados do usuário</h1>
				<ContainerField>
					<Field title='Nome' content={user.user_name} />
					<Field title='CPF' content={user.user_register} />
					<Field title='E-mail' content={user.user_email} />
					<Field title='Celular' content={user.user_telephone} />
					<b>Cursos matriculados</b>
					{
						selectedCourses.map((course) => {
							return(
								<p>{
									courses.filter((el) => el.index === course)[0].name
								}</p>
							)
						})
					}
				</ContainerField>
				<Footer>
					<button type="button" className="cancel-button" onClick={() => setOpen(false)}>
						Cancelar
					</button>
					<Button type="button">
						Adicionar
					</Button>
				</Footer>
			</Container>
		</Overlay>,
		document.getElementById('modal-user-confirmation'),
	);
}

export default ConfirmUserModal;