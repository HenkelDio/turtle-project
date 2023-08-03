export interface IStore {
	credentials: ICredentials,
	setCredentials: Function,

	isAuthenticated: boolean,
	setAuthenticated: Function,

	registerType: string,
	setRegisterType: Function,
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

export interface IFieldErrors {
	field: string,
	message: string
}