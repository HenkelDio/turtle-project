export interface IStore {
	credentials: ICredentials,
	setCredentials: Function,

	isAuthenticated: boolean,
	setAuthenticated: Function,

	registerType: string,
	setRegisterType: Function,

	onCourse: boolean,
}

export interface ICredentials {
	type: string,
}

export interface IHttpClient {
	baseURL: string,
}

export interface IUser {
	user_company_id: number,
	user_name: string,
	user_register: string,
	user_telephone: string,
	user_email: string,
}

export interface ICompany {
	company_name: string,
	company_address: IAddressCompany,
	company_contact: string,
	company_register: string,
	company_telephone: string,
	company_email: string,
}

interface IAddressCompany {
	cep: string,
	street: string,
	number: string,
	district: string,
}

export interface IFieldErrors {
	field: string,
	message: string
}