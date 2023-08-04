/* eslint-disable @typescript-eslint/no-misused-promises */
import ReactDOM from 'react-dom';
import { Container, Footer, Overlay, ContainerField, Conclusion } from '../styles';
import Field from '../../ProfileField';
import Button from '../../Button';
import { IUser } from '../../../types';
import { MdOutlineVerified } from 'react-icons/md';
import { useState } from 'react';
import delay from '../../../utils/delay';
import Loader from '../../Loader';
import { useMutation, useQueryClient } from 'react-query';
import { addStudentUser } from '../../../services';
import { useHistory } from 'react-router-dom';

interface IProps {
	user: IUser,
	courses: any,
	selectedCourses: [],
	isOpen: boolean,
	// eslint-disable-next-line @typescript-eslint/ban-types
	setOpen: Function,
}

const ConfirmUserModal: React.FC<IProps> = ({user, courses, isOpen, selectedCourses, setOpen}: IProps) => {

	const [isDone, setDone] = useState(false);

	const queryClient = useQueryClient();

	const history = useHistory();

	const { mutate, isLoading, status } = useMutation(['user'], addStudentUser, {
		onSuccess: data => {
			console.log(status);
			const message = status
			alert(message)
		},
		onError: () => {
			alert("there was an error")
		},
		onSettled: () => {
			queryClient.invalidateQueries('create')
		}
	});

	const handleCreateUser = () => {
		setDone(true)
		const data = {
			"user_company_id": 4,
			"user_email": user.user_email,
			"user_name": user.user_name,
			"user_register": user.user_register,
			"user_telephone": user.user_telephone.replace(/\D/g, '')
		}
		mutate(data)
	}

	if (!isOpen) {
    return null;
  }

	return ReactDOM.createPortal(
		<Overlay>
			<Container>
				<div className='confirm-data' style={{ right: isDone ? '500px' : '0px', animation: isDone ? '1s slide-out' : '', position: isDone ? 'absolute' : 'relative', opacity: isDone ? '0' : '1' }}>
				<h1>Confirme os dados do usuário</h1>
				<ContainerField>
					<Field title='Nome' content={user.user_name} />
					<Field title='CPF' content={user.user_register} />
					<Field title='E-mail' content={user.user_email} />
					<Field title='Celular' content={user.user_telephone} />
					<b>Cursos matriculados</b>
					<div className='courses'>
					{
						selectedCourses.map((course) => {
							return(
								<p>{
									courses.filter((el: any) => el.index === course)[0].name
								}</p>
							)
						})
					}
					</div>
				</ContainerField>
				<Footer>
					<button type="button" className="cancel-button" onClick={() => setOpen(false)}>
						Cancelar
					</button>
					<Button type="button" onClick={() => handleCreateUser()}>
						Adicionar
					</Button>
				</Footer>
				</div>
				
				<Conclusion style={{ right: isDone ? '0px' : '-500px', animation: isDone ? '3s slide-in' : '' }}>

					{
						isLoading && <Loader />
					}

					<span><MdOutlineVerified /></span>

					<h1>Usuário adicionado com sucesso!</h1>

					<p>E-mail para login: {user.user_email}</p>

					<Button onClick={() => history.push('/admin/users')}>
						Fechar
					</Button>

				</Conclusion>

			</Container>
		</Overlay>,
		document.getElementById('modal-user-confirmation'),
	);
}

export default ConfirmUserModal;