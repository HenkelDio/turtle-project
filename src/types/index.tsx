export interface IStore {
	credentials: ICredentials;
	setCredentials: (credentials: ICredentials) => void;

	isAuthenticated: boolean;
	setAuthenticated: (isAuthenticated: boolean) => void;

	registerType: string;
	setRegisterType: (registerType: string) => void;

	modules: IModule[];
	setModules: (modules: IModule[]) => void;

	userIcon: string;
	setUserIcon: (userIcon: string) => void;

	course: ICourse[],
	setCourse: (course: ICourse[]) => void;
}

export interface ICredentials {
	username: string;
	type: string;
	email: string
}

export interface IHttpClient {
	baseURL: string;
}

export interface IUserStudent {
	student_company_id: string;
	student_name: string;
	student_document: string;
	student_phone: string;
	student_email: string;
	courses_id: string[];
}

export interface IUserAdmin {
	admin_name: string;
	admin_email: string;
}

export interface ICompany {
	company_name: string;
	company_contact: string;
	company_register: string;
	company_telephone: string;
	company_email: string;
	company_cep: string;
	company_street: string;
	company_district: string;
	company_state: string;
	company_city: string;
	company_address_number: string;
}

export interface IFieldErrors {
	field: string;
	message: string;
}

export interface IModuleClass {
	title: string;
	id: string;
	completed: boolean;
	videoUrl: string;
	description: string;
	pdfPath: string;
}

// export interface IModule {
// 	title: string,
// 	id: string,
// 	modules: IModuleClass[]
// }

export interface IOptions {
	question_option_id?: number,
	question_id?: number,
	question_option_letter: string;
	question_option_text: string;
}

export interface IQuestion {
	question_id?: number,
	course_id?: number,
	question_text: string;
	questionsOptions: IOptions[];
	question_answer: string;
}

export interface ICourse {
	course_id?: number;
	course_title: string;
	course_description: string;
	modules: IModule[];
	questions?: IQuestion[];
}

export interface ICourseRegister {
	course: ICourse,
	course_id: number,
	is_done: boolean,
	register_id: number,
	student_id: number
}

export interface IContentClass {
	id?: string;
	title: string;
	urlVideo: string;
	urlPdf: string;
	content: string;
	completed: boolean;
}

export interface ILesson {
	lesson_id: number,
	module_id: number,
	lesson_title: string;
	lesson_video_url: string;
	lesson_pdf_url: string;
	lesson_richtext: string;
}

export interface IModule {
	module_id: number,
	course_id?: number,
	module_title: string;
	lessons?: ILesson[];
}

export interface ICertificate {
	title: string;
}

export interface IWorkplace {
	index?: number,
	company_name: string,
	company_register: string,
	company_number: string,
	company_email: string
}

export interface IRegister {
	course: {
		course_title: string
	},
	course_id: number,
	is_done: boolean,
	register_id: number,
	student_id: number
}

export interface IUpdateStudent {
	student: IUserStudent,
	workplace: IWorkplace | undefined
}

export interface ICreateRegister {
	courses_id: number[],
	student_document: string | undefined
}

export interface ICheckEmail {
	email: string
}

export interface ILogin {
	student_email: string,
	student_password: string
}