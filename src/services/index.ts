import axios from 'axios';

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
    const { data } = await axios.post(`http://localhost:3000/createStudent`, payload);
    return { data: data, err: null };
  } catch (err) {
    return { data: null, err };
  }
}

export const listStudentes = async () => {
  try {
    const { data } = await axios.get(`http://localhost:3000/getStudents`);
    return { data: data, err: null };
  } catch (err) {
    return { data: null, err };
  }
}

export const addCompanyUser = async (payload: object) => {
  try {
    const { data } = await axios.post(`http://localhost:3000/createCompany`, payload);
    return { data: data, err: null };
  } catch (err) {
    return { data: null, err };
  }
}