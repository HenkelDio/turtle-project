/* eslint-disable @typescript-eslint/no-misused-promises */
import ReactDOM from 'react-dom';
import { Container, Footer, Overlay, ContainerField, Conclusion } from '../styles';
import Field from '../../ProfileField';
import Button from '../../Button';
import { ICompany } from '../../../types';
import { MdOutlineVerified } from 'react-icons/md';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addCompanyUser } from '../../../services';
import { useHistory } from 'react-router-dom';
import Loader from '../../Loader';

interface IProps {
	user: ICompany,
	courses?: any,
	selectedCourses?: [],
	isOpen: boolean,
	// eslint-disable-next-line @typescript-eslint/ban-types
	setOpen: Function,
}

const ConfirmCompanyModal: React.FC<IProps> = ({
	user,
	courses,
	isOpen,
	selectedCourses,
	setOpen,
}: IProps) => {

	const [isDone, setDone] = useState(false);

	const queryClient = useQueryClient();

	const history = useHistory();

	const { mutate, isLoading } = useMutation(['company'], addCompanyUser, {
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
			company_name: user.company_name,
			company_contact: user.company_contact,
			company_register: user.company_register.replace(/\D/g, ''),
			company_telephone: user.company_telephone.replace(/\D/g, ''),
			company_email: user.company_email,
			company_cep: user.company_cep.replace(/\D/g, ''),
			company_street: user.company_street,
			company_district: user.company_district,
			company_state: user.company_state,
			company_city: user.company_city,
			company_address_number: user.company_address_number
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
						<Field title='Nome da empresa' content={user?.company_name} />
						<Field title='E-mail da empresa' content={user?.company_email} />
						<Field title='Nome do responsável' content={user?.company_contact} />
						<Field title='CNPJ' content={user?.company_register} />
						<Field title='Celular' content={user?.company_telephone} />
						<Field title='CEP' content={user?.company_cep} />
						<Field title='Rua' content={user?.company_street} />
						<Field title='Cidade' content={user?.company_city} />
						<Field title='UF' content={user?.company_state} />
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

					<p>E-mail para login: {user?.company_email}</p>

					<Button onClick={() => history.push('/admin/users')}>
						Fechar
					</Button>

				</Conclusion>

			</Container>
		</Overlay>,
		document.getElementById('modal-user-confirmation')!,
	);
}

export default ConfirmCompanyModal;