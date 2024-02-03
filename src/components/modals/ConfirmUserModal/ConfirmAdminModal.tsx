/* eslint-disable @typescript-eslint/no-misused-promises */
import ReactDOM from "react-dom";
import {
	Container,
	Footer,
	Overlay,
	ContainerField,
	LoadingContainer,
} from "../styles";
import Field from "../../ProfileField";
import Button from "../../Button";
import { IUserAdmin } from "../../../types";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addStudentUser } from "../../../services";
import Loader from "../../Loader";
import Alert from "../../Alert";
import delay from "../../../utils/delay";

interface IProps {
	admin: IUserAdmin;
	isOpen: boolean;
	// eslint-disable-next-line @typescript-eslint/ban-types
	setOpen: Function;
}

const ConfirmAdminModal: React.FC<IProps> = ({
	admin,
	isOpen,
	setOpen,
}: IProps) => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
	const [label, setLabel] = useState("");

	const queryClient = useQueryClient();

	const { mutate, isLoading } = useMutation(["user"], addStudentUser, {
		onSuccess: async ({ data, err }) => {
			await delay();

			if (!err) {
				if (data && data.data) {
					console.log(data.data);
					setSuccess(true);
					setError(false);
					setLabel("Usuário adicionado com sucesso!");
					setOpenDialog(true);
					await delay(5000);
					setOpenDialog(false);
				}
			}

			if (err) {
				setError(true);
				setSuccess(false);
				setOpenDialog(true);
				setLabel("Não foi possível adicionar o usuário!");
				await delay(5000);
				setOpenDialog(false);
			}
		},
		onSettled: async () => {
			await queryClient.invalidateQueries("create");
		},
	});

	const handleCreateUser = () => {
		const data = {
			admin_name: admin.admin_name,
			admin_email: admin.admin_email,
		};
		mutate(data);
	};

	if (!isOpen) {
		return null;
	}

	return ReactDOM.createPortal(
		<Overlay>
			<Container>
				{isLoading && (
					<LoadingContainer>
						<Loader />
					</LoadingContainer>
				)}

				<h1>Confirme os dados do usuário</h1>
				<ContainerField>
					<Field title="Nome" content={admin.admin_name} />
					<Field title="E-mail" content={admin.admin_email} />
				</ContainerField>
				<Footer>
					<button
						type="button"
						className="cancel-button"
						onClick={() => setOpen(false)}
					>
						Cancelar
					</button>

					<Button
						type="button"
						onClick={() => handleCreateUser()}
						disabled={isLoading}
					>
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
		document.getElementById("modal-user-confirmation")!,
	);
};

export default ConfirmAdminModal;
