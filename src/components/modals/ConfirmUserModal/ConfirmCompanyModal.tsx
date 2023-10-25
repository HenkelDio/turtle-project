/* eslint-disable @typescript-eslint/no-misused-promises */
import ReactDOM from 'react-dom';
import { Container, Footer, Overlay, ContainerField, LoadingContainer } from '../styles';
import Field from '../../ProfileField';
import Button from '../../Button';
import { ICompany } from '../../../types';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addCompanyUser } from '../../../services';
import Loader from '../../Loader';
import Alert from '../../Alert';
import delay from '../../../utils/delay';

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

	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
	const [label, setLabel] = useState('');

	const queryClient = useQueryClient();


	const { mutate, isLoading } = useMutation(['company'], addCompanyUser, {
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
			company_name: user.company_name,
			company_contact: user.company_contact,
			company_cnpj: user.company_register.replace(/\D/g, ''),
			company_contact_telephone: user.company_telephone.replace(/\D/g, ''),
			company_contact_email: user.company_email,
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
			<Container>

				{
						isLoading && 
						<LoadingContainer>
							<Loader />
						</LoadingContainer>
					}

				
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

export default ConfirmCompanyModal;