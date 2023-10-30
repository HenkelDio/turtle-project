export interface IStore {
	credentials: ICredentials,
	setCredentials: Function,

	isAuthenticated: boolean,
	setAuthenticated: Function,

	registerType: string,
	setRegisterType: Function,

	onCourse: boolean,

	modules: IModule[],
	setModules: Function,

	userIcon: string,
	setUserIcon: Function
}

export interface ICredentials {
	type: string,
}

export interface IHttpClient {
	baseURL: string,
}

export interface IUserStudent {
	student_company_id: number,
	student_name: string,
	student_cpf: string,
	student_cellphone: string,
	student_email: string,
}

export interface IUserAdmin {
	admin_name: string,
	admin_email: string,
}

export interface ICompany {
	company_name: string,
	company_contact: string,
	company_register: string,
	company_telephone: string,
	company_email: string,
	company_cep: string,
	company_street: string,
	company_district: string,
	company_state: string,
	company_city: string,
	company_address_number: string
}

export interface IFieldErrors {
	field: string,
	message: string
}

export interface IModuleClass {
	title: string,
	id: string,
	completed: boolean,
	videoUrl: string,
	description: string,
	pdfPath: string
}

export interface IModule {
	title: string,
	id: string,
	modules: IModuleClass[]
}

export interface IOptions  {
	option: string,
	text: string
}

export interface IQuestion {
	title: string,
	options: IOptions[],
	correctAnswer: string
}

export interface ICourse {
	id: string,
	courseTitle: string,
	percentage: string,
	modules: IModule[]
	questions: IQuestion[]
}

export interface IContentClass {
	id: string,
	title: string,
	urlVideo: string,
	urlPdf: string,
	content: string,
	completed: boolean
}

export interface IModule {
	id: string,
	title: string,
	classes?: IContentClass[]
}

export interface ICertificate {
	title: string
}