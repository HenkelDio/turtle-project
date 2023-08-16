import * as yup from 'yup';

export const studentValidation = yup.object().shape({
	student_name: yup.string()
	.required('O "nome do estudante" é obrigatório'),

	student_email: yup.string()
	.required('O "e-mail" é obrigatório')
	.email('Digite um e-mail válido'),

	student_cpf: yup.string()
	.required('O "CPF" é obrigatório'),

	student_cellphone: yup.string()
	.required('O "número" é obrigatório')

})

export const workplaceValidation = yup.object().shape({
	company_name: yup.string()
	.min(5, 'O "nome da empresa" é muito curto')
	.required('O campo "nome da empresa" é obrigatório'),

	company_register: yup.string()
	.min(18, 'O "CNPJ" está muito curto')
	.max(18)
	.required('O "CNPJ" é obrigatório'),

	company_contact: yup.string()
	.required('O "Nome do responsável" é obrigatório'),

	company_email: yup.string()
	.email("Digite um e-mail válido")
	.required('O "E-mail" é obrigatório'),

	company_telephone: yup.string()
	.required('O "número de contato" é obrigatório'),

	company_cep: yup.string()
	.required('O "CEP" é obrigatório'),

	company_street: yup.string()
	.required('A "Rua" é obrigatória'),

	company_address_number: yup.string()
	.required('Obrigatório'),

	company_district: yup.string()
	.required('O "Bairro" é obrigatório'),

	company_city: yup.string()
	.required('A "Cidade" é obrigatória'),

	company_state: yup.string()
	.min(2, 'Obrigatório')
})
