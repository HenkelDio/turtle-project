export interface IStore {
	credentials: ICredentials,
	setCredentials: Function,

	isAuthenticated: boolean,
	setAuthenticated: Function,
}

export interface ICredentials {
	type: string,
}

export interface IHttpClient {
	baseURL: string,
}