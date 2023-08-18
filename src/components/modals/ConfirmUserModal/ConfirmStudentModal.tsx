/* eslint-disable @typescript-eslint/no-misused-promises */
import ReactDOM from 'react-dom';
import { Container, Footer, Overlay, ContainerField, Conclusion } from '../styles';
import Field from '../../ProfileField';
import Button from '../../Button';
import { ICompany, IUserAdmin, IUserStudent } from '../../../types';
import { MdOutlineVerified } from 'react-icons/md';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addStudentUser } from '../../../services';
import { useHistory } from 'react-router-dom';
import Loader from '../../Loader';

interface IProps {
	user: IUserStudent,
	courses?: any,
	selectedCourses?: [],
	isOpen: boolean,
	// eslint-disable-next-line @typescript-eslint/ban-types
	setOpen: Function,
	selectedWorkplace?: [],
	workplaces?: any,
}

const ConfirmStudentModal: React.FC<IProps> = ({
	user,
	courses,
	isOpen,
	selectedCourses,
	setOpen,
	selectedWorkplace,
	workplaces
}: IProps) => {

	const [isDone, setDone] = useState(false);

	const queryClient = useQueryClient();

	const history = useHistory();

	const { mutate, isLoading } = useMutation(['user'], addStudentUser, {
		onSuccess: data => {
			if (data && data.data) {
				console.log(data.data);
			} else {
				console.log(data.err)
			}
		},
		onSettled: async () => {
			await queryClient.invalidateQueries('create')
		}
	});

	const handleCreateUser = () => {
		setDone(true)
		const data = {
			"student_company_id": 4,
			"student_name": user.student_name,
			"student_cpf": user.student_cpf.replace(/\D/g, ''),
			"student_email": user.student_email,
			"student_cellphone": user.student_cellphone.replace(/\D/g, '')
		}
		mutate(data)
	}

	if (!isOpen) {
		return null;
	}

	return ReactDOM.createPortal(
		<Overlay>
			<Container >
				<div className='confirm-data' style={{ right: isDone ? '500px' : '0px', animation: isDone ? '1s slide-out' : '', position: isDone ? 'absolute' : 'relative', opacity: isDone ? '0' : '1' }}>
					<h1>Confirme os dados do usuário</h1>
					<ContainerField>
						<Field title='Nome' content={user.student_email} />
						<Field title='CPF' content={user.student_cpf} />
						<Field title='E-mail' content={user.student_email} />
						<Field title='Celular' content={user.student_cellphone} />
						<b>Cursos matriculados</b>
						<div className='courses'>
							{
								selectedCourses?.map((course) => {
									return (
										<p>{
											courses.filter((el: any) => el.index === course)[0].name
										}</p>
									)
								})
							}
						</div>
						<b>Matriculado pela empresa</b>
						<div className='workplace'>
							{
								selectedWorkplace?.map((workplace) => {
									return (
										<p>{
											workplaces.filter((el: any) => el.index === workplace)[0].name
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

					<p>E-mail para login: {user?.student_email}</p>
				
					<Button onClick={() => history.push('/admin/users')}>
						Fechar
					</Button>

				</Conclusion>

			</Container>
		</Overlay>,
		document.getElementById('modal-user-confirmation')!,
	);
}

export default ConfirmStudentModal;