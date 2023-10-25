/* eslint-disable @typescript-eslint/no-misused-promises */
import ReactDOM from 'react-dom';
import { Container, Footer, Overlay, ContainerField, LoadingContainer } from '../styles';
import Field from '../../ProfileField';
import Button from '../../Button';
import { IUserStudent } from '../../../types';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addStudentUser } from '../../../services';
import Loader from '../../Loader';
import Alert from '../../Alert';
import delay from '../../../utils/delay';

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

	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
	const [label, setLabel] = useState('');

	const queryClient = useQueryClient();


	const { mutate, isLoading } = useMutation(['user'], addStudentUser, {
		onSuccess: async ({data, err}) => {
			await delay();

			if(!err) {
				if (data && data.data) {
					console.log(data.data);
					setSuccess(true);
					setError(false);
					setLabel('Usuário adicionado com sucesso!')
					setOpenDialog(true);
					await delay(5000);
					setOpenDialog(false);
				}
			}

			if(err) {
				setError(true);
				setSuccess(false);
				setOpenDialog(true);
				setLabel('Não foi possível adicionar o usuário!')
				await delay(5000);
				setOpenDialog(false);
			}
		},
		onSettled: async () => {
			await queryClient.invalidateQueries('create')
		}
	});

	const handleCreateUser = () => {
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
			<Container>

					
					{
						isLoading && 
						<LoadingContainer>
							<Loader />
						</LoadingContainer>
					}

				
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
			</Container>
			<Alert 
				success={success}
				error={error}
				isOpen={openDialog}
				label={label}
			/>
		</Overlay>,
		document.getElementById('modal-user-confirmation')!,
	);
}

export default ConfirmStudentModal;