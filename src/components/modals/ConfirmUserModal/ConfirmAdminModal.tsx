/* eslint-disable @typescript-eslint/no-misused-promises */
import ReactDOM from 'react-dom';
import { Container, Footer, Overlay, ContainerField } from '../styles';
import Field from '../../ProfileField';
import Button from '../../Button';
import {IUserAdmin } from '../../../types';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addStudentUser } from '../../../services';
import { useHistory } from 'react-router-dom';
import Loader from '../../Loader';
import Alert from '../../Alert';

interface IProps {
	admin: IUserAdmin,
	isOpen: boolean,
	// eslint-disable-next-line @typescript-eslint/ban-types
	setOpen: Function,
}

const ConfirmAdminModal: React.FC<IProps> = ({
	admin,
	isOpen,
	setOpen,
}: IProps) => {

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
		const data = {
			admin_name: admin.admin_name,
			admin_email: admin.admin_email,
		}
		mutate(data)
	}

	if (!isOpen) {
		return null;
	}

	return ReactDOM.createPortal(
		<Overlay>
			<Container >
					<h1>Confirme os dados do usuário</h1>
					<ContainerField>
						<Field title='Nome' content={admin.admin_name} />
						<Field title='E-mail' content={admin.admin_email} />
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
				success={true}
				error={false}
				isOpen={true}
				label="Usuário criado com sucesso!"
			/>
		</Overlay>,
		document.getElementById('modal-user-confirmation')!,
	);
}

export default ConfirmAdminModal;