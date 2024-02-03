/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from "axios";

// class UsersService {
// 	httpClient: HttpClient;
//   constructor() {
//     this.httpClient = new HttpClient('http://localhost:3000');
//   }

//   async addStudentUser(payload: Object) {
//     const response = this.httpClient.post(`/createStudent`, payload);
//     return response;
//   }

// }

export const addStudentUser = async (payload: object) => {
	try {
		const { data } = await axios.post(
			`${import.meta.env.VITE_APP_SERVER}/createStudent`,
			payload,
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const listStudentes = async (page: number, pageSize: number) => {
	try {
		const { data } = await axios.get(
			`${import.meta.env.VITE_APP_SERVER}/getStudents?page=${page}&pageSize=${pageSize}`,
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};

export const addCompanyUser = async (payload: object) => {
	try {
		const { data } = await axios.post(
			`${import.meta.env.VITE_APP_SERVER}/createCompany`,
			payload,
		);
		return { data: data, err: null };
	} catch (err) {
		return { data: null, err };
	}
};
