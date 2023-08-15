import { ErrorMessage, Field } from "formik"
import RegisterForm from "../RegisterForm";
import { OptionsContainer } from "../RegisterForm/styles";
import Input from "../Input";
import states from "../../mocks/states";
import { useMemo, useState } from "react";

interface IProps {
	name: string,
	placeholder: string,
	title: string,
}

const FieldSelect: React.FC<IProps> = ({ name, placeholder, title }: IProps) => {
	const [searchItem, setSearchItem] = useState<string>('');
	const [selectedItem, setSelectedItem] = useState();
	const [isOpen, setOpen] = useState(false);

	const filteredStates = useMemo(() => states.filter((item) => (
    item.uf.toLowerCase().includes(searchItem.toLowerCase()))), [states, searchItem]);

	const handleSelectedItem = (e: any) => {
		setSelectedItem(e.target.value);
		setOpen(false);
	} 

	const handleOpenDialog = () => {
		setOpen(true)
	}

	return(
		<RegisterForm>

			{
				isOpen && <OptionsContainer>
				<Input placeholder="Pesquise a UF" onChange={e => setSearchItem(e.target.value)}/>
				{
					filteredStates.map((state) => {
						return(
						<>
							<div className="radio-item">
								<input 
								name="radio" 
								id={state.uf} 
								value={state.uf} 
								type="radio" 
								onClick={e => handleSelectedItem(e)} /><label htmlFor={state.uf}>{state.uf}</label>
							</div>
						</>
						)
					})
				}
			</OptionsContainer>
			}

			<label htmlFor={name}>{title}</label>
			<Field name={name} placeholder={placeholder} value={selectedItem} maxLength={2} autoComplete="off" onClick={handleOpenDialog} onFocus={handleOpenDialog}/>
			<ErrorMessage 
				name={name}
				component="span"
			/>
		</RegisterForm>
	)
}

export default FieldSelect;