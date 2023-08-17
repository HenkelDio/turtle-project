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
	admin?: IUserAdmin | undefined,
	company?: ICompany | undefined,
	student?: IUserStudent | undefined,
	courses?: any,
	selectedCourses?: [],
	isOpen: boolean,
	// eslint-disable-next-line @typescript-eslint/ban-types
	setOpen: Function,
	selectedWorkplace?: [],
	workplaces?: any,
}

const ConfirmUserModal: React.FC<IProps> = ({ 
	student, 
	admin,
	company,
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
			"student_name": student?.student_name,
			"student_cpf": student?.student_cpf.replace(/\D/g, ''),
			"student_email": student?.student_email,
			"student_cellphone": student?.student_cellphone.replace(/\D/g, '')
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
						{
							company && 
							<>
								<Field title='Nome da empresa' content={company.company_name} />
								<Field title='E-mail da empresa' content={company.company_email} />
								<Field title='Nome do responsável' content={company.company_contact} />
								<Field title='CNPJ' content={company.company_register} />
								<Field title='Celular' content={company.company_telephone} />
								<Field title='CEP' content={company.company_cep} />
								<Field title='Rua' content={company.company_street} />
								<Field title='Cidade' content={company.company_city} />
								<Field title='UF' content={company.company_state} />
								<b>Cursos cadastrados</b>
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
							</>
						}

						{
							admin && 
							<>
								<Field title='Nome' content={admin.admin_name} />
								<Field title='E-mail' content={admin.admin_email} />
							</>
						}


						{
							student && 
							<>
								<Field title='Nome' content={student?.student_email} />
								<Field title='CPF' content={student?.student_cpf} />
								<Field title='E-mail' content={student?.student_email} />
								<Field title='Celular' content={student?.student_cellphone} />
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
							</>
						}
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

					{
						student && <p>E-mail para login: {student?.student_email}</p>
					}

					{
						admin && <p>E-mail para login: {admin?.admin_email}</p>
					}

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