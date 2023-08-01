import axios from 'axios';
import HttpClient from './utils/HttpClient';

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

export const addStudentUser = async (payload: Object) => {
  try {
    const { data } = await axios.post(`http://localhost:3000/createStudent`, payload);
    return { data: data, err: null };
  } catch (err) {
    return { data: null, err };
  }
}
